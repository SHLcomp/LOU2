import React from "react";
import "./Process.scss";
import earth from "../../assets/earth.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {

  //refs
  const pageRef = useRef(null)
  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const title2Ref = useRef(null)
  const liRef1 = useRef(null)
  const liRef2 = useRef(null)
  const liRef3 = useRef(null)
  const liRef4 = useRef(null)
  const liRef5 = useRef(null)
  const liRef6 = useRef(null)
  const liRef7 = useRef(null)

  useGSAP(()=>{

    let split = new SplitText(title2Ref.current, { type: "chars" });
    let split2 = new SplitText(title2Ref.current, { type: "lines" });

    // split.chars.forEach((c) => (c.style.display = "inline"));
    // split2.lines.forEach((l) => (l.style.display = "inline"));

    let chars = split.chars;
    let lines = split2.lines;


    gsap.from(chars, {
      opacity: 0,
      duration: 0.006,
      stagger: 0.006,
      ease: "expo.out",
      yPercent: 100,
      delay: 0.5,
    });

    gsap.from(lines, {
      opacity: 0,
      duration: .04,
      stagger: 0.06,
      ease: "expo.out",
      yPercent: 100,
      delay: 0.5,
      x: 30,
    });

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: pageRef.current,
        start: "top center",
        end: "top top",
      }
    });


    gsap.from(imgRef.current,{
      opacity: 0,
      scale: 0,
      ease: "expo.out",
      scrollTrigger:{
        trigger: pageRef.current,
        start: "top 90%",
        end: "top top",
        scrub: true
      }
    });

    tl.from(titleRef.current,{
      x: 30,
      y: 400,
      opacity: 0
    });
    tl.from(title2Ref.current,{
      x: 30,
      y: 400,
      opacity: 0
    });


  })
  
  return (
    <div className="process noise" ref={pageRef}>
      <div className="img" ref={imgRef}>
        <img src={earth} alt="" />
      </div>
      <div className="txt-cont">
        <div className="left" ref={titleRef}>
          <h1>
            Our <span>Universal</span> Workflow
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur provident, suscipit dolorem dicta incidunt optio
            recusandae ut maiores maxime nesciunt libero sint commodi.
            Provident, culpa aut est voluptate perferendis sed.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eos
            minima, maiores a voluptas ratione nihil, quas ullam eius
            necessitatibus similique provident modi possimus omnis? Blanditiis
            suscipit quaerat temporibus laborum!
          </p>
          <h3 className="cta">View Orbit</h3>
        </div>
        <div className="right" ref={title2Ref}>
          <ul>
            <li ref={liRef1}>
              1. <span>Vision Alignmen</span> — “Where your journey begins”
            </li>
            <li ref={liRef2}>
              2. <span>Research & Exploration</span> — “Mapping the digital
              cosmo”
            </li>
            <li ref={liRef3}>
              3. <span>Concept & Storytelling</span> — “Crafting your
              constellation”
            </li>
            <li ref={liRef4}>
              4. <span>Vision Alignmen</span> — “Where your journey begins”
            </li>
            <li ref={liRef5}>
              5. <span>Development & Engineering</span> — “Giving your vision
              gravity”
            </li>
            <li ref={liRef6}>
              6. <span>Quality Assurance</span> — “Ensuring a stable orbit”
            </li>
            <li ref={liRef7}>
              7. <span>Launch & Monitoring</span> — “Your universe, live and
              expanding”
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Process;
