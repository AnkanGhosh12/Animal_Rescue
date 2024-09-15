import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button } from '@mui/material';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image', error);
      alert('Failed to upload image');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh'  // Make the div take full viewport height
    }}>
      <Card variant="outlined" style={{
        width: 400,
        padding: 20,
        textAlign: 'center' // Optional: Center text inside the card
      }}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <Button onClick={handleImageUpload} style={{ marginTop: 20 }}>Upload Image</Button>
      </Card>
    </div>
  );
}

export default ImageUpload;
