import { useEffect, useState } from 'react';

const UseCustomResizer = ({ width = 700 }) => {
  const [isMobile, setIsMobile] = useState(false);
  const triggerTable = () => {
    if (window.innerWidth < width) { setIsMobile(true); } else setIsMobile(false);
  };

  useEffect(() => {
    triggerTable();
    window.addEventListener('resize', triggerTable);
    return (() => window.removeEventListener('resize', triggerTable));
  }, []);

  return {
    isMobile,
  };
};

export default UseCustomResizer;
