import * as React from "react";
import {Component} from "react"


class JokeContent extends Component{
  constructor(){
      super();
      this.state = {
          KanyeWest : [
              {
                  id : 1, 
                  message : "After a long day of work, Kanye West goes to his Kanye Nest to take his Kanye Rest. He wakes up feeling his Kanye Best. Then he’ll get Kanye Dressed on his Kanye Vest to go on a Kanye Quest. He goes to church and becomes Kanye Blessed, then to a hotel room to be a Kanye Guest. Then to school to take his Kanye Test. He forgot to brush his teeth. Did he run out of Kanye Crest? His neighbor stole it, what a Kanye Pest."
              }
          ],
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
          <h2>{this.state.KanyeWest[0].message}</h2>
      )
  }
}
export default JokeContent;