"use client"
import { Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { COLORS } from "@src/lib/constants/colors";
const ImageUpload = ({onImageUpload}) => {
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newImageUrls = [];

    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImageUrls.push(reader.result);

        if (newImageUrls.length === selectedFiles.length) {
          setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
          setImageUrls((prevUrls) => [...prevUrls, ...newImageUrls]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files, imageUrls);

    try {
      const response = await fetch("/api/uploadimage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: imageUrls }),
      });

      const data = await response.json();

      if (response.ok) {
        onImageUpload(data.urls);  // Assuming API returns multiple image URLs
      } else {
        console.error("Error uploading the file:", data.error);
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };


  return (
    <div>
       <Box sx={{display : "flex" , flexDirection : "row",  gap : "10px" , padding : "10px 20px" , border: `1px solid ${COLORS.GLOBAL.GRAY_50}`}}>
   
   <Stack alignItems="center" justifyContent="center" sx={{width: "150px" , height : "150px" , border: `2px dashed ${COLORS.GLOBAL.GRAY_50}` ,position : "relative"}}>
   <AddPhotoAlternateIcon fontSize="large"/>
      <input type="file" onChange={handleFileChange} style={{    opacity: 0,
    cursor: "pointer",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "111"}}  />
   </Stack>
   <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            maxWidth: "500px",
          }}
        >
          {imageUrls?.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Uploaded ${index}`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          ))}
        </Box>

    </Box>
      <Button variant="contained" type="submit" onClick={handleSubmit} sx={{mt : 2 , width : "200px"}}>Upload</Button>
    </div>
  );
};

export default ImageUpload;
