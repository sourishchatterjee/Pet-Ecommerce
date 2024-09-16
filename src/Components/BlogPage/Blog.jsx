
// import React from 'react';
// import { Grid, Container } from '@mui/material';
// import BlogCard from './BlogCard'; 
// import { useEffect, useState } from 'react';


// import "./Blog.css"

// const Blog = () => {

//   const blogs = [
//     {
//       image: 'https://media.istockphoto.com/id/2022705962/photo/selfie-portrait-of-young-asian-woman-with-her-beagle-dog-in-the-park-in-summer.webp?b=1&s=612x612&w=0&k=20&c=PppKx5Q6aftRQKN995Uv4mnD7X_NGSipJ8kTrnRBBhc=',
//       title: 'A Guide to Healthy Weight Gain for Pets',
//       date: '2024-01-25',
//       description: 'Pets are a part of our family, and as their parents, it is our responsibility to take care of their health...',
//     },
//     {
//       image: 'https://media.istockphoto.com/id/1304796251/photo/dog-and-cat-together.jpg?s=612x612&w=0&k=20&c=tZOTEX9PtQDihX6zgBbKkHHW4liMnc2pOhKHxNKFihU=',
//       title: 'Newborn Puppy Care: A Guide to Formula Bottle-Feeding',
//       date: '2024-01-06',
//       description: 'Love watching puppies on Instagram? The little ball of fur with tiny legs can melt your stress instantly...',
//     },
//     {
//       image: 'https://media.istockphoto.com/id/667787320/photo/dog-in-airport-terminal-on-vacation.jpg?s=612x612&w=0&k=20&c=obhZQ9kW2C2swQm35p5czfZAkuQj7NXgu7c0nwohlVE=',
//       title: 'Puppy Pampering: The Importance of Starting Grooming Early',
//       date: '2024-01-06',
//       description: 'Is your puppy always super excited about going for a walk? Puppies grow quickly and get curious about...',
//     },
//   ];

//   const fullText = 'Our Daily Blogs - Trusted by all pet';
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
//     }, 250); // Adjust speed as needed

//     return () => clearInterval(timer);
//   }, [fullText]);

//   return (
//     <>
    
//     <div className="heading text-center">
//       <h2 className="typing-animation">
//         {fullText.slice(0, index)}
//         <span className="cursor">|</span>
//       </h2>
//     </div>

//     <Container sx={{ mt: 4 }}>
//       <Grid container spacing={4}>
//         {blogs.map((blog, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <BlogCard
//               image={blog.image}
//               title={blog.title}
//               date={`shopmanager ${blog.date}`}
//               description={blog.description}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//     </>
//   );
// };

// export default Blog;
import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import BlogCard from './BlogCard'; 
import "./Blog.css"

const Blog = () => {
  const blogs = [
    {
      image: 'https://media.istockphoto.com/id/2022705962/photo/selfie-portrait-of-young-asian-woman-with-her-beagle-dog-in-the-park-in-summer.webp?b=1&s=612x612&w=0&k=20&c=PppKx5Q6aftRQKN995Uv4mnD7X_NGSipJ8kTrnRBBhc=',
      title: 'A Guide to Healthy Weight Gain for Pets',
      date: '2024-01-25',
      description: 'Pets are a part of our family, and as their parents, it is our responsibility to take care of their health...',
    },
    {
      image: 'https://media.istockphoto.com/id/1304796251/photo/dog-and-cat-together.jpg?s=612x612&w=0&k=20&c=tZOTEX9PtQDihX6zgBbKkHHW4liMnc2pOhKHxNKFihU=',
      title: 'Newborn Puppy Care: A Guide to Formula Bottle-Feeding',
      date: '2024-01-06',
      description: 'Love watching puppies on Instagram? The little ball of fur with tiny legs can melt your stress instantly...',
    },
    {
      image: 'https://media.istockphoto.com/id/667787320/photo/dog-in-airport-terminal-on-vacation.jpg?s=612x612&w=0&k=20&c=obhZQ9kW2C2swQm35p5czfZAkuQj7NXgu7c0nwohlVE=',
      title: 'Puppy Pampering: The Importance of Starting Grooming Early',
      date: '2024-01-06',
      description: 'Is your puppy always super excited about going for a walk? Puppies grow quickly and get curious about...',
    },
  ];

  const fullText = 'Our Daily Blogs - Trusted by all pet';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
    }, 250); // Adjust speed as needed

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <>
      <div className="heading text-center">
        <h2 className="typing-animation">
          {fullText.slice(0, index)}
          <span className="cursor">|</span>
        </h2>
      </div>

      <Container className="blog-container" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BlogCard
                image={blog.image}
                title={blog.title}
                date={`shopmanager ${blog.date}`}
                description={blog.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;

