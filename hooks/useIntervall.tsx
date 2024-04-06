import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    let id: NodeJS.Timeout;

    const onFocus = () => {
      id = setInterval(handler, delay);
    };

    const onBlur = () => {
      clearInterval(id);
    };

    onFocus();

    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);

    return () => {
      clearInterval(id);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, [delay]);
};

export default useInterval;

// Old Implementation which causes problems when tab gets out of focus
// import React, { useEffect, useRef } from 'react';

// export default function useInterval(
//   callback: React.EffectCallback,
//   delay: number | null
// ): React.MutableRefObject<number | null> {
//   const intervalRef = useRef<number | null>(null);
//   const callbackRef = useRef(callback);

//   useEffect(() => {
//     callbackRef.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     if (typeof delay === 'number') {
//       intervalRef.current = window.setInterval(
//         () => callbackRef.current(),
//         delay
//       );

//       return () => window.clearInterval(intervalRef.current || 0);
//     }
//   }, [delay]);

//   return intervalRef;
// }
