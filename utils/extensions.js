export const chromeExtensionUrl =
  'https://chrome.google.com/webstore/detail/buttercup/heflipieckodmcppbnembejjmabajjjj?hl=en';
export const edgeExtensionUrl = 'https://microsoftedge.microsoft.com/addons/detail/buttercup/jjcapdgcepplkhhfaopdoknkccjnlmlf';
export const firefoxExtensionUrl = 'https://addons.mozilla.org/en-US/firefox/addon/buttercup-pw/';

export function installChromeExtension() {
  chrome.webstore.install();
}
