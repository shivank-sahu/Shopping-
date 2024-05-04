/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = ({ item }) => {
    
    // const { name, id, price, seller, ratingsCount, quantity } = item;

    const { name, id, price, seller, ratingsCount, quantity, img } = item;
     

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");
    const desc = "very top produvt with top quality very top produvt with top quality "

  
   
   
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleDecrease = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1)
        }
    }
    const handleIncrease = () => {
       setQuantity(prequantity + 1)
    }
    const handleSubmit = (e) => {
       
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
           
            quantity: prequantity,
            size: size,

       
            color: color,
            coupon: coupon
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) =>item.id === id) 

        if (existingProductIndex !== -1) {

           existingCart[existingProductIndex].quantity += prequantity 
        }
        else {
            
            existingCart.push(product);
       
        }
   
        localStorage.setItem("cart", JSON.stringify(existingCart))
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color")
        setCoupon("")
    }
    
    return (
        <div>
            <div>
                <h4>{ name}</h4>
                <p className='rating'>
                   <i className="icofont-star"></i>
                   <i className="icofont-star"></i>
                   <i className="icofont-star"></i>
                   <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>{ ratingsCount} review</span>
                </p>
                <h4>${ price}</h4>
                <h4>{ seller}</h4>
                <p>{ desc}</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className='select-product size'>
                        <select value={size} onChange={handleSizeChange}>
                            <option >Select Size</option>
                            <option >SM</option>
                            <option >MD</option>
                            <option >LG</option>
                            <option >XL</option>
                            <option >XXL</option>
                        </select>
                    </div>
                    <div className='select-product color'>
                        <select value={size} onChange={handleColorChange}>
                            <option >Select color</option>
                            <option >Pink</option>
                            <option >Ash</option>
                            <option >Red</option>
                            <option >White</option>
                            <option >Blue</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                    <div className="cart-plus-minus">
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" name="qtybutton" name="qtybutton" id="qtybutton" value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>
                    
                    
                    <div className="discount-code mb-2">
                        <input type="text" placeholder='Enter discount code' onChange={(e) => setCoupon(e.target.value)}/>
                    </div>
                    <button className='lab-btn ' type='submit'>
                        <span>Add to cart</span>
                    </button>
                    <Link to="/cart-page" className='lab-btn bag-primary'>
                        <span>Cheach Out</span>
                    </Link>
                </form>
            </div>
   </div>
  )
}

export default ProductDisplay