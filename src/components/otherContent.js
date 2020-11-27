import * as React  from "react";
import {Component} from "react";

class otherContent extends Component{
    constructor(){
        super();
        this.state = {
            SecondWest : [
                {
                    id : 1,
                    message : "Checking out latest jokes"
                }
            ]
        }
    }
    render(){
        return(
            <p>{this.state.SecondWest[0].message}</p>
        )
}
}
export default otherContent;
