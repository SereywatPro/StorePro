import React, { useState, useEffect } from "react";
import "../App.css";

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
        alert("ធ្វើផលិតផលបច្ចុប្បន្នបានជោគជ័យ");
      } else {
        throw new Error(data.message || "Failed to update product");
      }
    } catch (error) {
      alert("Error updating product: " + error.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4 sm:mt-10 p-4 sm:p-10 bg-white rounded-lg shadow-md update">
      <h1 className="text-2xl sm:text-3xl text-black font-bold mb-4 sm:mb-6 text-center">
        ធ្វើផលិតផលបច្ចុប្បន្ន
      </h1>

      <form onSubmit={handleUpdate} className="space-y-4" action="POST">
        <section className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="id"
            className="block text-md font-medium text-gray-700 w-full sm:w-1/3"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 sm:p-5 focus:ring"
          />
        </section>

        <section className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="name"
            className="block text-md font-medium text-gray-700 w-full sm:w-1/3"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 sm:p-5 focus:ring"
          />
        </section>

        {previewImage && (
          <div className="flex justify-center">
            <img
              src={previewImage}
              className="w-32 sm:w-40 mx-auto rounded-sm"
              alt="Preview"
            />
          </div>
        )}

        <section className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="image"
            className="block text-md font-medium text-gray-700 w-full sm:w-1/3"
          >
            រូបភាព
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 sm:p-5 focus:ring"
          />
        </section>

        <section className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="category"
            className="block text-md font-medium text-gray-700 w-full sm:w-1/3"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 sm:p-5 focus:ring"
          />
        </section>

        <section className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="price"
            className="block text-md font-medium text-gray-700 w-full sm:w-1/3"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 sm:p-5 focus:ring"
          />
        </section>

        <section className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
          >
            កែប្រែ
          </button>
        </section>
      </form>
    </div>
  );
}

export default Update;
