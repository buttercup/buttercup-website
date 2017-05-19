export const isFirefox = (typeof navigator !== 'undefined') && /firefox/i.test(navigator.userAgent);
export const isLinux = (typeof navigator !== 'undefined') && /linux/i.test(navigator.platform);
