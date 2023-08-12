import React from "react";
import "./Card.css";

export default function Card(props) {
  console.log(props.skills.html);
  var html = props.skills.html ? "html" : "";
  var css = props.skills.css ? "css" : "";
  var js = props.skills.js ? "js" : "";

  return (
    <div className="cards">
      <div className="img">
        <img class="image-style" src={props.avatar} alt="" srcset="" />
      </div>
      <div className="detail">
        <h2>{props.name}</h2>
        <div className="email">email: {props.email}</div>
        <div className="gender">Gender: {props.gender}</div>
        <div className="website">website: {props.email}</div>

        <div className="skills">
          skills: <span>{html}</span> <span>{css}</span> <span>{js}</span>
        </div>
      </div>
      {/* sataym */}
    </div>
  );
}
