import * as React from "react";
import JokeBox from "./jokeBox"

function LowerBox(){
    return(
        <div className="lowerBox">
            <JokeBox />
            <JokeBox />
        </div>
    )
}
export default LowerBox;