import React from 'react';

const ContactInfo = () => {
  return (
    <div className='col-md-6 mr-auto'>
      <h2>Contact Us</h2>
      <p className='mb-5'>
        SynthMaster. is a family-run musical instrument retailer. With over 50
        years of experience serving the music community in the UK and now
        overseas, we have become renowned for our high-quality service and
        stellar reputation in the industry. From our Guildford store and online
        musical instrument shop, we offer musicians a huge selection of
        keyboards, synthesizers, music accessories and more!
      </p>
      <ul className='list-unstyled pl-md-5 mb-5'>
        <li className='d-flex text-black mb-2'>
          <span className='mr-3'>
            <span className='icon-map'></span>
          </span>{' '}
          34 Street Name, City Name Here, <br /> United States
        </li>
        <li className='d-flex text-black mb-2'>
          <span className='mr-3'>
            <span className='icon-phone'></span>
          </span>{' '}
          +1 (222) 345 6789
        </li>
        <li className='d-flex text-black'>
          <span className='mr-3'>
            <span className='icon-envelope-o'></span>
          </span>{' '}
          info@mywebsite.com{' '}
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
