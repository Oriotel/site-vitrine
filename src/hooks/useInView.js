import { useState, useEffect, useRef } from 'react';
const useInView = (options = {}) => {
    const { triggerOnce = false, ...observerOptions } = options;
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || (triggerOnce && hasTriggered.current)) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (triggerOnce) {
                    hasTriggered.current = true;
                    observer.unobserve(element);
                }
            } else if (!triggerOnce) {
                setIsInView(false);
            }
        }, observerOptions);

        observer.observe(element);
        return () => {
            if (element) { observer.unobserve(element); }
        };
    }, [observerOptions.root, observerOptions.rootMargin, observerOptions.threshold, triggerOnce]);

    return [ref, isInView];
};

export default useInView;