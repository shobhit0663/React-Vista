import React from 'react'
const products = [
    { name: "Mobile", price: 200 },
    { name: "Laptop", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 },
    { name: "Headphones", price: 100 },
    { name: "Monitor", price: 400 },
    { name: "Keyboard", price: 50 },
    { name: "Mouse", price: 30 },
    { name: "Speaker", price: 250 },
    { name: "Camera", price: 600 }
  ];
  
  console.log(products);
  
export default function Products() {
  return (
    <div className='row'>
    {
        products.map(products => {
            return(
                <div className='col-3'>
                    hello
                </div>

            )
        })
    }
    
    </div>
    
  )
}
