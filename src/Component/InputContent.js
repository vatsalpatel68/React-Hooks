import React, { Component } from 'react';

class InputContent extends Component{
    

    componentDidMount(){
        this.sample = this.props.item;
    }
    componentDidUpdate(){
        console.log('Component is updated');
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter')
        {
            this.props.itemFunc(this.sample);
        }
    }
    enterdata =(event) =>{
        this.sample = event.target.value;
    }
    render(){
            return(
            <React.Fragment>    
                <input className={'inputField'} placeholder="input your TO DO" onChange={this.enterdata} value = {this.sample} onKeyPress= {this.handleKeyPress}></input>
            </React.Fragment>
            )
    }
}

export default InputContent;