import { useEffect, useRef, useState } from "react";

function useElemOnScreen() {
  const elemRef = useRef(null);
  const [elemOnScreenResult, setElemOnScreenResult] = useState([]);

  function handleIntersection(entries) {
    setElemOnScreenResult(entries[0].isIntersecting);
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
    const target = elemRef.current;
    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [elemRef]);

  return [elemRef, elemOnScreenResult];
}

export default useElemOnScreen;
