import React from "react";
import { getMergesortanime } from "../Mergesort/Mergesortalgo";
import './Mergesortviz.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED = 4;

export default class Mergesortviz extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            array : [],
        };
    }

    componentDidMount(){
        this.newArray();
    }

    //step 4
    mergesort(){

        const animearr = getMergesortanime(this.state.array);

        for(let i=0;i<animearr.length;i++){

            const arraybar = document.getElementsByClassName('arraya');
            const isColorChange = i%3 !== 2;

            if(isColorChange){
                const [bar1 , bar2] = animearr[i];
                const bar1color = arraybar[bar1].style;
                const bar2color = arraybar[bar2].style;
                const color = i%3 === 0 ? 'red' : '#afdede';

                setTimeout(() =>{
                    bar1color.backgroundColor = color;
                    bar2color.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            }
            else{
                setTimeout(() => {
                    const [bar1 , newHeight] = animearr[i];
                    const bar1color = arraybar[bar1].style;
                    bar1color.height = `${newHeight}px`;
                    
                }, i*ANIMATION_SPEED);
            }
        }
        
    }

    //step1
    newArray(){
        const array = [];
        for(let i=0;i<220;i++){
            array.push(randomarray(5,700));
        }
        this.setState({array});
    }

    //step 2
    render(){
        const {array} = this.state;

        return(
            <div className="container">
            {array.map((value,idi) => (
                <div className="arraya" key={idi} style={{height: `${value}px`}}>
                </div>
            ))}

            <div>
            <button onClick={() => this.newArray()}>New Array</button>
            <button onClick={() => this.mergesort()}>Merge Sort</button>
            </div>
            
            </div>
        );
    }
}

//step 3
function randomarray(a,b){
return Math.floor(Math.random()*(b-a+1)+a);
}

