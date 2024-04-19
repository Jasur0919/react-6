import React from 'react'
import './Header.css'
import Menu1 from '../../assents/images/menu-header-top.svg'
import Tel from '../../assents/images/tel-header-top.svg'
import Melon from '../../assents/images/melon-11.png'
import Search from '../../assents/images/search-header-bot.svg'
import Avatar from '../../assents/images/avatar-header-bot.svg'
import Heart from '../../assents/images/heart-header-bot.svg'
import Cart from '../../assents/images/cart-header-bot.svg'


const Header = () => {
  return (
    <div>
        <section className="header_top">
            <div className="container">
                <div className="header_top_box">
                    <img src={Menu1} alt="" />
                    <div className="header_top_product">
                        <select name="" id="">
                            <option value="home">Home</option>
                            <option value="home">Home</option>
                        </select>
                        <select name="" id="">
                            <option value="home">Category</option>
                            <option value="home">Home</option>
                        </select>
                        <select name="" id="">
                            <option value="home">Products</option>
                            <option value="home">Category</option>
                        </select>
                        <select name="" id="">
                            <option value="home">Pages</option>
                            <option value="home">Pages</option>
                        </select>
                        <select name="" id="">
                            <option value="home">Blog</option>
                            <option value="home">Blog</option>
                        </select>
                        <select name="" id="">
                            <option value="home">Elements</option>
                            <option value="home">Elements</option>
                        </select>
                    </div>

                    <p><img src={Tel} alt="" /> +123 ( 456 ) ( 7890 )</p>
                </div>
            </div>
        </section>
<div className="header-row"></div>
        <section className="header_bot">
            <div className="container">
                <div className="header_bot_box">
                    <img src={Melon} alt="" />
                    <div className="header_bot_box_child">
                        <input type="text" placeholder='Search Fotm Items' />
                        <select name="" id="">
                            <option value="">All Ctegories</option>
                        </select>
                        <img src={Search} alt="" />
                    </div>

                    <div className="header_bot_box_cart">
                        <span><img src={Avatar} alt="" /> Account</span>
                        <span><img src={Heart} alt="" /> Wishlist</span>
                        <span><img src={Cart} alt="" /> Cart</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header
