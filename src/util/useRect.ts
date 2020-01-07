import {useLayoutEffect, useCallback, useState} from 'react'


const getRect = (element) => {
  if (!element) {
    return new DOMRect(0, 0, 0 ,0);
  }

  return element.getBoundingClientRect()
};


export const useRect = (ref) => {
  const [rect, setRect] = useState(getRect(ref ? ref.current : null));

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return
    }

    // Update client rect
    setRect(getRect(ref.current))
  }, [ref]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref.current]);

  return rect;
};
