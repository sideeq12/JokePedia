import * as React from "react";
import JokeBox from "./jokeBox"

function LowerBox(){
    return(
        <div className="lowerBox">
            <JokeBox class="JokeBox"/>
            <JokeBox class="JokeBox1" />
        </div>
    )
}
export default LowerBox;