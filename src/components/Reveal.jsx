import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(node, { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, delay,
        ease: "power3.out",
        scrollTrigger: { trigger: node, start: "top 88%", once: true }
      });
    }, node);
    return () => ctx.revert();
  }, [delay]);
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
