import { useRef, useEffect } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if(isLoading) return 
        if(observer.current) observer.current.disconnect();
        const cb = function(entries, observer) {
          if(entries[0].isIntersecting && canLoad) {
            callback()
          }
    
          console.log("ПОПАЛСЯ")
        }
    
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
      }, [isLoading])
}