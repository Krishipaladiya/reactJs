import React, { Component } from 'react';

class Time extends Component {
        constructor(props) {
            super(props);
            this.state = {
                time : new Date ()
            }
        }

        tick = () => {
            this.setState ({
                time : new Date ()
            })
        }

        componentDidMount = () => {
        this.timeI =  setInterval(()=> this.tick(),1000);
        }
        
        componentDidUpdate = (prevProps,prevState) => {
            if(prevState.time !== this.state.time){
                console.log("hello");
            }
        }
        componentWillUnmount = () => {
            clearInterval (this . timeI);
        }


    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;