export const chromeExtensionUrl =
  'https://chrome.google.com/webstore/detail/buttercup/heflipieckodmcppbnembejjmabajjjj?hl=en';
export const firefoxExtensionUrl = 'https://addons.mozilla.org/en-US/firefox/addon/buttercup-pw/';

export function installChromeExtension() {
  chrome.webstore.install();
}

export function installFirefoxExtension() {
  InstallTrigger.install({
    Buttercup: {
      URL: 'https://addons.mozilla.org/firefox/downloads/latest/buttercup-pw/addon-795525-latest.xpi?src=dp-btn-primary'
    }
  });
}
