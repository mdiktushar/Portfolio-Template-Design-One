import React from 'react';

const Expertise = ({expertise}) => {
    const {imageUrl, name, description} = expertise
    return (
        <div className='p-6 col-span-4 md:col-span-2 lg:col-span-1 rounded-lg bg-[#F5FCFF] '>
            <img className='mb-4 p-2 bg-white shadow-lg rounded-md' src={imageUrl} alt={name} width={'50px'} />
            <h3 className='mb-4 text-xl font-bold'>{name}</h3>
            <p>{description}</p>
        </div>
    );
};


export default Expertise;