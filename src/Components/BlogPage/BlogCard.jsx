import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const BlogCard = ({ image, title, date, description }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          {date}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#f50057', color: '#fff' }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
