import React, {useState} from 'react';



function Receipt ({receipt}) {
//object deconstruction allows you to bypass writing props by inserting what
//you want to select inside props within curly bracets

        const [clickBoolean, setClickBoolean] = React.useState(receipt.paid)
        const handleChange = (event) => {
            setClickBoolean(!clickBoolean)
            console.log(receipt)
            receipt.paid = true
        }
//Command + D selects everything with the same highlighted portion
            

console.log(receipt)
            
            return clickBoolean ? '' :  ( 

            <div>
                <h2>Person: {receipt.person}</h2>
                <p><b>Main:</b> {receipt.order.main}</p>
                <p><b>Protein:</b> {receipt.order.protein}</p>
                <p><b>Rice:</b> {receipt.order.rice}</p>
                <p><b>Sauce:</b> {receipt.order.sauce}</p>
                <p><b>Drink:</b> {receipt.order.drink}</p>
                <p><b>Cost:</b> {receipt.order.cost}</p>
                <p><b>Toppings:</b> {receipt.order.toppings.map(topping =>
                    (topping + ", "))}</p>
                <h4 onClick= {handleChange}>Paid?: <span> {clickBoolean ? "true" : "false"}</span></h4>
            </div>
        )
    // } else {
    //     return(
    //         <h1>Got Paid By: {this.receipt.person}</h1>
    //     )
    // }
    }
  
  
  export default Receipt;