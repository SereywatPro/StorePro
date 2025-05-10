import React, { useState } from "react";
import "../App.css";

function Add() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image_url, setImage_url] = useState(null);
  const [category, setCategory] = useState("");
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image_url);

    try {
      const res = await fetch("http://localhost/php-api/SERVER/create_product.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        alert("Product added!");
        setName("");
        setPrice("");
        setImage_url(null);
        setCategory("");
        setPreviewImage(URL.createObjectURL(files[0]));
      } else {
        alert("Failed to add product.");
      }
    } catch (err) {
      console.error("Error uploading product:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl text-black font-bold mb-6">បន្ថែមផលិតផលថ្មី</h1>
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="name" className="block text-md -medium text-gray-700">
            ឈ្មោះផលិតផល
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-4"
            required
          />
        </div>

        <div>
          <label
            htmlFor="file"
            className="block text-md font-medium text-gray-700"
          >
            រូបភាព
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage_url(e.target.files[0]);
              }
            }}
            className="mt-1 block rounded-md border-gray-300 shadow-sm cursor-pointer p-5 focus:ring "
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-md font-medium text-gray-700"
          >
            ប្រភេទ
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-4"
            required
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-md font-medium text-gray-700"
          >
            តម្លៃ
          </label>
          <input
            type="number"
            id="price"
            value={price}
            min={"1"}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-4"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
        >
          បន្ថែម
        </button>
      </form>
    </div>
  );
}

export default Add;
