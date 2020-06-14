import React from 'react';
import Radium from 'radium';

import './Person.css'

const person = (props)=>{

   const style ={
       '@media (min-width: 500px)':{
           width:'450px'
       }
   };

    return (
        <div className="Person" style={style}>
            <h1 onClick={props.click}>My Name is {props.name} and age is {props.age}.{props.children}</h1>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>
    )
};

export default Radium(person);