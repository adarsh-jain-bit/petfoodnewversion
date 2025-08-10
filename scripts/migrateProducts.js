const mongoose = require('mongoose');

const Product = require('../src/schema/database/productSchema'); // Adjust path to your model

// Possible sizes
const allSizes = ['100g', '200g', '500g', '1kg', '5kg'];
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
function generateRandomSizes() {
  // Always include 100g
  const selected = new Set(['100g']);

  // Randomly include other sizes
  allSizes.slice(1).forEach(size => {
    if (Math.random() > 0.5) selected.add(size);
  });

  return Array.from(selected);
}

function generateSizeObjects(sizes) {
  return sizes.map(size => {
    const price = Math.floor(Math.random() * 500) + 500; // price between 500 - 1000
    const oldprice = price + Math.floor(Math.random() * 200) + 50; // oldprice > price
    const discount = parseFloat((((oldprice - price) / oldprice) * 100).toFixed(2));

    return { size, price, oldprice, discount };
  });
}

async function migrateAllProducts() {
  await mongoose.connect(process.env.MONGODB_URL , clientOptions); // Replace with your DB URI

  const products = await Product.find({
    sizes: { $exists: false },
    product_price: { $exists: true },
    product_oldprice: { $exists: true }
  });

  for (const product of products) {
    const sizesList = generateRandomSizes();
    const sizesArray = generateSizeObjects(sizesList);

    await Product.findByIdAndUpdate(product._id, {
      $unset: {
        product_price: "",
        product_oldprice: ""
      },
      $set: {
        sizes: sizesArray,
        updatedAt: new Date()
      }
    });

    console.log(`✅ Updated: ${product._id}`);
  }

  console.log('🎉 All eligible products updated');
  await mongoose.disconnect();
}

migrateAllProducts().catch(console.error);
