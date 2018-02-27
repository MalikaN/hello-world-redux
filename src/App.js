import React,{Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state={
            val:'Hello World',
            isChangeVal:true
        }
        this.onButtonClick=this.onButtonClick.bind(this);
    }
    onButtonClick(){
        var changeVal=''; 
        var isChange=false;
        if(this.state.val === 'Hello World'){
           changeVal = 'Everyone'
           isChange=false
        }
        if(this.state.val === 'Everyone'){
            changeVal='Hello World'
            isChange=true
        }
        this.setState({
                val:changeVal,
                isChangeVal:isChange
        })

      
    }
    render(){
        return(
            <div>
               <label>{this.state.val}</label><br/>
               {this.state.isChangeVal?
                <button onClick={this.onButtonClick}>Click</button>:
                <button onClick={this.onButtonClick}>Exit</button>
               }
              
            </div>
        )
    }
}

export default App;