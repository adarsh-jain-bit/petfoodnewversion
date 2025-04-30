"use client"
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { COLORS } from "@src/lib/constants/colors";
import CustomSelect from "../../../components/admin/Select";
import ImageUpload from "../../../components/admin/ImageUpload";
import MultipleSelectChip from "../../../components/admin/SizeSelect";

const Page = () => {
  const theme = useTheme();

  const productCategory = ["cat", "dog", "fish", "birds", "tuttle"];
  const petFoodBrands = [
    "Royal Canin",
    "Hill's Science Diet",
    "Purina Pro Plan",
    "Blue Buffalo",
    "Wellness",
    "Nutro",
    "Orijen",
    "Acana",
    "Iams",
    "Taste of the Wild",
    "Merrick",
    "Canidae",
    "Natural Balance",
    "Pedigree",
    "Eukanuba",
  ];

  const [form, setForm] = useState({
    product_name: "",
    product_description: "",
    product_category: "",
    product_brand: "",
    stock: 0,
    sizes: [], 
    images: [],
  });
  const [errors, setErrors] = useState({
    product_name: false,
    product_description: false,
    product_category: false,
    product_brand: false,
    stock: false,
    sizes: false,
    images: false,
  });
  
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  const handleSelectChange = (name, value) => {
    if (name === "sizes") {
      const updatedSizes = value.map((size) => {
        const existing = form.sizes.find((s) => s.size === size);
        return (
          existing || {
            size,
            price: 0,
            oldprice: 0,
            discount: 0,
          }
        );
      });
      setForm((prevForm) => ({ ...prevForm, sizes: updatedSizes }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSizeFieldChange = (size, field, value) => {
    setForm((prevForm) => {
      const updatedSizes = prevForm.sizes.map((s) => {
        if (s.size === size) {
          const updated = { ...s, [field]: parseFloat(value) || 0 };
          const { price, oldprice } = updated;
          if (price > 0 && oldprice > 0 && oldprice > price) {
            updated.discount = parseFloat(
              ((oldprice - price) / oldprice) * 100
            ).toFixed(2);
          } else {
            updated.discount = 0;
          }
          return updated;
        }
        return s;
      });
      return { ...prevForm, sizes: updatedSizes };
    });
  };

  const handleImageUpload = (imageUrls) => {
    setForm((prevForm) => ({
      ...prevForm,
      images: [...prevForm.images, ...imageUrls],
    }));
  };

  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation checks
    let validationErrors = {};
    validationErrors.product_name = !form.product_name;
    validationErrors.product_description = !form.product_description;
    validationErrors.product_category = !form.product_category;
    validationErrors.product_brand = !form.product_brand;
    validationErrors.stock = form.stock <= 0;
    validationErrors.sizes = form.sizes.length === 0;
    validationErrors.images = form.images.length === 0;
  
    setErrors(validationErrors);
  
    // If there are errors, do not submit the form
    if (Object.values(validationErrors).includes(true)) {
      return;
    }
  
    // If no errors, proceed with form submission
    const formData = new FormData();
    formData.append("product_name", form.product_name);
    formData.append("product_description", form.product_description);
    formData.append("product_category", form.product_category);
    formData.append("product_brand", form.product_brand);
    formData.append("stock", form.stock);
    formData.append("images", JSON.stringify(form.images));
    formData.append("sizes", JSON.stringify(form.sizes));
  
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });
  
      if (!res.ok) throw new Error("Failed to add product");
  
      const data = await res.json();
      console.log("Product added:", data);
  
      // Reset the form only if the submission is successful
      setForm({
        product_name: "",
        product_description: "",
        product_category: "",
        product_brand: "",
        stock: 0,
        sizes: [],
        images: [],
      });
      setErrors({
        product_name: false,
        product_description: false,
        product_category: false,
        product_brand: false,
        stock: false,
        sizes: false,
        images: false,
      });
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };
  
  return (
    <Container maxWidth={theme.breakpoints.values.xl} sx={{ padding: "20px 0px" }}>
      <Typography variant="h1">Add New Product</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h4" mt={3} mb={1}>
              Description
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px 20px",
                border: `1px solid ${COLORS.GLOBAL.GRAY_50}`,
              }}
            >
              <Typography variant="h6" color={COLORS.GLOBAL.GRAY_60}>
                Product Name
              </Typography>
              <TextField
                name="product_name"
                value={form.product_name}
                onChange={handleChange}
                variant="outlined"
                error={errors.product_name}
                helperText={errors.product_name ? "Product name is required" : ""}
              />
              <Typography variant="h6" color={COLORS.GLOBAL.GRAY_60}>
                Product Description
              </Typography>
              <TextField
                multiline
                rows={4}
                name="product_description"
                value={form.product_description}
                onChange={handleChange}
                required
                variant="outlined"
                error={errors.product_description}
                helperText={errors.product_description ? "Product description is required" : ""}
              />
            </Box>

            <Typography variant="h4" mt={3} mb={1}>
              Category
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px 20px",
                border: `1px solid ${COLORS.GLOBAL.GRAY_50}`,
              }}
            >
              <CustomSelect
                names={productCategory}
                name="product_category"
                label="Product Category"
                value={form.product_category}
                handleChange={handleSelectChange}
                error={errors.product_category}
                helperText={errors.product_category ? "Category is required" : ""}
              />
              <CustomSelect
                names={petFoodBrands}
                name="product_brand"
                label="Brand Name"
                value={form.product_brand}
                handleChange={handleSelectChange}
                error={errors.product_brand}
                helperText={errors.product_brand ? "brand is required" : ""}
              />
            </Box>

            <Typography variant="h4" mt={3} mb={1}>
              Inventory
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px 20px",
                border: `1px solid ${COLORS.GLOBAL.GRAY_50}`,
              }}
            >
              <Typography variant="h6" color={COLORS.GLOBAL.GRAY_60}>
                Stock
              </Typography>
              <TextField
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                required
                error={errors.stock}
                helperText={errors.stock ? "Stock must be a positive number" : ""}
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h4" mt={3} mb={1}>
              Sizing & Pricing
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px 20px",
                border: `1px solid ${COLORS.GLOBAL.GRAY_50}`,
              }}
            >
              <MultipleSelectChip
                label="Size in Kg"
                name="sizes"
                value={form.sizes.map((s) => s.size)}
                handleChange={handleSelectChange}
              />
              {form.sizes.map((s, idx) => (
                <Stack key={idx} gap={2} sx={{ p: 2, border: "1px dashed #ccc" }}>
                  <Typography variant="h6">Details for {s.size}</Typography>
                  <TextField
                    label="Price"
                    type="number"
                    value={s.price}
                    onChange={(e) =>
                      handleSizeFieldChange(s.size, "price", e.target.value)
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Rs.</InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Old Price"
                    type="number"
                    value={s.oldprice}
                    onChange={(e) =>
                      handleSizeFieldChange(s.size, "oldprice", e.target.value)
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Rs.</InputAdornment>
                      ),
                    }}
                  />
                  <Typography variant="body1" color={COLORS.GLOBAL.GRAY_60}>
                    Discount: {s.discount}% off
                  </Typography>
                </Stack>
              ))}
            </Box>

            <Typography variant="h4" mt={3} mb={1}>
              Product Images
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                padding: "10px 20px",
                border: `1px solid ${COLORS.GLOBAL.GRAY_50}`,
              }}
            >
              <ImageUpload onImageUpload={handleImageUpload} />
            </Box>
            <Button variant="contained" type="submit" sx={{ mt: 3 }}>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Page;
