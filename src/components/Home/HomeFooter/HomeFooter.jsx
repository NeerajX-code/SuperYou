import React from 'react'
import "./HomeFooter.css"

const HomeFooter = () => {
    return (
        <div className='home_footer'>
            <div className="home_footer_wrapper">
                <h1 className="footer_top" >R.I.P FRIED SNACKS!</h1>
                <div className="footer_bottom">
                    <div className="footer_left">
                        <h2>SHOP</h2>
                        <p>Mutligrain Chips</p>
                        <p>Chocolate</p>
                        <p>Choco Peanut Butter</p>
                        <p>Strawberry Creme</p>
                        <p>Cheese Protein</p>
                        <p>Variety Box</p>
                    </div>
                    <div className="footer_center">
                        <h2>KNOW MORE</h2>
                        <p>About US</p>
                        <p>BLOG</p>
                        <p>FAQ</p>
                    </div>
                    <div className="footer_right">
                        <h2>SUPPORT & POLICIES</h2>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Refund & Returns</p>
                        <p>Shipping Policy</p>
                        <p>Employment Policy</p>
                        <p>Contact Us</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomeFooter