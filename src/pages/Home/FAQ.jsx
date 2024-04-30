import React from 'react';

const FAQ = () => {
    return (
        <div className='mx-10'>
            <div className=''>
                <p className='text-5xl '>FAQs</p>
                <p className='text-xl py-7'>Find answers to common questions about booking excursions and traveling to Southeast Asia</p>
            </div>
         <div className='my-10'>
         <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  How to book excursions
  </div>
  <div className="collapse-content"> 
    <p>Booking excursions is easy! Simply browse our website, select the excursions you're interested in, choose your preferred dates, and proceed to checkout.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Are meals included?
  </div>
  <div className="collapse-content"> 
    <p>Some excursions include meals, while others do not. The inclusion of meals will be specified in the excursion description.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Is transportation included?
  </div>
  <div className="collapse-content"> 
    <p>Transportation is included for most excursions. However, please check the specific details of each excursion to confirm if transportation is provided.</p>
  </div>
         </div>
</div>
        </div>
    );
};

export default FAQ;