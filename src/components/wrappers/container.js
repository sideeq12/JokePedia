import * as React from "react";
import LowerBox from "../lowerContainer"

function Container(){
    return(
        <div className="container">
            <div className="jumbotron">
              <h3>JokePedia</h3> 
            </div>
            <LowerBox />
        </div>
    )
}
export default Container;