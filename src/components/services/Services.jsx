import React, { useRef } from "react";
import "./Services.scss";
import data from "../../data/services";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const pageRef = useRef(null);
    const pinnedRef = useRef(null);
    const txtRef = useRef(null);
    const subtxtRef = useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pageRef.current,
                start: "top center",
                end: "top top",
            }
        });
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: pageRef.current,
                start: "center 70%",
                end: "bottom 30%",
                pin: pinnedRef.current,
                scrub: true,
            }
        });

        tl.from(txtRef.current,{
            opacity:0,
            y: 30
        });
        tl.from(subtxtRef.current,{
            opacity:0,
            y: 30,
            delay: 0.2
        });

        tl2.to(pinnedRef.current,{
            opacity:0
        })

    })

  return (
    <div className="services" ref={pageRef}>
      <div className="pinned txt" ref={pinnedRef}>
        <h1 ref={txtRef}><span>LOU</span> Services are <span>Beyond</span> the <span>Horizon</span></h1>
        <p ref={subtxtRef}>
          Our mission is to create unforgettable experiences that captivate and
          inspire. From conceptualization to execution. Delivering seamless
          event management with a touch of elegance, ensuring every detail is
          perfect and every moment unforgettable. At Light Of the Universe, we
          believe that every event should be a masterpiece, and we are dedicated
          to making that a reality
        </p>
      </div>

      {/* <div className="cont">
        <div className="cards">
          {data.map((item) => {
            return (
              <div className="card moveCard">
                <div className="card-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="card-text">
                  <h3>{item.name}</h3>
                  <p>{item.des}</p>
                  <h5 className="cta2">Read more</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      
    </div>
  );
};

export default Services;
