import * as React from "react";
import Heading from "./Heading";
import JokeContent from "./JokeContent";
import RefreshButton from "./RefreshButton"

function JokeBox(props){
    return(
        <div className={props.class}>
            <Heading >KANYE JOKES! </Heading>
            <JokeContent />
            <RefreshButton />
        </div>
    )
}
export default JokeBox;