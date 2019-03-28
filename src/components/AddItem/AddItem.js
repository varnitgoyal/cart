import "./AddItem.css"
import React,{Component} from 'react'



class AddItem extends Component{
  
    constructor(props){
        super(props);
        this.state={
            item:{
                name:"",
                price:0,
                isValid:false

            }
        }
    }
    styleValid={
        border:"1px solid green"


    }
    styleInvalid={
        border:"1px solid red"

    }
    
    handleOnChange=(event)=>{
        let recievedValue=event.target.value;
        let pattern=/\D+[-]\d+$/gm;
        console.log(new RegExp(pattern).test(recievedValue))
        if(new RegExp(pattern).test(recievedValue)){
            this.setState({
                isValid:true
            })


        }
        else{
            this.setState({
                isValid:false

            }
                
            )
        }
        if(recievedValue.includes("-")){
            let splitedString=recievedValue.split("-");
            let name=splitedString[0];
            let price=parseInt(splitedString[1],10);
          
            this.setState({
                item:{
                    name:name,
                    price:price
                     }
            })

        }

    }

    render(){
  
        return (
            <div className="add_item">
             <form className="add_item_form" onSubmit={(event)=>this.props.handleAddItem(event,this.state.item)}> 
        
             
              <input onChange={this.handleOnChange} style={this.state.isValid ? this.styleValid : this.styleInvalid} placeholder="Enter Item and price seperated by a -(hyphen)" type="text"   name="name"/>
             
              <input  type="submit" value="ADD"/>
              </form>
            </div>
          )

        
    }
}




export default AddItem
