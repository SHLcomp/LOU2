import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import "./Hero.scss";
import { useGSAP } from "@gsap/react";
import earth from "../../assets/earth.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headerRef = useRef(null);
  const subheaderRef = useRef(null);
  const pageRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      let split = new SplitText(headerRef.current, { type: "chars" });
      let split3 = new SplitText(headerRef.current, { type: "lines" });
      let split2 = new SplitText(subheaderRef.current, { type: "lines" });

      // split.chars.forEach((c) => (c.style.display = "inline"));
      // split2.lines.forEach((l) => (l.style.display = "inline"));

      let chars = split.chars;
      let lines = split2.lines;
      let lines2 = split3.lines;

      gsap.from(chars, {
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "expo.out",
        yPercent: 100,
        delay: 0.5,
      });

      gsap.from(lines2, {
        opacity: 0,
        duration: 1,
        stagger: 0.06,
        ease: "expo.out",
        yPercent: 100,
        delay: 0.5,
        x: 30,
      });

      gsap.from(lines, {
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
        stagger: 0.06,
        ease: "expo.out",
        delay: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "50% 50%",
          end: "center top",
          scrub: true,
        },
      });

      tl.to(imgRef.current, {
        y: "-140vh",
        x: "30vw",
        display: "none",
        ease: "expo.out",
      });
    });

    gsap.to(pageRef.current, {
      "--sweep-x": "30%",
      scrollTrigger: {
        trigger: pageRef.current,
        start: "center 49%",
        end: "center top",
        scrub: 0.5,
        markers:true
      },
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero noise" ref={pageRef}>
      <div className="top">
        <h1 ref={headerRef}>
          {/* L<span>ight</span> O<span>f the</span> U<span>niverse</span> */}
          <span>L</span>.<span>O</span>.<span>U</span>
        </h1>
        <h4 ref={subheaderRef}>
          Light of the Universe crafts extraordinary experiences through
          innovation, elegance, and attention to detail. We design
          transformative events, concepts, and environments that reflect
          culture, emotion, and purpose — turning every moment into an
          illuminated memory.
        </h4>
        <div className="ctas">
          <h3 className="cta">Illuminate Your Vision</h3>
          <h3 className="cta2">View Our Work</h3>
        </div>
        <p>Scroll To Explore</p>
      </div>

      <div className="bottom">
        <img src={earth} alt="" ref={imgRef} />
      </div>
    </div>
  );
};

export default Hero;
