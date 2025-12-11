import React from "react";
import "./Constellations.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Constellations = () => {
  const pageRef = useRef(null);
  const txt1Ref = useRef(null);
  const subtxt2Ref = useRef(null);
  const subtxt1Ref = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top 20%",
        end: "top top",
      },
    });

    tl.from(txt1Ref.current, {
      opacity: 0,
      x: 10,
    });
    tl.from(subtxt2Ref.current, {
      opacity: 0,
      x: 10,
    });
    tl.from(subtxt1Ref.current, {
      opacity: 0,
      x: 10,
      delay: 0.2,
    });
  
    
  });

  return (
    <div className="const" ref={pageRef}>
      <div className="left">
        <span>Lou Services</span>
        <h1 ref={txt1Ref}>
          We Map the Path From <span>Spark</span> to <span>Spectacle</span>
        </h1>
        <p ref={subtxt1Ref}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quia
          omnis, fugit debitis at eveniet fugiat eum nihil provident excepturi
          eos aspernatur libero animi qui inventore ullam dolorum voluptate aut?
        </p>
        <h3 className="cta" ref={ctaRef}>
          View Constellations
        </h3>
      </div>

      <div className="right">
        {/* <span>Lou Services</span> */}
        {/* <h1>Your <span>Ideas</span>. Our <span>Light</span>. Universal impact.</h1> */}
        <p ref={subtxt2Ref}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quia
          omnis, fugit debitis at eveniet fugiat eum nihil provident excepturi
          eos aspernatur libero animi qui inventore ullam dolorum voluptate aut?
        </p>
      </div>
    </div>
  );
};

export default Constellations;
