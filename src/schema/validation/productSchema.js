import * as Yup from 'yup';

const reviewSchema = Yup.object().shape({
  user: Yup.string().required('User is required'),
  rating: Yup.number().min(0, 'Rating must be between 0 and 5').max(5, 'Rating must be between 0 and 5').required('Rating is required'),
  comment: Yup.string().required('Comment is required'),
});

const productSchema = Yup.object().shape({
  product_name: Yup.string().required('Name is required'),
  product_price: Yup.number().min(0, 'Price must be a positive number').required('Price is required'),
  product_oldprice: Yup.number().min(0, 'Old Price must be a positive number').required('Old Price is required'),
  product_description: Yup.string().required('Description is required'),
  product_category: Yup.string().required('Category is required'),
  product_brand: Yup.string().required('Brand is required'),
  stock: Yup.number().min(0, 'Stock must be a positive number').required('Stock is required'),
  images: "",
  // reviews: Yup.array().of(reviewSchema),
});

export default productSchema;
