import { useEffect, useRef } from "react";

const useDeepEffect = (callback, dependencies) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      // Perform deep comparison of dependencies
      const areEqual = dependencies.every(
        (dependency, index) => dependency === didMountRef.current[index]
      );

      // Run the effect only if dependencies have changed
      if (!areEqual) {
        callback();
      }
    } else {
      // On first render, initialize the ref with the current dependencies
      didMountRef.current = dependencies;
    }
  }, dependencies);
};

export default useDeepEffect;
