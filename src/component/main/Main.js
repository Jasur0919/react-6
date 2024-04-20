import React, {useEffect, useState} from 'react'
import './Main.css'
import Mobiles from '../../assents/images/mobiles-brend-11-removebg-preview.png'
import Loptop from'../../assents/images/hero-card.avif'
import Loptop1 from'../../assents/images/hero-card-1.avif'
import Loptop2 from'../../assents/images/hero-card-2.jpg'
import axios from 'axios'
import Star from '../../assents/images/star-logo.svg'
import Cart12 from '../../assents/images/cart-logo.svg'


const API_URL = "https://dummyjson.com/products"

// const brend = [
//     {
//         title: "Everyday Fresh  Clean with Our Products",
//         img: Loptop
//     },
//     {
//         title: "Everyday Fresh  Clean with Our Products",
//         img: Loptop
//     },
//     {
//         title: "Everyday Fresh  Clean with Our Products",
//         img: Loptop
//     },
// ]



const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
    
        axios
            .get(API_URL)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))

        
    },[])

    
  // <div key={pro.id} className="hero_card">
        //   <div className="hero_card_text">
        //     <p>{pro.title}</p>
        //     <button>Shop Now</button>
        //   </div>
        //   <div className="hero_card_img">
        //        <img  src={pro.images[0]} className='hero_img' alt="" />
        //   </div>

        // </div>
    let cards = data?.slice(0,16).map((pro) => (

        <div className="logo_card" key={pro.id}>
           <h4 className='logo_card_h4-top'>New</h4>
           <img className='logo_card_img1' src={pro.images[0]} alt="" />
           <h4 className='logo_card_h4-bot'>Snack</h4>
           <h3 className='logo_card_h3-1'> {pro.title}</h3>
           <p className='logo_start'><img src={Star} alt="" /> (4.0)</p>
           <p className='logo_by'>By <p className='logo_by_child'>NestFood</p></p>
           <span className='logo_card_span'>   <h3>$28.85</h3> <p>$32.8</p> <button     className='logo_card_span_button'><img src={Cart12} alt="" /> Add</button>
           </span>
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

                    </div> 
                     <div className="hero_card">
                       <div className="hero_card_text">
                         <p>Everyday Fresh &
                            Clean with Our
                            Products</p>
                         <button>Shop Now</button>
                       </div>
                       <div className="hero_card_img">
                            <img className='hero_img' src={Loptop1} alt="" />
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
                            <img className='hero_img' src={Loptop2} alt="" />
                       </div>

                    </div> 
                </div>
            </div>
        </section>

        <section className="logo">
            <div className="container">
                <div className="popular">
                    <h2>Popular Products</h2>
                    <div className="popular_child">
                        <p>All</p>
                        <p>Milk & Dairies </p>
                        <p>Coffes & Teas</p>
                        <p>Pet Mobiles</p>
                        <p>Meat</p>
                        <p>Mobiles</p>
                        <p>Phones</p>
                    </div>
                </div>
                <div className="logo_box">
                {cards}

                    {/* <div className="logo_card">
                        <h4 className='logo_card_h4-top'>New</h4>
                        <img className='logo_card_img1' src={Loptop} alt="" />
                        <h4 className='logo_card_h4-bot'>Snack</h4>
                        <h3 className='logo_card_h3-1'> Fresh organic villa farim lomon 500gm pack</h3>
                        <p className='logo_start'><img src={Star} alt="" /> (4.0)</p>
                        <p className='logo_by'>By <p className='logo_by_child'>NestFood</p></p>
                        <span className='logo_card_span'>   <h3>$28.85</h3> <p>$32.8</p> <button className='logo_card_span_button'><img src={Cart12} alt="" /> Add</button></span>
                    </div>
                    <div className="logo_card">
                        <h4 className='logo_card_h4-top'>New</h4>
                        <img className='logo_card_img1' src={Loptop} alt="" />
                        <h4 className='logo_card_h4-bot'>Snack</h4>
                        <h3 className='logo_card_h3-1'> Fresh organic villa farim lomon 500gm pack</h3>
                        <p className='logo_start'><img src={Star} alt="" /> (4.0)</p>
                        <p className='logo_by'>By <p className='logo_by_child'>NestFood</p></p>
                        <span className='logo_card_span'>   <h3>$28.85</h3> <p>$32.8</p> <button className='logo_card_span_button'><img src={Cart12} alt="" /> Add</button></span>
                    </div>
                    */}
                </div>
            </div>
        </section>

        <section className="inter">
            <div className="container">
                <div className="inter_box">
                    <div className="inter_text">
                        <h1>Stay home & get your daily needs from our shop</h1>
                        <p>Start You'r Daily Shopping with Nest Mart</p>
                        <div className="inter_text-button">
                            <input type="text" placeholder='Y' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main