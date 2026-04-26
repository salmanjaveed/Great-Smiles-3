import { useState, useEffect } from 'react';

export function useCountUp(target, duration = 2200, inView = false) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ticks = duration / 40;
    let tick = 0;
    const id = setInterval(() => {
      tick++;
      const p = Math.min(tick / ticks, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(ease * target));
      if (p >= 1) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [inView, target, duration]);

  return val;
}
