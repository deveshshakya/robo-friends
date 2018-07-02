import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc grow bg-light-green br3 pa1 ma1 dib bw2 shadow-5'>
            <img alt="Robots" src={`https://robohash.org/${id}?150x150`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;