import React, {Component} from 'react';
import Container from "./container"

class App extends Component{
    constructor(){
        super();
        this.state = {
            KevinJokes : {},
            secongJokes : {}
        }
    }
    render(){
        return(
            <div>
                <Container />
            </div>
        )
    }
}
export default App;
