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
               {this.props.isChange?
                <button onClick={this.props.onShowButtonClick}>Click</button>:
                <button onClick={this.props.onHideButtonClick}>Exit</button>
               }
              
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        value:state.text,
        isChange:state.isChangeVal
    }
}

function mapDispatchToProps(dispatch){
    return{
        onShowButtonClick : () => dispatch(showContent),
        onHideButtonClick : () => dispatch(hideContent)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);