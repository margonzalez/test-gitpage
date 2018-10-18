import MobileDetect from 'mobile-detect';

import { MobileBreakpoint, TabletBreakpoint, FullHDBreakpoint, HDBreakpoint } from 'constants/deviceSizes';

export const isFirefox = () => typeof InstallTrigger !== 'undefined';

export const isIE = /* @cc_on!@ */ false || !!document.documentMode;

const deviceDetector = new MobileDetect(window.navigator.userAgent);

export const retrieveWidth = () => {
  let width;
  if (document.body && document.body.offsetWidth) {
    width = document.body.offsetWidth;
  }
  if (
    document.compatMode === 'CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth
  ) {
    width = document.documentElement.offsetWidth;
  }
  if (window.innerWidth) {
    width = window.innerWidth;
  }
  if (window.visualViewport) {
    ({ width } = window.visualViewport);
  }
  return width;
};

export const isMobile = () => !!deviceDetector.phone() || retrieveWidth() < MobileBreakpoint;

export const isTablet = () =>
  !!deviceDetector.tablet() || (retrieveWidth() < TabletBreakpoint && retrieveWidth() >= MobileBreakpoint);

export const isDesktop = () => retrieveWidth() >= TabletBreakpoint;

export const isDesktopHD = () => isDesktop() && retrieveWidth() < HDBreakpoint;

export const isFullHD = () => retrieveWidth() === FullHDBreakpoint;

export const isBigScreen = () => retrieveWidth() > FullHDBreakpoint;

export const RESIZE_EVENT = 'resize';
