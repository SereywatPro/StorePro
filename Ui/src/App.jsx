import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Add from "./CRUD/Add";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [products, setProducts] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const handleAdd = () => {
    return !isShow ? setIsShow(true) : setIsShow(false);
  };
  const handleRefresh = () => {
    return location.reload();
  };

  useEffect(() => {
    fetch(`https://serverpro-product.up.railway.app/get_products.php`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div
          onClick={handleAdd}
          className={`blur-over fixed w-[100%] min-h-[100vh] bg-grey-500  transition-all  
                  ${isShow ? "visible opacity-100 " : "invisible opacity-0"}`}
        ></div>

        <section className="px-20 py-10 w-[100%] min-h-[100%]">
          <h1 className="text-3xl font-bold mb-6 ">ផលិតផលរបស់យើង</h1>
          <section className="flex  justify-between">
            <button
              className={`bg-green-500 mb-3  text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 transition duration-200
          `}
              onClick={handleAdd}
            >
              បញ្ជូលផលិតផល
            </button>
            <button
              className={`bg-purple-500 mb-3  text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-600 transition duration-200
          `}
              onClick={handleRefresh}
            >
              ធ្វើសារដើម
            </button>
          </section>
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-10">
            {products.length === 0 && (
              <div className="col-span-4 text-center">
                <p className="text-gray-500">Loading products...</p>
              </div>
            )}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <section className="block ">
              <section
                className={`fixed z-100 left-[50%]  top-[50%] -translate-x-[50%] -translate-y-1/2 transition-all
          ${isShow ? "visible scale-100" : "invisible scale-0"}
          `}
              >
                <Add />
                <button
                  onClick={() => setIsShow(false)}
                  type="button"
                  className={`bg-blue-500 absolute bottom-5.5 right-5 text-white px-4 ms-2 py-2 rounded cursor-pointer
                   hover:bg-blue-600 transition duration-200`}
                >
                  ថយក្រោយ
                </button>
              </section>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
