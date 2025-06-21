import { useBreakpointValue } from '@chakra-ui/react';
import { useMemo } from 'react';

function useDevice() {
  // Chakra breakpoints (adjust for your design system)
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  // Touch device detection
  const isTouchDevice = useMemo(
    () =>
      typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0),
    []
  );

  // Orientation detection
  const orientation = useMemo(() => {
    if (typeof window === 'undefined' || typeof window.screen === 'undefined') {
      return 'portrait';
    }
    return window.screen.orientation?.type?.includes('landscape') ? 'landscape' : 'portrait';
  }, []);

  return {
    isMobile: !!isMobile,
    isTablet: !!isTablet,
    isDesktop: !!isDesktop,
    isTouchDevice,
    orientation,
  };
}

export default useDevice;
