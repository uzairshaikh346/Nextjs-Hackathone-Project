import Image from 'next/image';
import clothImage1 from '@/app/imagess/shopImages/shopImage (1).png';
import clothImage2 from '@/app/imagess/shopImages/shopImage (2).png';
import clothImage3 from '@/app/imagess/shopImages/shopImage (3).png';
import clothImage4 from '@/app/imagess/shopImages/shopImage (4).png';
import clothImage5 from '@/app/imagess/shopImages/shopImage (5).png';
import brands from "@/app/imagess/shopImages/desktop-clients-1.png"
import ShopItem from './shopitem';


const Shop = () => {



 
  return (

    <div>
      {/* card section */}


      <div className="container mx-auto px-5 py-24 bg-slate-100">
        <div className="text-start mb-8 flex justify-between px-5">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
          <h1 className='text-[22px] font-bold'>Home <span className='text-gray-400'>/ Shop</span></h1>
        </div>
        <div className='sm:flex-col'>

        <div className="flex sm:justify-center sm:items-center flex-col md:flex-row justify-around w-full">
          <div className="relative flex-1 m-2 p-2 bg-gray-100 rounded-lg text-center max-w-xs">
            <Image
              src={clothImage1}
              alt="Cloth 1"
              layout="responsive"
              width={720}
              height={600}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-xl">CLOTHS<br />5 Items</p>
            </div>
          </div>
          <div className="relative flex-1 m-2 p-2 bg-gray-100 rounded-lg text-center max-w-xs">
            <Image
              src={clothImage2}
              alt="Cloth 2"
              layout="responsive"
              width={720}
              height={600}
              />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-xl">CLOTHS<br />5 Items</p>
            </div>
          </div>
          <div className="relative flex-1 m-2 p-2 bg-gray-100 rounded-lg text-center max-w-xs">
            <Image
              src={clothImage3}
              alt="Cloth 3"
              layout="responsive"
              width={720}
              height={600}
              />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-xl">CLOTHS<br />5 Items</p>
            </div>
          </div>
          <div className="relative flex-1 m-2 p-2 bg-gray-100 rounded-lg text-center max-w-xs">
            <Image
              src={clothImage4}
              alt="Cloth 4"
              layout="responsive"
              width={720}
              height={600}
              />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-xl">CLOTHS<br />5 Items</p>
            </div>
          </div>
          <div className="relative flex-1 m-2 p-2 bg-gray-100 rounded-lg text-center max-w-xs">
            <Image
              src={clothImage5}
              alt="Cloth 5"
              layout="responsive"
              width={720}
              height={600}
              />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-xl">CLOTHS<br />5 Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='mx-auto px-5 py-24 flex flex-col md:flex-row justify-around text-gray-600 items-center'>
        <p>Showing all 12 results
        </p>

        <div className='flex items-center gap-3'>
          <p>Views:
          </p>
          <img width="26" height="26" src="https://img.icons8.com/fluency-systems-filled/50/circled-menu.png" alt="circled-menu"/>
          <img width="26" height="26" src="https://img.icons8.com/ios/50/menu-squared-2.png" alt="menu-squared-2"/>
        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder='Popularity' className='rounded-md border-gray-300 p-5 border-[2px]'/>
          <button className='px-[20px] py-[10px] font-bold bg-[#23A6F0] text-white rounded-md'>Filter</button>
        </div>
      </div>

      <Image src={brands} alt='brands' layout='responsive' className='w-screen m-auto'/>

      <ShopItem/>

    </div>
  );
};

export default Shop;

