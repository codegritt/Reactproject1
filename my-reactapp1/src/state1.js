/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import ReactDOM from 'react-dom'
import React from 'react'

class Toggle extends React.Component{
    constructor(value){
        super(value);
        this,state={isToggleOn:true};
        this.handleClick=this.handleClick.bind(this);
    }
}