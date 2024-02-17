import React from 'react'
import './Join.css'


function Join() {
  return (
    <section>
        <div className="join-us">
            <div className="equal msg">
                <h3 className="heading">Join Us</h3>
                <p className="text">We invite you to join the Rakshak Institute family and embark on a journey of discovery, growth, and transformation. Together, we can empower the next generation of leaders, innovators, and changemakers to make a positive impact on the world.</p>
            </div>
            <div className="equal form">
                <form>
                    <h3>Contact Us</h3>
                    <input type="text" placeholder='Your Name...' />
                    <input type="email" placeholder='Your Email...' />
                    <input type="tel" placeholder='Number...' />
                    <input type="submit" className='submit' id="cont-sub" />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Join