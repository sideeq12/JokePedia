import * as React from "react";
import Heading from "./Heading";
import JokeContent from "./JokeContent";
import RefreshButton from "./RefreshButton"

function JokeBox(){
    return(
        <div className="JokeBox">
            <Heading > Joke Title</Heading>
            <JokeContent />
            <RefreshButton />
        </div>
    )
}
export default JokeBox;