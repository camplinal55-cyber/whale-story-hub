import React, { useEffect, useRef, useState } from "react";

// Generic scroll-reveal wrapper using IntersectionObserver.
// Optional onReveal callback fires once when element enters view.
const Reveal = ({ children, className = "", delay = 0, as: Tag = "div", onReveal, threshold = 0.2 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (onReveal) onReveal();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delayClass = delay ? ` delay-${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal${inView ? " in-view" : ""}${delayClass} ${className}`}>
      {children}
    </Tag>
  );
};

export default Reveal;
