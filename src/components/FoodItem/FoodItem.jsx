import React from 'react'
import { Assets } from '../../Assets/Assets'
import './FoodItem.css'

const FoodItem = () => {
  return (
    <div className='fooditems'>
        <div className='fooditem'>
            <img className='foodimage'src={Assets.food_1} alt=''/>
            <h2>$ 10.00</h2>
            <p>Brinjal Moju</p>
            <p>Delicious homemade Bringal Moju</p>
       </div>

       <div className='fooditem'>
            <img className='foodimage'src={Assets.food_2} alt=''/>
            <h2>$ 8.00</h2>
            <p>Mango Pickle</p>
            <p>Spicy and tangy Mango Spicy Pickle</p>
       </div>

       <div className='fooditem'>
            <img className='foodimage'src={Assets.food_3} alt=''/>
            <h2>$ 12.00</h2>
            <p>Mixed Vege</p>
            <p>Healthy and fresh mixed vegetables</p>
       </div>

       <div className='fooditem'>
            <img className='foodimage'src={Assets.food_4} alt=''/>
            <h2>$ 7.50</h2>
            <p>Pineapple Jam</p>
            <p>Fresh and Organic Pineapple Jam</p>
       </div>
    </div>
  )
}

export default FoodItem