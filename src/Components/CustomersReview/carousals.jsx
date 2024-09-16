

// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import { styled } from '@mui/system';

// const CarouselContainer = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   width: '60%',
//   maxWidth: '900px',
//   margin: '50px auto',
//   overflow: 'hidden',
//   borderRadius: '30px',
//   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
//   backgroundColor: 'rgba(255, 255, 255, 0.95)',
//   transition: 'transform 0.5s ease-in-out',
//   padding :"10px",
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
// }));

// const CarouselSlide = styled(Box)(({ image }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '400px',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundImage: `url(${image})`,
//   borderRadius: '20px',
//   transition: 'opacity 0.5s ease-in-out',
// }));

// const CarouselContent = styled(Box)(({ theme }) => ({
//   textAlign: 'center',
//   color: '#ffffff',
//   background: 'rgba(0, 0, 0, 0.6)',
//   padding: '25px',
//   borderRadius: '15px',
//   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
//   maxWidth: '70%',
// }));

// const Rating = styled(Box)({
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '4px',
// });

// const StarFilled = styled('span')({
//   color: '#FFD700',
//   fontSize: '28px',
//   textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
// });

// const StarEmpty = styled('span')({
//   color: '#C0C0C0',
//   fontSize: '26px',
// });

// const DotsContainer = styled(Box)({
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '20px',
// });

// const Dot = styled('div')(({ active }) => ({
//   width: '12px',
//   height: '12px',
//   margin: '0 6px',
//   borderRadius: '50%',
//   backgroundColor: active ? '#000' : '#C0C0C0',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
// }));

// const Carousels = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <span key={i}>
//         {i < rating ? <StarFilled>★</StarFilled> : <StarEmpty>★</StarEmpty>}
//       </span>
//     ));
//   };

//   return (
//     <CarouselContainer>
//       <CarouselSlide image={items[currentIndex].image}>
//         <CarouselContent>
//           <Typography variant="h6" gutterBottom>
//             {items[currentIndex].title}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             {items[currentIndex].description}
//           </Typography>
//           <Rating>
//             {renderStars(items[currentIndex].rating)}
//           </Rating>
//         </CarouselContent>
//       </CarouselSlide>
//       <DotsContainer>
//         {items.map((_, index) => (
//           <Dot
//             key={index}
//             active={index === currentIndex}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </DotsContainer>
//     </CarouselContainer>
//   );
// };

// export default Carousels;




// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import { reviews } from './reviews';
// //import Quote from './image14.png';

// const   Carousels= () => {
//   return (
//     <section className="testimonial-container">
//       <div className="title">
//         <h2>Testimonial</h2>
//         <p>What members are saying.</p>
//       </div>

//       <div className="slider-container">
//         <blockquote>
//           <img className="top-quote quote" src="./image14.png" alt="quote" />
//           <img className="bottom-quote quote" src="./image14.png" alt="quote" />
//         </blockquote>

//         <Splide
//           options={{
//             perPage: 1,
//             autoplay: true,
//             speed: 1000,
//             rewind: true,
//             rewindByDrag: true,
//           }}
//         >
//           {reviews.map((review) => (
//             <SplideSlide key={review.id}>
//               <img className="review-img" src={review.image} alt="" />
//               <div className="content">
//                 <p className="text">{review.text}</p>
//                 <div className="info">
//                   <div className="rating">
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9734;</span>
//                   </div>
//                   <p className="user">{review.name}</p>
//                 </div>
//               </div>
//             </SplideSlide>
//           ))}
//         </Splide>
//       </div>
//     </section>
//   );
// };

// export default  Carousels;



import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviews';
import './Carousels.css'; // Ensure to link your custom CSS file

const Carousels = () => {
  return (
    <section className="testimonial-container">
      <div className="title">
        <h2>Testimonial</h2>
        <p>What members are saying.</p>
      </div>

      <div className="slider-container">
        {/* <blockquote>
          <img className="top-quote quote" src="./image14.png" alt="quote" />
          <img className="bottom-quote quote" src="./image14.png" alt="quote" />
        </blockquote> */}

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt={review.name} />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="star">
                        {i < review.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Carousels;
