import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <main>
        <section className="brend">
            <div className="container">
                <div className="brend_box">
                    <div className="brend_text">
                        <span><h3>100%</h3><h3> Organic Vegetables</h3></span>
                        <h1>The best way to stuff your wallet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            reiciendis beatae consequuntur.</p>
                        <div className="brend_text_input">
                            <input type="text" placeholder='Your Email address' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main