import React from 'react';

import ContactBg from '../img/contact/woman.png'

const Contact = () => {
  return <section className='section bg-white'>
    <div className="container mx-auto h-full">
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>

        <div className='hidden lg:flex bg-[#eef7f9] absolute botttom-0 left-0 right-0 top-72 -z-10'>
        </div>

        <div className='lg:flex-1 lg:pt-32 px-4'>

          <h1 className='h1'>Contact me</h1>
          <p className='mb-12'>I would love to get suggestions from you.</p>

          <form className='flex flex-col gap-y-4'>

            <div className='flex gap-x-10'>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] ' type='text' placeholder='Name'/>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] ' type='email' placeholder='Email'/>
            </div>

            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] ' type='text' placeholder='Message'/>

            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>

          </form>

        </div>

        <div className='lg:flex-1 '>
          <img src={ContactBg} alt=''/>
        </div>

      </div>
    </div>
  </section>;
};

export default Contact;
