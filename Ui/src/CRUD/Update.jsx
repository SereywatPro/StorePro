import React, { useState, useEffect } from "react";

function Update() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      // Create preview URL for image
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("id", formData.id);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("category", formData.category);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const response = await fetch("http://localhost/php-api/updatePro.php", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

        for (let i = 0; i < document.querySelectorAll("input").length; i++) {
        document.querySelectorAll("input")[i].value = "";
      }
      document.getElementById("file").value = null;

      if (data.success) {
        alert("Product updated successfully!");

      } else {
        throw new Error(data.message || "Failed to update product");
      }
    } catch (error) {
      alert("Error updating product: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-10 bg-white rounded-lg shadow-md z-100">
      <h1 className="text-3xl text-black font-bold mb-6">
        ធ្វើផលិតផលបច្ចុប្បន្ន
      </h1>

      <form onSubmit={handleUpdate} className="space-y-4" action="POST">
        <section className="flex items-center space-x-[1.6rem]">
          <label
            htmlFor="id"
            className="block text-md font-medium text-gray-700"
          >
            លេខសម្គាល់
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-pointer p-5 focus:ring"
          />
        </section>

        <section className="flex items-center space-x-[1.6rem]">
          <label
            htmlFor="name"
            className="block text-md font-medium text-gray-700"
          >
            ឈ្មោះ
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-pointer p-5 focus:ring"
          />
        </section>

        {previewImage && (
          <img
            src={previewImage}
            className="w-40 mx-auto rounded-sm"
            alt="Preview"
          />
        )}

        <section className="flex items-center space-x-3">
          <label
            htmlFor="image"
            className="block text-md font-medium text-gray-700 text-nowrap"
          >
            រូបភាព
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            className="mt-1 block w-[19.2rem] rounded-md border-gray-300 shadow-sm cursor-pointer p-5 focus:ring"
          />
        </section>

        <section className="flex items-center space-x-3">
          <label
            htmlFor="category"
            className="block text-md font-medium text-gray-700"
          >
            ប្រភេទ
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="mt-1 block w-100 rounded-md border-gray-300 shadow-sm cursor-pointer p-5 focus:ring"
          />
        </section>

        <section className="flex items-center space-x-7">
          <label
            htmlFor="price"
            className="block text-md font-medium text-gray-700"
          >
            តម្លៃ
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            min="1"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-pointer p-5 focus:ring"
          />
        </section>

        <section className="mt-5">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
          >
            កែប្រែ
          </button>
        </section>
      </form>
    </div>
  );
}

export default Update;
