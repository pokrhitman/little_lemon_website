import { useEffect, useState } from 'react';

function getDeviceState(breakpoints = { mobile: 800, tablet: 1200 }) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isTouch = navigator.maxTouchPoints > 0;
  const orientation = width > height ? 'landscapte' : 'portrait';

  return {
    isMobile: width < breakpoints.mobile,
    isTablet: width >= breakpoints.mobile && width < breakpoints.tablet,
    isDesktop: width >= breakpoints.tablet,
    isTouchDevice: isTouch,
    orientation,
    width,
    height,
  };
}

export default function useDevice(breakpoints = { mobile: 800, tablet: 1200 }) {
  const [device, setDevice] = useState(() => getDeviceState(breakpoints));

  useEffect(() => {
    const handleResize = () => setDevice(getDeviceState(breakpoints));
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [breakpoints]);

  return device;
}
