import { ChromeLocalizationObserver } from '../../lib/observer/chrome';
import { HTMLLocalization } from '../../lib/dom/html';

import { ChromeResourceBundle } from './io';
import { HTMLDocumentReady, getResourceLinks, createGetValue, createObserve }
  from './util';

Components.utils.import('resource://gre/modules/Services.jsm');
Components.utils.import('resource://gre/modules/L10nRegistry.jsm');
Components.utils.import('resource://gre/modules/IntlMessageContext.jsm');

const functions = {
  OS: function() {
    switch (Services.appinfo.OS) {
      case 'WINNT':
        return 'win';
      case 'Linux':
        return 'lin';
      case 'Darwin':
        return 'mac';
      case 'Android':
        return 'android';
      default:
        return 'other';
    }
  }
};

function createContext(lang) {
  return new MessageContext(lang, { functions });
}

document.l10n = new ChromeLocalizationObserver();
window.addEventListener('languagechange', document.l10n);

for (let [name, resIds] of getResourceLinks(document.head)) {
  if (!document.l10n.has(name)) {
    createLocalization(name, resIds);
  }
}

function createLocalization(name, resIds) {
  function requestBundles(requestedLangs = navigator.languages) {
    return L10nRegistry.getResources(requestedLangs, resIds).then(
      ({bundles}) => bundles.map(
        bundle => new ChromeResourceBundle(bundle.locale, bundle.resources)
      )
    );
  }

  const l10n = new HTMLLocalization(requestBundles, createContext);
  l10n.observe = createObserve(document.l10n);

  window.addEventListener('pageshow', () => {
    Services.obs.addObserver(l10n, 'language-registry-update', false);
    Services.obs.addObserver(l10n, 'language-registry-incremental', false);
  });

  window.addEventListener('pagehide', () => {
    Services.obs.removeObserver(l10n, 'language-registry-update');
    Services.obs.removeObserver(l10n, 'language-registry-incremental');
  });

  // XXX this is currently used by about:support; it doesn't support language
  // changes nor live updates
  document.l10n.ready = l10n.interactive;
  document.l10n.ready.then(
    bundles => document.l10n.getValue = createGetValue(bundles)
  );
  document.l10n.set(name, l10n);

  if (name === 'main') {
    HTMLDocumentReady().then(() => {
      const rootElem = document.documentElement;
      document.l10n.observeRoot(rootElem, l10n);
      document.l10n.translateRoot(rootElem, l10n);
    });
  }
}
