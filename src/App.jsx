// src/App.js
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import LoadingSpinner from "./components/LoadingSpinner";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setPosts(response.data);
        setFilteredPosts(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (debouncedSearch) {
      const results = posts.filter((item) =>
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredPosts(results);
    } else {
      setFilteredPosts(posts);
    }
  }, [debouncedSearch, posts]);

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const abc = useCallback(() => console.log("abc"), []);

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={
              <>
                <ProductPage search={search} onSearchChange={handleSearchChange} posts={filteredPosts} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

const ProductPage = ({ search, onSearchChange, posts }) => (
  <div className="p-4">
    <h1 className="text-center my-5 text-4xl font-bold text-gray-900">Products</h1>
    <Search onSearchChange={onSearchChange} />
    <ProductList posts={posts} />
  </div>
);

export default App;

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};