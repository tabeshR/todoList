import React from "react";
import './style.css';
function Plus({click}) {
    return (<div className="marginTop10">

            <span className="Plus fas fa-plus" onClick={click}></span>

    </div>)
}
export default Plus;