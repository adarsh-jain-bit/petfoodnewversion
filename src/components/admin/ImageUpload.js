"use client"
import { useState } from 'react';
import Image from 'next/image';

const ImageUpload = ({onImageUpload}) => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result); 
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);

    try {
      const response = await fetch('/api/uploadimage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: file }), 
      });

      const data = await response.json();

      if (response.ok) {
        setImageUrl(data.url);
        onImageUpload(data.url)
      } else {
        console.error('Error uploading the file:', data.error);
      }
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
    
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button type="submit" onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default ImageUpload;
