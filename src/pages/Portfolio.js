import React from 'react';

import p1 from '../img/portfolio/p1.jpg';
import p2 from '../img/portfolio/p2.jpg';
import p4 from '../img/portfolio/p4.jpg';
import p5 from '../img/portfolio/p5.jpg';

import { Link } from 'react-router-dom';

const Portfolio = () => {
  return <section className='section'>
    <div className="container mx-auto h-full relative">
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>

        <div className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p className='mb-12 max-w-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <b> Itaque, suscipit aliquid asperiores </b>cumque enim sint dignissimos excepturi exercitationem.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Get in touch</Link>
        </div>

        <div className='grid grid-cols-2 lg:gap-2'>

          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img
              className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              src={p1}
              alt=''
            />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img
              className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              src={p2}
              alt=''
            />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img
              className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              src={p4}
              alt=''
            />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img
              className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              src={p5}
              alt=''
            />
          </div>

        </div>

      </div>
    </div>
  </section>;
};

export default Portfolio;
