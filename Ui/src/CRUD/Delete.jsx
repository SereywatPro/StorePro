import React, { useEffect, useState } from "react";

const API_BASE_URL = "https://serverpro-product.up.railway.app";

function Delete({ productId, onDelete }) {
  const handleClick = async () => {
    const confirmDelete = window.confirm("តើអ្នកពិតជាចង់លុបផលិតផលនេះមែនឬទេ?");
    if (!confirmDelete) return;

    const formData = new FormData();
    formData.append("id", productId);

    try {
      const res = await fetch(API_BASE_URL + "/deletePro.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        alert("លុបទិន្នន័យបានជោកជ័យ");
        if (onDelete) onDelete(productId); // Notify parent to remove item from UI
      } else {
        console.log("លុបទិន្នន័យបរាជ័យ: " + result.message);
      }
    } catch (error) {
      alert("Error deleting product");
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-red-500 text-white px-4 py-2 text-nowrap rounded cursor-pointer hover:bg-red-600 transition duration-200"
      >
        លុប
      </button>
    </div>
  );
}

export default Delete;
