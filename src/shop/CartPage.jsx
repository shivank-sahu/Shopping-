import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setcartItems] = useState([]);
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);

    }, [])

    const claculateTotalPrice = (item) => {

        return item.price * item.quantity;

    }

    const handleIncrease = (item) => {
        item.quantity += 1;
        setcartItems([...cartItems])



        localStorage.setItem("cart", JSON.stringify(cartItems))
    }
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setcartItems([...cartItems])



            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }

    const handleRemoveItem = (item) => {
        const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setcartItems(updateCart);
        updateLocalStorage(updateCart);
    }


    const updateLocalStorage = (cart) => {

        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const cartSubtotal = cartItems.reduce((total, item) => {

        return total + claculateTotalPrice(item)
    }, 0)
    const orderTotal = cartSubtotal;
    return (
        <>
            <PageHeader title={"Shop cart"} curPage={"cart page"} />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cat-product">Product</th>
                                        <th className="cat-price">Price</th>
                                        <th className="cat-quantity">Quantity</th>
                                        <th className="cat-total">total</th>
                                        <th className="cat-edit">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, indx) => (
                                            <tr key={indx}>
                                                <td className="product-item cat-product">
                                                    <div className="p-thumb">
                                                        <Link to="/shop">
                                                          
                                                            <img src={item.img} alt={item.name} />
                                                        </Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>${item.price}</td>
                                              
                                                <td className="cat-quantity">
                                                    
                                                    <div className="cart-plus-minus">
                                                        
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='
                                                        
                                                        cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td> 
                                                <td className="cat-toprice">${claculateTotalPrice(item)}</td>
                                                <td className="cat-edit">
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImgUrl} alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                               </tbody>
                            </table>
                        </div>

                        {/* bottom */}

                        
                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <form className="coupon">
                                    <input type="text" className="cart-page-input-text"  name='coupon' id='coupon' placeholder='coupon code...'/>
                                   <input type="submit" value="Apply"/>
                                </form>
                                
                          
                                <form className="cart-checkout">
                                    <input type="text" value="Update Cart" />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                              </form>
                            </div>

                            {/* shiping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">

                                            <h5>calculate shiping</h5>
                                            <div className="outline-select">
                                                <select >
                                                  
                                                    <option value="uk">U.K.</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="ind">India</option>
                                                    <option value="np">nepal</option>
                                                    <option value="is">israil</option>
                                                </select>
                                                <span   className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>

                                            <div className="outline-select shipping-select">

                                                <select >
                                                    <option value="uk">New York</option>
                                                    <option value="bd">Thaka</option>
                                                   
                                                    <option value="ind">senthri</option>
                                                    <option value="np">kathmandu</option>
                                                    <option value="is">jeruslam</option>
                                                </select>
                                                <span className="select-icon">
                                                    
                                                 <i className="icofont-rounded-down"></i>
                                                </span>
                                           
                                                <input className="cart-page-input-text" type="text" name='postalCode' id='postalCode' placeholder='postalCode/zip' />
                                                <button type='submit'>
                                            Update Address        
                                          </button>
                                            </div>
                                        </div>


                                    </div>

                                    
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            
                                            <ul className="lab-ul">
                                                <li>
                                                    
                                                    <span className="pull-left">Cart Subtotal</span>
                                                   
                                                    <p className="pull-right">$ {cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    
                                                    <span className="pull-left"> Shipping and Handling</span>
                                                   
                                                    <p className="pull-right">Free Shipping</p>
                                                </li>
                                                <li>
                                                    
                                                    <span className="pull-left"> Oreder Total</span>
                                                   
                                                    <p className="pull-right">$ { orderTotal.toFixed(2)}</p>
                                                </li>
                                        </ul>
                                        </div>
                                        
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage