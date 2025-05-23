import React, { useState } from "react";
import "../App.css";

function Add({ onProductAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image_url, setImage_url] = useState(null);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !category || !image_url) {
      alert("Please fill in all fields and select an image.");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image_url);

    try {
      const res = await fetch(
        "https://serverpro-product.up.railway.app/create_product.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.success) {
        alert("បញ្ជូលផលិតផលបានជោគជ័យ!");
        setName("");
        setPrice("");
        setImage_url(null);
        setCategory("");
        if (onProductAdded) onProductAdded();
      } else {
        alert("បញ្ជូលផលិតផលបរាជ័យ.");
      }
    } catch (err) {
      console.error("Error uploading product😔:", err);
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
