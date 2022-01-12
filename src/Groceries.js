import React from 'react'


function Groceries() {
    const groceryList = [
       {
           item: 'Flour',
           brand: 'Golden Start',
           price: 12,
           quantity: '1lb',
           isPurchased: false
       },
       {
           item: 'Salt',
           brand: 'Diamond',
           price: 2,
           quantity: '1lb', 
           isPurchased: false
       }, 
       {
           item: 'Eggs',
           brand: 'Maple Orchards',
           price: 3,
           quantity: '1 dz',
           isPurchased: false
       },
       {
           item: 'Milk',
           brand: 'Horizon Organic',
           price: 4,
           quantity: '1 gal',
           isPurchased: false
       },
       {
           item: 'Chocolate Chips',
           brand: 'Hershey\'s',
           price: 6,
           quantity: '.5 lb',
           isPurchased: false
       },
       {
           item: 'Butter',
           brand: 'Tillamook',
           price: 2,
           quantity: 1,
           isPurchased: false
       }
   ]
   function total() {
    let total = 0
     for(let i = 0; i<groceryList.length; i++) {
       total = total + groceryList[i].price
     }
     return total
   }
   return (
       <>
     <div className='body'>
       <h1 className='header'>Grocery List</h1>
     {groceryList.map((product) => {
    return (
            <ul>
                <li className='food-description'>{ product.item } - { product.brand }</li>
                <li className='quantity'>{ product.quantity } </li>
                <li className='price'>${ product.price } </li>
                <li className='isPurchased'> { product.isPurchased } </li>
            </ul>
    )
}) 
}
     <div className='total'>TOTAL</div>
    <div className='totalAmount'>${total()}</div>
</div>
</>
   )}

export default Groceries