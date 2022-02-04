import React from 'react'
import './App.css'
import Header from './../Header/Header'
import Search from '../Search/Search'
import Result from '../Result/Result'

const name=require("@rstacruz/startup-name-generator");
class App extends React.Component {
    state={
        headerinput:true,
        suggest:[]
    }
    handleinput = (input_text) =>{
        
        this.setState({headerinput:input_text>0 ? false:true})
        this.setState({suggest:input_text ? name(input_text):[]})
    };
    render(){
    return (
        <div className='container'>
            <Header handleinput={this.state.headerinput}/>
            <Search handleinput={this.handleinput}/>
            <Result suggest={this.state.suggest}/>
        </div>
    );
    }
}
export default App;