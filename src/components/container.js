import * as React from "react";
import JokeBox from "./jokeBox";
import JokeContent from "./JokeContent"

function Container(){
    return(
        <div className="container">
            <div className="jumbotron">
              <h3>JokePedia</h3> 
              <JokeBox />
            </div>
            <JokeContent />
            
        </div>
    )
}
export default Container;