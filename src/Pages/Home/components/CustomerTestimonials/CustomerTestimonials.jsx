import React from 'react';
import FeedBack from './Feedback/FeedBack';

const CustomerTestimonials = ({feedbacks}) => {
    return (
        <div className='bg-[#F5FCFF] py-24'>
            <p>Clients Feedback</p>
            <h3>Customer testimonials</h3>

            <div>
                <FeedBack />
            </div>
        </div>
    );
};

export default CustomerTestimonials;