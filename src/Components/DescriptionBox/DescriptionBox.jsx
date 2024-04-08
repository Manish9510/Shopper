import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
E-commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet. In e-commerce transactions, the exchange of products or services occurs electronically, often through online platforms, websites, or mobile applications.</p>
                <p>E-commerce enables businesses and consumers to conduct transactions entirely online, without the need for physical interaction. Customers can browse products, place orders, and make payments electronically.</p>
            </div>
        </div>
    )
}

export default DescriptionBox 