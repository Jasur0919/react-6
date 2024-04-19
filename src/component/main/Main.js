import React, {useEffect, useState} from 'react'
import './Main.css'
import Mobiles from '../../assents/images/mobiles-brend-11-removebg-preview.png'
import Loptop from'../../assents/images/hero-card.avif'
import axios from 'axios'
// import { useEffect } from 'react'


const API_URL = "https://dummyjson.com/products"

const brend = [
    {
        title: "Everyday Fresh  Clean with Our Products",
        img: Loptop
    },
    {
        title: "Everyday Fresh  Clean with Our Products",
        img: Loptop
    },
    {
        title: "Everyday Fresh  Clean with Our Products",
        img: Loptop
    },
]

const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
    
        axios
            .get(API_URL)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))

        
    },[])

    let cards = data?.map((pro) => (

        <div key={pro.id} className="hero_card">
          <div className="hero_card_text">
            <p>{pro.title}</p>
            <button>Shop Now</button>
          </div>
          <div className="hero_card_img">
               <img  src={pro.images[0]} className='hero_img' alt="" />
          </div>

        </div>
    ))

  return (
    <main>
        <section className="brend">
            <div className="container">
                <div className="brend_box">
                    <div className="brend_text">
                        <span><h4 className='brend_text_h4'>100%</h4><h3 className='brend_text_h3'> Organic Vegetables</h3></span>
                        <h1>The best way to stuff your wallet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            reiciendis beatae consequuntur.</p>
                        <div className="brend_text_input">
                            <input type="text" placeholder='Your Email address' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="brend_btn">
                        <button><span>x</span> Shopping</button>
                        <button><span>x</span> Repise</button>
                        <button><span>x</span> Kitchen</button>
                        <button><span>x</span> News</button>
                        <button><span>x</span> Food</button>
                    </div>
                </div>
                <img className='brend_mobiles' src={Mobiles} alt="" />
            </div>
        </section>

        <section className="hero">
            <div className="container">
                <div className="hero_box">

                    {cards}

                    {/* <div className="hero_card">
                       <div className="hero_card_text">
                         <p>Everyday Fresh &
                            Clean with Our
                            Products</p>
                         <button>Shop Now</button>
                       </div>
                       <div className="hero_card_img">
                            <img className='hero_img' src={Loptop} alt="" />
                       </div>

                    </div> */}
                    {/* <div className="hero_card">
                       <div className="hero_card_text">
                         <p>Everyday Fresh &
                            Clean with Our
                            Products</p>
                         <button>Shop Now</button>
                       </div>
                       <div className="hero_card_img">
                            <img className='hero_img' src={Loptop} alt="" />
                       </div>

                    </div>
                    <div className="hero_card">
                       <div className="hero_card_text">
                         <p>Everyday Fresh &
                            Clean with Our
                            Products</p>
                         <button>Shop Now</button>
                       </div>
                       <div className="hero_card_img">
                            <img className='hero_img' src={Loptop} alt="" />
                       </div>

                    </div> */}
                </div>
            </div>
        </section>

        <section className="logo">
            <div className="container">
                <div className="logo_box">
                    <div className="logo_card">
                        
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main