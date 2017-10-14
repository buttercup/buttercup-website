export const isFirefox = typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);
export const isChrome = typeof navigator !== 'undefined' && /chrome/i.test(navigator.userAgent);
export const isLinux = typeof navigator !== 'undefined' && /linux/i.test(navigator.platform);
export const isMac = typeof navigator !== 'undefined' && /macintel/i.test(navigator.platform);
export const isWindows = typeof navigator !== 'undefined' && /win/i.test(navigator.platform);
