import React, { Component } from "react";
import Cart from "../../Cart/Cart";
import CartTotal from "../../CartTotal/CartTotal";
import AddItem from '../../AddItem/AddItem';
import ErrorBoundary from '../../utilities/ErrorBoundary/ErrorBoundary';
import "./CartManager.css";



export class CartManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "mango",
          quantity: 2,
          price: 30,
          index: 0
        },
        {
          name: "orange",
          quantity: 1,
          price: 35,
          index: 1
        },
        {
          name: "Apple",
          quantity: 4,
          price: 50,
          index: 2
        }
      ]
    };
  }


  handleSubtract=(index)=> {
     
    const newItems = this.state.items.map(element => {

      if (element.index === index) {
        element.quantity = element.quantity - 1;
        return element;
      }
      return element;
    });
    this.setState({
      items: newItems
    });
  }
  handleAdd=(index)=> {
    const newItems = this.state.items.map(element => {
      if (element.index === index) {
        element.quantity = element.quantity + 1;
        return element;
      }
      return element;
    });
    this.setState({
      items: newItems
    });
  }
  handleTrash=(index)=> {
    
      
    const newItems = this.state.items.filter(element => {
        
      if (element.index !== index) {
        
        return element;
      }
    });
  
    
    this.setState({
      items: newItems
    });
 
  }
  handleAddItem=(event,item)=>{
    event.preventDefault();
    let findItem=()=>{
        let index=-1;
        this.state.items.forEach(element=>{
      

        if(element.name===item.name){
            index= element.index
        }
     

    }

)
return index;

    }

  let findItemIndex=findItem();
  let newItems=this.state.items.slice();
    if(findItemIndex===-1){
        item["index"]=this.state.items.length+1
        item["quantity"]=1
       
        newItems.push(item);
        this.setState({
            items:newItems
        })
    }
    else{
       
        newItems[findItemIndex].quantity+=1;
        newItems[findItemIndex].price=item.price;
        this.setState({
            items:newItems
        })
    
    

    }
   
    
    

  }
  getTotal(){
      let total=this.state.items.reduce((accumulator,element)=>accumulator+(element.price*element.quantity),0)
      return total;
  }
  render() {
    return (
      <div>
          <ErrorBoundary>

        
          <AddItem handleAddItem={this.handleAddItem}/>
          </ErrorBoundary>
        <table>
          <tbody>
            <tr>
              <th>Fruits</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Substract</th>
              <th>Add</th>
              <th>Delete</th>
            </tr>
            
            {this.state.items.map((item, index) => {
              return (
           
                <Cart
                  data={item}
                  handleMinus={this.handleSubtract}
                  handlePlus={this.handleAdd}
                  handleTrash={this.handleTrash}
                  key={index}
                />
          
              );
            })}
          </tbody>
        </table>
        <ErrorBoundary> 
        <CartTotal total={this.getTotal()} />
        </ErrorBoundary> 
      </div>
    );
  }
}

export default CartManager;
