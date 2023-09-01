import React from 'react';

const Expertise = ({expertise}) => {
    const {imageUrl, name, description} = expertise
    return (
        <div className='bg-[#F5FCFF] p-6 rounded-lg'>
            <img className='mb-4 p-2 bg-white shadow-lg rounded-md' src={imageUrl} alt={name} width={'50px'} />
            <h3 className='mb-4 text-xl font-bold'>{name}</h3>
            <p>{description}</p>
        </div>
    );
};


export default Expertise;