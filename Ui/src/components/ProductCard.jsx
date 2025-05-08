import React, { useState } from "react";
import Delete from "../CRUD/Delete";
import Update from "../CRUD/Update";
const ProductCard = ({ product, onDelete }) => {
  const [isEditShow, setIsEditShow] = useState(false); 

  function handleEditShow() {
    return !isEditShow ? setIsEditShow(true) : setIsEditShow(false);
  }
  


  return (
    <>
      <div className={`fixed transition-all w-full top-0 left-0 h-full bg-black opacity-20
        ${ isEditShow ? 'visible opacity-1' : "invisible opacity-0"}
        
        `} onClick={handleEditShow}></div>
      <div className="border rounded-lg px-5 py-4 shadow-md ">
        {product.image_url ? (
          <img 
            src={`http://localhost/php-api/${product.image_url}`}
            alt={product.name}
            className="w-100 h-45 object-contain"
          />
        ) : (
          <div style={{ height: "150px" }}></div>
        )}
      
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>
        <p className="text-green-600 font-semibold mt-1">${product.price}</p>
        <p className="text-gray-500 text-bold text-sm mt-1">លេខសម្គាល់ ​: {product.id }</p>
        <p className="text-gray-500 text-sm mt-1">
          ប្រភេទ : {product.category}
        </p>
        <section className="flex justify-between mt-4 ">
          <button
            onClick={handleEditShow}
            className={`bg-yellow-500 text-white px-3 py-1 text-nowrap rounded cursor-pointer
         hover:bg-yellow-600 transition duration-200`}
          >
            កែប្រែ
          </button>
          <div
            className={`absolute transition-all left-1/2 top-1/2 -translate-1/2  ${
              isEditShow ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
            }`}
          >
            <Update />
          </div>
          <Delete productId={product.id} onDelete={onDelete} />
        </section>
      </div>
    </>
  );
};

export default ProductCard;
