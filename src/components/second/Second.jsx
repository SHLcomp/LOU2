import React from "react";
import rock1 from "../../assets/rock1.png";
import rock2 from "../../assets/rock2.png";
import "./Second.scss";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const pageRef = useRef(null);
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const rockRef1 = useRef(null);
  const rockRef2 = useRef(null);
  const rockRef3 = useRef(null);
  const rockRef4 = useRef(null);

  useGSAP(() => {
    let split = new SplitText(textRef.current, { type: "chars" });
    let split2 = new SplitText(subtextRef.current, { type: "lines" });

    let chars = split.chars;
    let lines = split2.lines;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "center 80%",
        end: "center top",
      },
    });

    tl.from(chars, {
      opacity: 0,
      yPercent: 100,
      duration: 0.8,
      stagger: 0.06,
      ease: "expo.out",
    });

    tl.from(lines, {
      opacity: 0,
      yPercent: 100,
      duration: 0.3,
      stagger: 0.06,
      ease: "expo.out",
    });

    const rocks = [rockRef1, rockRef2, rockRef3, rockRef4];

    rocks.forEach((rock) => {
      gsap.to(rock.current, {
        xPercent: gsap.utils.random(-10, 10),
        yPercent: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    rocks.forEach((rock) => {
      gsap.to(rock.current, {
        y: 100,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "center 80%",
          end: "center top",
          scrub: true,
        },
      });
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "bottom 70%",
        end: "bottom 20%",
        scrub: true
      },
    });
    tl2.to(rockRef4.current,{
        y: "70vh",
        x: "-30vw",
        scale: 1.2
    })
  });

  return (
    <div className="sec" ref={pageRef}>
      <div className="top">
        <h1 ref={textRef}>
          Illuminating <span>Bold</span> Experiences
        </h1>
        <p ref={subtextRef}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel
          ipsam obcaecati, iusto officia ipsum quibusdam sit quidem laborum
          excepturi voluptas facere cum aliquam debitis assumenda perspiciatis
          rem fugit dicta?
        </p>
      </div>
      <div className="decor">
        <img src={rock1} alt="" ref={rockRef1} />
        <img src={rock2} alt="" ref={rockRef2} />
        <img src={rock2} alt="" ref={rockRef3} />
        <img src={rock1} alt="" ref={rockRef4} />
      </div>
    </div>
  );
};

export default Second;
