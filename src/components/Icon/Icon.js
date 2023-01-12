import React from 'react'
import "./icon.css";
function Icon(props) {
  return (
    <div className="icon-wrapper">
        <div className="upper">
            <img className="icon"
            src={props.iconUrl} 
            alt={props.altName}
        />
        </div>
        <div className="bottom">
            <h1 className="title-icon">{props.title}</h1>
        </div>     
    </div>
  )
}

export default Icon
