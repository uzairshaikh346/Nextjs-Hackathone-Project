import React from 'react';
import Image from 'next/image';
import bannerImage from '@/app/imagess/aboutImages/desktop-header-24.png';
import bannerImage2 from '@/app/imagess/aboutImages/2eeaef7ecedd3954687aefbdb6236bb6.jpg';
import videocard from "@/app/imagess/aboutImages/Video card.png"
import member1 from "@/app/imagess/aboutImages/team/item1.jpg"
import member2 from "@/app/imagess/aboutImages/team/item2.jpg"
import member3 from "@/app/imagess/aboutImages/team/item3.jpg"
import brand1 from "@/app/imagess/aboutImages/brands/Vector.png"
import brand2 from "@/app/imagess/aboutImages/brands/col-md-2 (1).png"
import brand3 from "@/app/imagess/aboutImages/brands/col-md-2 (2).png"
import brand4 from "@/app/imagess/aboutImages/brands/col-md-2.png"
import brand5 from "@/app/imagess/aboutImages/brands/fa-brands-4.png"
import brand6 from "@/app/imagess/aboutImages/brands/fa-brands-6.png"
import Link from 'next/link';



function About() {
  return (

    // banner
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pt-2 md:px-14">
          <p className="text-sm sm:text-base md:text-lg font-bold mb-6 sm:mb-10">ABOUT COMPANY</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-10">ABOUT US</h1>
          <h4 className="text-base sm:text-lg md:text-xl font-normal mb-4 sm:mb-6 md:mb-8">
            We know how large objects will act,
            <br />
            but things on a small scale
          </h4>
          <button className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 font-bold text-xs sm:text-sm md:text-base text-white bg-[#23A6F0] rounded-md">
            Get Quote now
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image src={bannerImage} alt="banner" className="rounded-lg" />
        </div>
      </div>



      <div className='flex flex-col md:flex-row justify-between md:px-24 mt-14 '>
        <div className='px-5 py-4 w-[400px] '>
          <p className='text-red-500 mb-4'>Problem trying</p>
          <p className='font-bold text-[24px]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
        </div>
        <p className='text-[24px] font-normal w-[500px]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>


      <div className='flex flex-col md:flex-row justify-center gap-[50px] mt-16'>
        <div className='text-center flex flex-col gap-2'>
          <h1 className='font-bold text-[58px]'>15k</h1>
          <p className='font-bold text-[16px]'>Happy customers</p>
        </div>
        <div className='text-center flex flex-col gap-2'>
          <h1 className='font-bold text-[58px]'>150k</h1>
          <p className='font-bold text-[16px]'>Monthly Visitor</p>
        </div>
        <div className='text-center flex flex-col gap-2'>
          <h1 className='font-bold text-[58px]'>15</h1>
          <p className='font-bold text-[16px]'>Countries world wide</p>
        </div>
        <div className='text-center flex flex-col gap-2'>
          <h1 className='font-bold text-[58px]'>100</h1>
          <p className='font-bold text-[16px]'>Top partner</p>
        </div>
      </div>



      <div className='mt-12 p-7'>
        <Image src={videocard} alt='video card' layout='responsive' />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-[40px] font-bold title-font mb-4 text-gray-900">
              Meet Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member1}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    UserName
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    Professional
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member2}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    UserName
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    Professional
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member3}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    UserName
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    Professional
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    <div className='text-center bg-[#FAFAFA] py-[50px] px-[100px]'>
      <h1 className='font-bold text-[40px] mb-5'>Big Companies Are Here</h1>
      <p className='text-[14px] font-normal text-gray-500'>Problems trying to resolve the conflict between 
      the two major realms of Classical physics: Newtonian mechanics </p>


      <div className='flex flex-col md:flex-row justify-around mt-9 gap-10 items-center'>
        <Image src={brand1} alt='brand'/>
        <Image src={brand2} alt='brand'/>
        <Image src={brand3} alt='brand'/>
        <Image src={brand4} alt='brand'/>
        <Image src={brand5} alt='brand'/>
        <Image src={brand6} alt='brand'/>
      </div>
    </div>




    <div className="flex flex-col md:flex-row items-center bg-[#2A7CC7] text-white">
      <div className="flex-1 p-10 md:p-20 text-center md:text-left">
        <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4">WORK WITH US</p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Now Let's Grow Yours</h1>
        <p className="text-sm md:text-base lg:text-lg mb-6">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century
        </p>
        <Link href="/contact">
          <p className="inline-block border-white border-[1px] text-white py-3 px-10 rounded-md text-sm md:text-base lg:text-lg font-bold">Button</p>
        </Link>
      </div>
      <div className="flex-1">
        <Image src={bannerImage2} alt="banner" layout="responsive" className="rounded-lg" />
      </div>
    </div>







    </div>



  );
}

export default About;
