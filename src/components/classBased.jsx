import React, { Component } from 'react'

export default class ClassBased extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    inc=()=>{
        return this.setState({count:this.state.count+1})

    }
    dec=()=>{
        if (this.state.count>0){
            return( 
                this.setState({count:this.state.count-1})
            )
        }        
        
           
    }
    render() {
        return (
            <>
                <h1> This is {this.props.name}from  {this.props.children}</h1>
                <button onClick={()=>{this.inc()}}>Inc</button>
                <h1>count is {this.state.count}</h1>
                <button onClick={()=>{this.dec()}}>Dec</button>
            </>
        );
    }
    
    }

