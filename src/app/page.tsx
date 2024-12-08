import Image from 'next/image';
import BannerImage from '@/app/imagess/d491d421800e62998b9af7c838cc25d1.jpg';
import ManImage from '@/app/imagess/manimage.jpg';
import WomanImage from '@/app/imagess/womanimage.jpg';
import Accessories from '@/app/imagess/accesoriesimage.jpg'
import KidsImage from '@/app/imagess/kidsimage.jpg'
import sellerimage1 from "@/app/imagess/sellerImages/image1.jpg"
import sellerimage2 from "@/app/imagess/sellerImages/image2.jpg"
import sellerimage3 from "@/app/imagess/sellerImages/image3.jpg"
import sellerimage4 from "@/app/imagess/sellerImages/image4.jpg"
import sellerimage5 from "@/app/imagess/sellerImages/image5.jpg"
import sellerimage6 from "@/app/imagess/sellerImages/image6.jpg"
import sellerimage7 from "@/app/imagess/sellerImages/image7.jpg"
import sellerimage8 from "@/app/imagess/sellerImages/image8.jpg"
import CardBoyImage from "@/app/imagess/cardboyImage.png"
import CardImage2 from "@/app/imagess/cardImage2.png"
import featuredImage1 from "@/app/imagess/feature post/image1.jpg"
import featuredImage2 from "@/app/imagess/feature post/image2.jpg"
import featuredImage3 from "@/app/imagess/feature post/image3.jpg"


export default function Home() {
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      category: "English Department",
      price: "$15.48",
      oldPrice: "$6.48",
      imageUrl: sellerimage1
    },
    {
      id: 2,
      title: "Graphic Design",
      category: "English Department",
      price: "$21.15",
      oldPrice: "$12.00",
      imageUrl: sellerimage2
    },
    {
      id: 3,
      title: "Graphic Design",
      category: "English Department",
      price: "$12.00",
      oldPrice: "$8.00",
      imageUrl: sellerimage3
    },
    {
      id: 4,
      title: "Graphic Design",
      category: "English Department",
      price: "$18.40",
      oldPrice: "$9.40",
      imageUrl: sellerimage4
    },
    {
      id: 5,
      title: "Graphic Design",
      category: "English Department",
      price: "$16.00",
      oldPrice: "$6.48",
      imageUrl: sellerimage5
    },
    {
      id: 6,
      title: "Graphic Design",
      category: "English Department",
      price: "$21.15",
      oldPrice: "$12.00",
      imageUrl: sellerimage6
    },
    {
      id: 7,
      title: "Graphic Design",
      category: "English Department",
      price: "$12.00",
      oldPrice: "$8.00",
      imageUrl: sellerimage7
    },
    {
      id: 8,
      title: "Graphic Design",
      category: "English Department",
      price: "$18.40",
      oldPrice: "$9.40",
      imageUrl: sellerimage8
    }
  ];



  return (




    <div>
      {/* Banner */}


      <div className="relative w-full h-[500px] md:h-[700px]">
        <Image
          src={BannerImage}
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white bg-opacity-5 px-4 md:px-36">
          <h1 className="text-[12px] md:text-[16px] font-bold mb-2 md:mb-4">SUMMER 2020</h1>
          <h2 className="text-[36px] md:text-[56px] mb-2 md:mb-4">NEW COLLECTION</h2>
          <p className="mb-4 md:mb-6 max-w-md font-normal text-[12px] md:text-[16px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green-500 text-white font-normal py-2 px-4 rounded hover:bg-green-600">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Banner Completed */}


      {/* Pickups section */}



      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-[24PX] font-bold title-font text-gray-900 mb-4">
              EDITOR'S PICK
            </h1>
            <p className="text-base text-[24px] font-normal leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Problems trying to resolve the conflict between.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image
                  src={ManImage}
                  alt="Men"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className='bg-white px-[48px] py-[12px] relative top-28'>
                    <h2 className="text-black text-xl font-bold">MEN</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image
                  src={WomanImage}
                  alt="Women"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className='bg-white px-[48px] py-[12px] relative top-28'>
                    <h2 className="text-black text-xl font-bold">WOMEN</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image
                  src={Accessories}
                  alt="Accessories"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className='bg-white px-[48px] py-[12px] relative top-28'>
                    <h2 className="text-black text-xl font-bold">ACCESSORIES</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image
                  src={KidsImage}
                  alt="Kids"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className='bg-white px-[48px] py-[12px] relative top-28'>
                    <h2 className="text-black text-xl font-bold">KIDS</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pickups section completed */}



      {/* Seller product section */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <p className="text-base font-normal text-[20px] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">Featured Product</p>

            <h1 className="sm:text-3xl text-[24px] font-bold title-font text-gray-900 mb-4">BESTSELLER PRODUCTS</h1>
            <p className="text-base text-[14px] font-normal leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">Problems trying to resolve the conflict between</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.map(product => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="block relative h-[430px] w-[240px] rounded overflow-hidden mx-auto">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.imageUrl} layout="fill" objectFit="cover" />
                </div>
                <div className="mt-4 pl-20">
                  <span className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</span>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <p className="mt-1">
                    {product.price} <span className="line-through">{product.oldPrice}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* seller product section ended */}

      {/* Card section */}



      {/* <Image src={CardBoyImage} alt='card' layout='responsive' className='w-full' /> */}



      <section className="text-white body-font bg-[#23856D]">
        <div className="container mx-auto flex pt-8 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <p className='text-[28px] font-normal mb-[20px]'>Summer 2020</p>
  <h1 className="title-font sm:text-5xl text-[88px] font-bold mb-4">
    Vita Classic <br /> Product
  </h1>
  <p className="mb-8 leading-relaxed font-normal text-[18px]">
    We know how large objects will act, We know how are objects will act, We know
  </p>

  <div className='flex gap-6'>
    <p className='font-bold text-[20px] relative top-2'>$16.14</p>
    <button className='bg-[#2DC071] py-[15px] px-[40px] rounded-md text-[18px]'>Add to cart</button>
  </div>
</div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={CardBoyImage}
            />
          </div>
        </div>
      </section>



      {/* cardboy section ended */}


      {/* buy now card section */}




      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={CardImage2}
              layout="responsive"
              width={720}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-[40px] mb-4 font-bold text-gray-900">
              Part of the Neural
              <br className="hidden lg:inline-block" />
              Universe
            </h1>
            <p className="mb-8 leading-relaxed text-[20px] font-normal">
              We know how large objects will act,
              but things on a small scale.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#2DC071] border-0 py-[15px] px-[40px] focus:outline-none rounded text-lg">
                Buy now
              </button>
              <button className="ml-4 inline-flex text-[#2DC071] bg-gray-100 border-0 py-[15px] px-[40px] focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* buy now card section ended */}



      {/* featured post section */}


      <div className="container mx-auto px-5 py-24">
        <div className="text-center mb-12">
          <h1 className="text-[40px] font-bold text-gray-900 mb-[30px]">Featured Posts</h1>
          <p className="text-gray-600 font-normal text-[14px] mb-[20px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                className="w-full h-[360px]"
                src={featuredImage1}
                alt="post"
                width={720}
                height={400}
              />
              <div className="p-6">
                <h2 className="title-font text-lg font-medium text-gray-900 mb-3">Loudest à la Madison #1 (L'Intégral)</h2>
                <p className="leading-relaxed mb-3">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-gray-500 mr-3">22 April 2021</span>
                  <span className="text-gray-500 mr-3">10 comments</span>
                  <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                className="w-full h-[360px]"
                src={featuredImage2}
                alt="post"
                width={720}
                height={400}
              />
              <div className="p-6">
                <h2 className="title-font text-lg font-medium text-gray-900 mb-3">Loudest à la Madison #1 (L'Intégral)</h2>
                <p className="leading-relaxed mb-3">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-gray-500 mr-3">22 April 2021</span>
                  <span className="text-gray-500 mr-3">10 comments</span>
                  <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                className=" w-full h-[360px]"
                src={featuredImage3}
                alt="post"
                width={720}
                height={400}
              />
              <div className="p-6">
                <h2 className="title-font text-lg font-medium text-gray-900 mb-3">Loudest à la Madison #1 (L'Intégral)</h2>
                <p className="leading-relaxed mb-3">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-gray-500 mr-3">22 April 2021</span>
                  <span className="text-gray-500 mr-3">10 comments</span>
                  <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






    </div>
  );
}
