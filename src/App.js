import React,{Component} from 'react';
import {showContent,hideContent} from './Actions';
import { connect } from 'react-redux';
class App extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         val:'Hello World',
    //         isChangeVal:true
    //     }
    //     this.onButtonClick=this.onButtonClick.bind(this);
    // }
    // onButtonClick(){
    //     var changeVal=''; 
    //     var isChange=false;
    //     if(this.state.val === 'Hello World'){
    //        changeVal = 'Everyone'
    //        isChange=false
    //     }
    //     if(this.state.val === 'Everyone'){
    //         changeVal='Hello World'
    //         isChange=true
    //     }
    //     this.setState({
    //             val:changeVal,
    //             isChangeVal:isChange
    //     })

      
    // }
    render(){
        return(
            <div>
               <label>{this.props.value}</label><br/>
               {/* {this.state.isChangeVal? */}
                <button onClick={this.props.onButtonClick}>Click</button>
                {/* <button onClick={this.props.onButtonClick}>Exit</button> */}
               {/* } */}
              
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        value:state.text
    }
}

function mapDispatchToProps(dispatch){
    return{
        onButtonClick : () => dispatch(showContent),
        onButtonClick : () => dispatch(hideContent)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);