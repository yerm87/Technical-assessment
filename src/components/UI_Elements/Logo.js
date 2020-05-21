import React from 'react';
import Image from '../../assets/logo.jpg';
import { withRouter } from 'react-router-dom';

const Logo = props => {
    const navigate = () => {
        props.history.push('/');
    }

    return (
        <div className="logo" 
             style={{ backgroundImage: `url(${Image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center' }}
            onClick={() => navigate()}></div>
    )
}

export default withRouter(Logo); 