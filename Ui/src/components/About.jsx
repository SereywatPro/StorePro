import React, { useEffect } from "react";
import Header from "./Header";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import Footer from "./Footer";

function About() {
  const [isShowT, setIsShowT] = useState(false);
  const [isShowT1, setIsShowT1] = useState(false);
  const [isShowT2, setIsShowT2] = useState(false);

  function handleShowText() {
    return !isShowT ? setIsShowT(true) : setIsShowT(false);
  }
  function handleShowText1() {
    return !isShowT1 ? setIsShowT1(true) : setIsShowT1(false);
  }
  function handleShowText2() {
    return !isShowT2 ? setIsShowT2(true) : setIsShowT2(false);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Welcome Section */}
        <section className="mx-4 sm:mx-6 md:mx-10 my-6 sm:my-8 md:my-10 bg-gradient-to-r from-zinc-900 to-gray-300 p-4 sm:p-8 md:p-12 lg:p-20 rounded-3xl shadow-md">
          <section className="flex flex-col justify-center items-center text-white space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              សូមស្វាគមន៍មកកាន់កម្មវិធីរបស់ខ្ញុំ
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-center max-w-3xl">
              ជំរាបសួរ! ខ្ញុំបាទឈ្មោះ កែវ សេរីវឌ្ឍ ជានិស្សិតឆ្នាំទី ៣ នៅ RUPP
              (ថ្នាក់ M1) ។ ខ្ញុំជាស្ថាបនិកគេហទំព័រនេះ។
              គេហទំព័រនេះនិយាយអំពីផលិតផលស្តុកទុកសម្រាប់លក់ ហើយអ្នកអាចលុប
              ឬធ្វើបច្ចុប្បន្នភាពពួកវាដូចជាផ្ទាំងគ្រប់គ្រង។ លើសពីនេះទៅទៀត
              គេហទំព័ររបស់ខ្ញុំអាចការបញ្ជូលស្ទើរតែគ្រប់ផលិតផលទាំងក្នុងប្រទេសនឹងក្រៅប្រទេស
              លើកលែងតែផលិតផលខុសច្បាប់។
            </p>
          </section>
        </section>

        {/* Services Section */}
        <section className="mx-4 sm:mx-6 md:mx-10 my-6 sm:my-8 md:my-10 bg-gradient-to-r from-zinc-900 to-gray-300 p-4 sm:p-8 md:p-12 lg:p-20 rounded-3xl mb-6">
          <section className="flex flex-col justify-center px-4 sm:px-6 md:px-10 text-white space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              សេវាកម្មផ្សេងៗ
            </h2>

            {/* Question 1 */}
            <article className="relative">
              <p
                className="relative cursor-pointer text-sm sm:text-base md:text-lg"
                onClick={handleShowText}
              >
                <span className="px-2 cursor-pointer inline-flex items-center">
                  <FaArrowAltCircleRight
                    size={25}
                    className={`inline-flex items-center hover:translate-x-1 transition-all ${
                      isShowT ? "rotate-90" : "rotate-none"
                    }`}
                  />
                </span>
                ១.តើនាក់មានគោបំណង់ចង់ទិញផលិតផលល្អៗមានទេ?
              </p>
              <div
                className={`transition-all duration-100 ease-in-out ${
                  !isShowT
                    ? "invisible h-0 opacity-0"
                    : "visible opacity-100 h-auto"
                }`}
              >
                <p className="ml-8 sm:ml-10 md:ml-12 mt-2 text-sm sm:text-base md:text-lg border-l-2 border-white pl-4">
                  ចំពោះផលិតផលរបស់យើងមានគុណភាពខ្ពស់មិនថាយកចេញពីក្រៅស្រុកឬក្នុងស្រុក
                  ពួកយើងហ៊ានធានាថានឹងមានសុវត្តិភាពនិងទំនុបចិត្ត​
                  ព្រមទាំងការដឹកជញ្ជូនយ៉ាងឆាប់រហ័ស។
                </p>
              </div>
            </article>

            {/* Question 2 */}
            <article className="relative">
              <p
                className="relative cursor-pointer text-sm sm:text-base md:text-lg"
                onClick={handleShowText1}
              >
                <span className="px-2 cursor-pointer inline-flex items-center">
                  <FaArrowAltCircleRight
                    size={25}
                    className={`inline-flex items-center hover:translate-x-1 transition-all ${
                      isShowT1 ? "rotate-90" : "rotate-none"
                    }`}
                  />
                </span>
                ២.តើលោកអ្នកមានការព្រួយបារម្ភអំពីសុវត្តិភាពមានទេ?
              </p>
              <div
                className={`transition-all duration-100 ease-in-out ${
                  !isShowT1
                    ? "invisible h-0 opacity-0"
                    : "visible opacity-100 h-auto"
                }`}
              >
                <p className="ml-8 sm:ml-10 md:ml-12 mt-2 text-sm sm:text-base md:text-lg border-l-2 border-white pl-4">
                  យើងមានការយកចិត្តទុកដាក់យ៉ាងខ្លាំងចំពោះសុវត្ថិភាព។
                  យើងបានអនុវត្តន៍នូវវិធានការសុវត្ថិភាពដ៏តឹងរ៉ឹង ដើម្បីធានាថា
                  ផលិតផលនិងសេវាកម្មរបស់យើងមានសុវត្ថិភាពខ្ពស់បំផុតសម្រាប់អតិថិជនទាំងអស់។
                  សូមមានទំនុកចិត្តថា សុវត្ថិភាពរបស់អ្នក គឺជាអាទិភាពលេខ១របស់យើង។
                </p>
              </div>
            </article>

            {/* Question 3 */}
            <article className="relative">
              <p
                className="relative cursor-pointer text-sm sm:text-base md:text-lg"
                onClick={handleShowText2}
              >
                <span className="px-2 cursor-pointer inline-flex items-center">
                  <FaArrowAltCircleRight
                    size={25}
                    className={`inline-flex items-center hover:translate-x-1 transition-all ${
                      isShowT2 ? "rotate-90" : "rotate-none"
                    }`}
                  />
                </span>
                ៣.តើកម្មវិធីរបស់ពួកយើងមានប្រព័ន្ធក្នុងការលក់ទំនិញទៅអោយអតិថិជនមានអ្វីខ្លះ?
              </p>
              <div
                className={`transition-all duration-100 ease-in-out ${
                  !isShowT2
                    ? "invisible h-0 opacity-0"
                    : "visible opacity-100 h-auto"
                }`}
              >
                <p className="ml-8 sm:ml-10 md:ml-12 mt-2 text-sm sm:text-base md:text-lg border-l-2 border-white pl-4">
                  កម្មវិធីរបស់ពួកយើងមានប្រព័ន្ធគ្រប់គ្រងទៅលើផលិតផលដែលមានលក្ខណៈដូចជាការកែរប្រែផលិតផល
                  ការលុបផលិតផលនិងការបញ្ជួលទិន្នន័យពីអ្នកប្រើប្រាស់នៅក្នុងប្រព័ន្ទ។
                </p>
              </div>
            </article>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
