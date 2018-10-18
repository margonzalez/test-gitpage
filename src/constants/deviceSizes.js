import React from 'react';
import Responsive from 'react-responsive';

export const TabletBreakpoint = 1024;
export const MobileBreakpoint = 768;
export const FullHDBreakpoint = 1920;
export const HDBreakpoint = 1380;

// For conditional rendering
export const DesktopViewport = ({ children }) => (
  <Responsive minWidth={TabletBreakpoint}>{children}</Responsive>
);
export const TabletViewport = ({ children }) => (
  <Responsive minWidth={MobileBreakpoint} maxWidth={TabletBreakpoint - 1}>
    {children}
  </Responsive>
);
export const MobileViewport = ({ children }) => (
  <Responsive maxWidth={MobileBreakpoint - 1}>{children}</Responsive>
);

// Group tablet & desktop viewport
export const DefaultViewport = ({ children }) => (
  <Responsive minWidth={MobileBreakpoint}>{children}</Responsive>
);
export const TabletMobileViewport = ({ children }) => (
  <Responsive maxWidth={TabletBreakpoint - 1}>{children}</Responsive>
);
