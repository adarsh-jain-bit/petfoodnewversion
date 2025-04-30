import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();

        if (data.success) {
          setProducts(data.data);
        } else {
          setError(data.error || "Unknown error");
        }
      } catch (err) {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
