import React, { Component } from 'react';
import { MyContext } from '../../context';
import Iphone from '../../assets/iphone.jpg';
import Watch from '../../assets/watch.jpg';
import Macbook from '../../assets/macbook.jpg';

class ItemPage extends Component {

    static contextType = MyContext;

    render(){
        const item = this.context.currentItem

        const shippingDate = this.context.shippingDates[item];

        const image = item === 'iphone' ? Iphone : item === 'mackbook' ? Macbook : Watch;

        const header = item === 'iphone' ? 'The ultimate iPhone' : 
                       item === 'macbook' ? 'More power. More pro' :
                       'Change starts within'

        const description = item === 'iphone' ? 'The future is here. Join the iPhone upgrade Program to get the latest iPhone - Now' :
                            item === 'macbook' ? 'Stunning Retina display with True Tone technology' :
                            'Apple Watch Series 4. Fundamentally redesigned and re-engineered to help you be even more active, healthy, and connected'

        let content; 
            
        content = (
                <div className="item-wrapper">
                    <div className="item-content">
                        <p className="item">{item}</p>
                        <h1>{header}</h1>
                        <p className="description">{description}</p>
                        <p className="item">{`Starts shipping ${shippingDate}`}</p>
                    </div>
                    <div className={item}
                         style={{ backgroundImage: `url(${image})`,
                                  backgroundPosition: 'center center',
                                  backgroundSize: 'cover' }}></div>
                </div>
        )

        return (
            <div>{content}</div>
        )
    }
}

export default ItemPage;