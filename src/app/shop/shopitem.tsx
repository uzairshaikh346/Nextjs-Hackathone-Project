import React from 'react';
import Image from 'next/image';
import item1 from '@/app/imagess/shopitemImages/item1.jpg';
import item2 from '@/app/imagess/shopitemImages/item2.jpg';
import item3 from '@/app/imagess/shopitemImages/item3.jpg';
import item4 from '@/app/imagess/shopitemImages/item4.jpg';
import item5 from '@/app/imagess/shopitemImages/item5.jpg';
import item6 from '@/app/imagess/shopitemImages/item6.jpg';
import item7 from '@/app/imagess/shopitemImages/item7.jpg';
import item8 from '@/app/imagess/shopitemImages/item8.jpg';
import item9 from '@/app/imagess/shopitemImages/item9.jpg';
import item10 from '@/app/imagess/shopitemImages/item10.jpg';
import item11 from '@/app/imagess/shopitemImages/item11.jpg';
import item12 from '@/app/imagess/shopitemImages/item12.jpg';

const Shop = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our collection of amazing clothes
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item1}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item2}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item3}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item4}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item5}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item6}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>



        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item7}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item8}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item9}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item10}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item11}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={item12}
                alt="Graphic Design"
                layout="responsive"
                width={720}
                height={600}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Graphic Design</h2>
            <p className="text-gray-500">English Department</p>
            <p className="text-gray-500 line-through">$16.48</p>
            <p className="text-red-500 font-bold">$6.48</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
              <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
            </div>
          </div>
        </div>




      </div>
    </div>

  )
}

export default Shop;