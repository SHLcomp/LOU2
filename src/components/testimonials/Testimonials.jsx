import React from "react";
import "./Testimonials.scss";
import data from '../../data/testimonials.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>
        Real Stories From <span>Real Teams</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi
        labore alias perferendis cumque accusantium possimus soluta quos
        quibusdam itaque architecto voluptatem incidunt quis eum ducimus
        facilis, aut, reprehenderit ab.
      </p>
      <div className="cards">
        {data.map((item)=>{
            // let len = item.stars.length;
            // for (let i = 0; i> len; i++;){
            //     return (
                    
            //     )
            // }
            return(
                <div className="card">
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        
                    </div>
                    <p>{item.msg}</p>
                    <div className="pfp">
                        <img src={item.pfpImg} alt="" />
                        <div className="pfp-info">
                            <h3>{item.pfpName}</h3>
                            <p>{item.pfpMidName}</p>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Testimonials;
