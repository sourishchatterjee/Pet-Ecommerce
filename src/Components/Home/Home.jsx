import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import './Carousel.css';


import SubNavbar from '../SubNavbar/SubNavbar';
//import ProductCard from '../ProductCard/ProductCard';
import Carousels from '../CustomersReview/carousals';
//import data from '../ProductsData/Data';
import { data1 } from '../ProductsData/Data';
import { datatwo } from '../ProductsData/Data';
import { producturl } from '../ProductsData/Data';
import { useState } from 'react';
import NewProducts from '../NewProducts/NewProducts';
//import InstagramCard from '../InstagramCard/InstagramCard';
import { useEffect } from 'react';

const brands = [
  {
        name: 'body-wash',
        logo: 'https://m.media-amazon.com/images/I/71teHldPzQL._AC_UL480_QL65_.jpg',
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=gnawlers',
      },
      {
        name: 'Grooming set',
        logo: 'https://m.media-amazon.com/images/I/71eKk8CDY4L._AC_UL480_QL65_.jpg',
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name:"meomo",
        logo:"https://m.media-amazon.com/images/I/81at7R2aqTL._AC_UL480_QL65_.jpg",
        link:"",
      },
      {
        name: 'drool',
        logo: "https://m.media-amazon.com/images/I/61B2wD5IjVL._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Suprem',
        logo: "https://m.media-amazon.com/images/I/613CSE3yZnL._AC_UL480_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Tokyo',
        logo: "https://m.media-amazon.com/images/I/71ca+oecW1L._AC_UL480_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Goodies',
        logo: "https://m.media-amazon.com/images/I/51yz+EDk5tL._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Goodies',
        logo: "https://m.media-amazon.com/images/I/61v4LIAs+UL._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'pet-Shampoo',
        logo: "https://m.media-amazon.com/images/I/71ZnpEZ+66L._AC_UL480_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Goodies',
        logo: "https://m.media-amazon.com/images/I/61uiTLykuZL._AC_UL480_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Goodies',
        logo: "https://m.media-amazon.com/images/I/61KBBHKUaRL._AC_UL480_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
];


const brands2 = [
  {
        name: 'body-wash',
        logo: 'https://m.media-amazon.com/images/I/61C56baw9jL._AC_UL960_FMwebp_QL65_.jpg',
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=gnawlers',
      },
      {
        name: 'Grooming set',
        logo: 'https://m.media-amazon.com/images/I/71e4mB00i+L._AC_UL480_FMwebp_QL65_.jpg',
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name:"meomo",
        logo:"https://m.media-amazon.com/images/I/717WiuxL2XL._AC_UL480_FMwebp_QL65_.jpg",
        link:"",
      },
      {
        name: 'drool',
        logo: "https://m.media-amazon.com/images/I/61jymahUEhL._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Suprem',
        logo: "https://m.media-amazon.com/images/I/81buu2s5SKL._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Tokyo',
        logo: "https://m.media-amazon.com/images/I/61S+3Qi5qVL._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Goodies',
        logo: "https://m.media-amazon.com/images/I/71WTPkP30XL._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Goodies',
        logo: "https://m.media-amazon.com/images/I/71A47+7BG5L._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'pet-Shampoo',
        logo: "https://m.media-amazon.com/images/I/71ZnpEZ+66L._AC_UL480_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Goodies',
        logo: "https://m.media-amazon.com/images/I/71yoToG61DL._AC_UL480_FMwebp_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
      {
        name: 'Goodies',
        logo: "https://m.media-amazon.com/images/I/61KBBHKUaRL._AC_UL480_QL65_.jpg",
        link: 'https://www.pinkpaws.co.in/shop/?filter_brand=goodies',
      },
];




// const items = [
//   {
//     title: 'John Doe',
//     description: 'Great service, my pet loved the care provided!',
//     image: 'https://media.istockphoto.com/id/1474004422/photo/portrait-of-happy-young-woman-showing-thumb-up-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=CDEyFjmsE8G8ZoGY5za868HYqm6KkCyjJfWKHm07GDs='
//   },
//   {
//     title: 'Jane Smith',
//     description: 'Very professional and caring staff. Highly recommended!',
//     image: 'https://media.istockphoto.com/id/1740247084/photo/closeup-shot-of-a-woman-painting-tiranga-on-her-face-with-a-wide-smile-patriotism-cricket-fan.webp?b=1&s=612x612&w=0&k=20&c=K_b4trZVKcbdkeTcoO8hD-QN48zT5iD03-jaGAXTG2o='
//   },
//   {
//     title: 'Mike Johnson',
//     description: 'Affordable prices and excellent service. Will visit again!',
//     image: 'https://images.unsplash.com/photo-1588979355313-6711a095465f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZSUyMHBob3RvfGVufDB8fDB8fHww'
//   },
//   {
//     title: 'Jane Smith',
//     description: 'Very professional and caring staff. Highly recommended!',
//     image: 'https://images.unsplash.com/photo-1641466578751-46bfd407146a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D'
//   },
//   {
//     title: 'Jasmin Mandal',
//     description: 'Very professional and caring staff. Highly recommended!',
//     image: "https://media.istockphoto.com/id/1690958973/photo/smiling-woman-taking-care-of-fresh-plants-in-balcony.webp?b=1&s=612x612&w=0&k=20&c=dLT-BjvZPqHG_zK89pzVEA-Bbn5xdYZrUK7hwnikKyY="
//   },
// ];



function Home() {
  //const { productItems } = data;
  // const [cartItems, setCartItems] = useState([]);

//new product

const[products,setProducts]=useState(data1.productItems)

const[products2,setProducts2]=useState(producturl.productItems)
const[products3,setProducts3]=useState(datatwo.productItems)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const fullText = 'Popular Brands for your pets';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
    }, 250); // Adjust speed as needed

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <>
      <SubNavbar />

      <div className="marquee-container">
      <div className="marquee-text">
        Get flat Rs.500 off on your first purchase on App - Use code <u>ASAPP500</u> *T&Cs apply.
      </div>
    </div>

      <div className="carousel-container3" style={{ position: 'relative' }}>
        <Slider {...settings}>
          <div className="carousel-slide">
            <div className="image-wrapper">
              <img src="./image1.png" alt="Royal Canin Products" className="carousel-image" />
            </div>
          </div>
          <div className="carousel-slide">
            <div className="image-wrapper">
              <img src="./image4.png" alt="Another Slide" className="carousel-image" />
            </div>
          </div>
          <div className="carousel-slide">
            <div className="image-wrapper">
              <img src="./image5.png" alt="Another Slide" className="carousel-image" />
            </div>
          </div>
        </Slider>
      </div>

      

      <div className="product-header text-align-center">
  <h2 className="product-title">Top Picks for Your Pets</h2>
  <p className="product-subtitle">Loved by Pets, Trusted by Owners</p>
  <p className="product-space">&nbsp;</p>
</div>


      <div className="brand-carousel">
        <Slider {...settings2}>
          {brands2.map((brand, index) => (
            <div key={index} className="brand-slide">
              <a href={brand.link} target="_blank" rel="noopener noreferrer">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                <p className="brand-name">{brand.name}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <div className="heading text-center">
        <h2>Popular Products</h2>
        <p>Trusted by all pet</p>
        <p>&nbsp;</p>
      </div>

      <section className="banner-section">
        <div className="banner-content">
          <h1>Welcome to Our Shop</h1>
          <p>Discover the best products for your pets</p>
          <a href="/shop" className="btn btn-primary">Shop Now</a>
        </div>
      </section>

      <div className="heading text-center">
        <h2>Popular Products</h2>
        <p>Trusted by all pet</p>
        <p>&nbsp;</p>
      </div>

      <div className="brand-carousel">
        <Slider {...settings2}>
          {brands.map((brand, index) => (
            <div key={index} className="brand-slide">
              <a href={brand.link} target="_blank" rel="noopener noreferrer">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                <p className="brand-name">{brand.name}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>

{/* ///       */}

{/* <div className="heading text">
      <h2 className="typing-animation1">
        {fullText.slice(0, index)}
        <span className="cursor">|</span>
      </h2>
    </div> */}

<div className="popular-products-header centered-text">
  <h2 className="popular-products-title">Popular Products</h2>
  <p className="popular-products-subtitle">Trusted by All Pets</p>
  <p className="popular-products-space">&nbsp;</p>
</div>


      <section className="banner-section1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <a href="https://www.pinkpaws.co.in/product-category/cats/cat-food-cats/">
                <img
                  alt="Cat Food"
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/e5e535b9-4f46-4481-8b9f-b5955b80e403._CR0,0,1200,628_SX920_QL70_.jpg"
                  className="img-fluid w-100 banner-image"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://www.pinkpaws.co.in/product-category/dogs/dog-cloths/winter-dress-dog/">
                <img
                  alt="Dog Winter Dress"
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6f185e93-51b5-4bca-a323-794fbfc7d778._CR1,0,1599,837_SX920_QL70_.jpg"
                  className="img-fluid w-100 banner-image"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="image-section">
        <div className="container">
          <img
            src="./image7.png"
            alt="Product Banner"
            className="image"
          />
        </div>
      </section>

      <div className="product-header text-align-center">
  <h2 className="product-title">Top Picks for Your Pets</h2>
  <p className="product-subtitle">Loved by Pets, Trusted by Owners</p>
  <p className="product-space">&nbsp;</p>
</div>


<div className='today-products'>
{
  products3.map(p=>
  <div key={products3.id}>
    <NewProducts product={p}/>
    </div>
  )

}

</div>

      <div className="heading text-center">
        <h2>Popular Products</h2>
        <p>Trusted by all pet</p>
        <p>&nbsp;</p>
      </div>

      <section className="modern-video-section">
        <div className="modern-container">
          <div className="modern-row modern-align-items-center">
            <div className="modern-col-md-6">
              <div className="modern-video-container">
                <iframe
                  className="modern-video-embed"
                  src="https://www.youtube.com/embed/P0FlrQxSBgo"
                  title="Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="modern-col-md-6">
              <div className="modern-banner-content">
                <img
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f4814c9f-5322-44c2-9e27-ce0ce2487944._CR0,0,1200,628_SX920_QL70_.png"
                  alt="Product Banner"
                  className="modern-banner-image"
                />
                <div className="modern-content-description">
                  <h2>Product Name</h2>
                  <p>Short description of the product goes here. Highlight key features or benefits.</p>
                  <p><strong>Price:</strong> ₹99.99</p>
                  <a href="/product-page" className="modern-btn modern-btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brand-carousel">


      <div className="heading text-center">
        <h2>Popular Products</h2>
        <p>Trusted by all pet</p>
        <p>&nbsp;</p>
      </div>

        <Slider {...settings2}>
          {brands.map((brand, index) => (
            <div key={index} className="brand-slide">
              <a href={brand.link} target="_blank" rel="noopener noreferrer">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                <p className="brand-name">{brand.name}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>


      <div className="popular-products-header centered-text">
  <h2 className="popular-products-title">Popular Products</h2>
  <p className="popular-products-subtitle">Trusted by All Pets</p>
  <p className="popular-products-space">&nbsp;</p>
</div>




<div className='today-products'>
{
  products2.map(p=>
  <div key={products2.id}>
    <NewProducts product={p}/>
    </div>
  )

}

</div>

    <div className="product-header text-align-center">
  <h2 className="product-title">Top Picks for Your Pets</h2>
  <p className="product-subtitle">Loved by Pets, Trusted by Owners</p>
  <p className="product-space">&nbsp;</p>
</div>

<section className="banner-section1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <a href="https://www.pinkpaws.co.in/product-category/cats/cat-food-cats/">
                <img
                  alt="Cat Food"
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7cb54c03-5559-43f5-8eca-0b5f9ea3dc9f._CR0,0,3750,1963_SX920_QL70_.jpg"
                  className="img-fluid w-100 banner-image"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="https://www.pinkpaws.co.in/product-category/dogs/dog-cloths/winter-dress-dog/">
                <img
                  alt="Dog Winter Dress"
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1b4f2d39-e5a6-4852-8c75-d1e484c07d93._SL5000_CR0,0,5000,2616_.jpg"
                  className="img-fluid w-100 banner-image"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>





      <div className="popular-products-header centered-text">
  <h2 className="popular-products-title">Popular Products</h2>
  <p className="popular-products-subtitle">Trusted by All Pets</p>
  <p className="popular-products-space">&nbsp;</p>
</div>



<div className='today-products'>
{
  products.map(p=>
  <div key={products.id}>
    <NewProducts product={p}/>
    </div>
  )

}

</div>


<div className="heading text-center">
        <h2>Popular Products</h2>
        <p>Trusted by all pet</p>
        <p>&nbsp;</p>
      </div>


<section className="modern-video-section">
        <div className="modern-container">
          <div className="modern-row modern-align-items-center">
            <div className="modern-col-md-6">
              <div className="modern-video-container">
                <iframe
                  className="modern-video-embed"
                  src="https://www.youtube.com/embed/PiBLENTGqes?si=rfKQfV_xdtJx9Nee"
                  title="Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="modern-col-md-6">
              <div className="modern-banner-content">
                <img
                  src="https://m.media-amazon.com/images/I/51Brp6uGGZL._AC_UL809_FMwebp_QL65_.jpg"
                  alt="Product Banner"
                  className="modern-banner-image"
                />
                <div className="modern-content-description">
                  <h2>Product Name</h2>
                  <p>Short description of the product goes here. Highlight key features or benefits.</p>
                  <p><strong>Price:</strong> ₹9900</p>
                  <a href="/product-page" className="modern-btn modern-btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <div className="heading text-center1">
        <h2>Customer Reviews</h2>
        <p>What our customers are saying</p>
        <p>&nbsp;</p>
      </div>

      {/* <div className="carousel-container">
        <Carousels items={items || []} />
      </div> */}

      <Carousels/>
    </>
  );
}

export default Home;



