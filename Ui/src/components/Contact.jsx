import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <div className="min-h-screen  flex flex-col">
        <Header />

        <main className="flex-grow flex flex-col items-center justify-center">
          <form
            action="Post"
            className="space-x-3 space-y-5 border border-gray-200 shadow-lg rounded-sm py-20 px-5"
          >
            <h2 className="text-2xl font-bold">ទំនាក់ទំនងពួកយើង</h2>
            <section className="space-x-8">
              <label htmlFor="email">អ៊ីម៉ែល:</label>
              <input
                className="shadow-md rounded-md p-3 w-full"
                type="email"
                name="email"
                id="em"
              />
            </section>

            <section className="space-x-6">
              <label htmlFor="email">លេខទូរស័ព្ទ:</label>
              <input
                className="shadow-md rounded-md p-3 w-full"
                type="number"
                name="number"
                id="em"
              />
            </section>

            <section className="space-x-2">
              <label htmlFor="message" className="">
                មាតិ:
              </label>
              <textarea
                className="shadow-md resize-none rounded-md inline-block p-3 w-full"
                name="message"
                id="message"
                cols="30"
                rows="3"
              ></textarea>
            </section>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
            >
              ផ្ញើរសារ
            </button>
          </form>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Contact
