import React, { useEffect} from "react";
import Header from "./Header";
import { FaArrowAltCircleRight, FaBeer } from "react-icons/fa";
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
    <div className=" min-h-screen flex flex-col" >
      <Header />
      <section className="m-10 bg-linear-to-r to-gray-300 from-zinc-900 p-20 rounded-4xl shadow-md">
        <section className=" flex flex-col justify-center items-center px-10 text-white space-y-5">
          <h2 className="text-2xl">សូមស្វាគមន៍មកកាន់កម្មវិធីរបស់ខ្ញុំ</h2>

          <p className="">
            ជំរាបសួរ! ខ្ញុំបាទឈ្មោះ កែវ សេរីវឌ្ឍ ជានិស្សិតឆ្នាំទី ៣ នៅ RUPP
            (ថ្នាក់ M1) ។ ខ្ញុំជាស្ថាបនិកគេហទំព័រនេះ។
            គេហទំព័រនេះនិយាយអំពីផលិតផលស្តុកទុកសម្រាប់លក់ ហើយអ្នកអាចលុប
            ឬធ្វើបច្ចុប្បន្នភាពពួកវាដូចជាផ្ទាំងគ្រប់គ្រង។ លើសពីនេះទៅទៀត
            គេហទំព័ររបស់ខ្ញុំអាចការបញ្ជូលស្ទើរតែគ្រប់ផលិតផលទាំងក្នុងប្រទេសនឹងក្រៅប្រទេស
            លើកលែងតែផលិតផលខុសច្បាប់។
          </p>
        </section>
      </section>
      <section className="m-10 bg-linear-to-r to-gray-300 from-zinc-900 p-20 rounded-4xl mb-6">
        <section className=" flex flex-col justify-center px-10 text-white space-y-5">
          <h2 className="text-2xl">សេវាកម្មផ្សេងៗ</h2>

          <article>
            <p className="relative cursor-pointer   " onClick={handleShowText}>
              {" "}
              <span className="px-2 cursor-pointer " onClick={handleShowText}>
                <FaArrowAltCircleRight
                  size={"25px"}
                  className={`inline-flex items-center hover:translate-x-1 transition-all ${
                    isShowT ? "rotate-90 " : "rotate-none"
                  }`}
                />
              </span>
              ១.តើនាក់មានគោបំណង់ចង់ទិញផលិតផលល្អៗមានទេ?
            </p>
            <div
              className={` transition-all  ${
                !isShowT
                  ? "invisible h-0 opacity-0 before:absolute before:h-[0px] "
                  : "visible relative opacity-100 h-10 before:absolute before:h-[17px] before:w-[3px] before:top-1 before:bg-white before:left-7 before:rounded-sm"
              }`}
            >
              <p className=" ms-10 mt-1 ">
                ចំពោះផលិតផលរបស់យើងមានគុណភាពខ្ពស់មិនថាយកចេញពីក្រៅស្រុកឬក្នុងស្រុក
                ពួកយើងហ៊ានធានាថានឹងមានសុវត្តិភាពនិងទំនុបចិត្ត​
                ព្រមទាំងការដឹកជញ្ជូនយ៉ាងឆាប់រហ័ស។
              </p>
            </div>
          </article>

          <article>
            <p className="relative cursor-pointer" onClick={handleShowText1}>
              {" "}
              <span className="px-2 cursor-pointer " onClick={handleShowText1}>
                <FaArrowAltCircleRight
                  size={"25px"}
                  className={`inline-flex items-center hover:translate-x-1 transition-all ${
                    isShowT1 ? "rotate-90 " : "rotate-none"
                  }`}
                />
              </span>
              ២.តើលោកអ្នកមានការព្រួយបារម្ភអំពីសុវត្តិភាពមានទេ?
            </p>
            <div
              className={` transition-all  ${
                !isShowT1
                  ? "invisible h-0 opacity-0"
                  : "visible relative opacity-100 h-15 before:absolute before:h-[43px] before:w-[3px] before:top-1 before:bg-white before:left-7 before:rounded-sm"
              }`}
            >
              <p className=" ms-10 mt-1 ">
                យើងមានការយកចិត្តទុកដាក់យ៉ាងខ្លាំងចំពោះសុវត្ថិភាព។
                យើងបានអនុវត្តន៍នូវវិធានការសុវត្ថិភាពដ៏តឹងរ៉ឹង ដើម្បីធានាថា
                ផលិតផល
                និងសេវាកម្មរបស់យើងមានសុវត្ថិភាពខ្ពស់បំផុតសម្រាប់អតិថិជនទាំងអស់។
                សូមមានទំនុកចិត្តថា សុវត្ថិភាពរបស់អ្នក គឺជាអាទិភាពលេខ១របស់យើង។
              </p>
            </div>
          </article>

          <article>
            <p className="relative cursor-pointer" onClick={handleShowText2}>
              {" "}
              <span className="px-2 cursor-pointer " onClick={handleShowText2}>
                <FaArrowAltCircleRight
                  size={"25px"}
                  className={`inline-flex items-center hover:translate-x-1 transition-all ${
                    isShowT2 ? "rotate-90 " : "rotate-none"
                  }`}
                />
              </span>
              ៣.តើកម្មវិធីរបស់ពួកយើងមានប្រព័ន្ធក្នុងការលក់ទំនិញទៅអោយអតិថិជនមានអ្វីខ្លះ?
            </p>
            <div
              className={` transition-all  ${
                !isShowT2
                  ? "invisible h-0 opacity-0"
                  : "visible relative opacity-100 h-10 before:absolute before:h-[17px] before:w-[3px] before:top-1 before:bg-white before:left-7 before:rounded-sm "
              }`}
            >
              <p className=" ms-10 mt-1 ">
                កម្មវិធីរបស់ពួកយើងមានប្រព័ន្ធគ្រប់គ្រងទៅលើផលិតផលដែលមានលក្ខណៈដូចជាការកែរប្រែផលិតផល
                ការលុបផលិតផលនិងការបញ្ជួលទិន្នន័យពីអ្នកប្រើប្រាស់នៅក្នុងប្រព័ន្ទ។
              </p>
            </div>
          </article>
        </section>
      </section>
      <Footer/>
    </div>
  );
}

export default About;
