"use client";
import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";
import bg from "./bg.png";
import logo from "./logo.png";
import "./globals.css";
import Footer from "./footer";

export default function Home() {



  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        // height: "100vh",
        backgroundSize: "cover",

        // filter: "blur(8px)"
      }}
    >
      {/* <Image
      className=""
        src={bg}
        layout="fill"
        objectFit="cover"
      /> */}
      <Navbar />
      <div className=" h-screen pt-96">

        <h1 className="text-5xl text-center font-bold hbg">
          LOSSES IN PRESTRESS
        </h1>



        <h1 className="hbg text-center font-semibold text-3xl m-12">
          Losses are categorised into the following types
        </h1>

        <div className="  grid lg:grid-cols-3 grid-cols-1 gap-12 place-items-center">
          <div className=" hover:-translate-y-2 transition ease-linear max-w-80 p-6  border-gray-200 rounded-lg shadow hbg2">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Elastic Shortening</h5>
            </a>
            <p className="mb-3 font-normal text-white">Loss in prestress due to elastic shortening, also known as
              immediate elastic shortening, is a significant consideration
              in prestressed concrete design and construction</p>
            <Link href="/elastics" className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>

          <div className=" hover:-translate-y-2 transition ease-linear max-w-80 p-6  border-gray-200 rounded-lg shadow hbg2">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Friction</h5>
            </a>
            <p className="mb-3 font-normal text-white">Loss in prestress due to elastic shortening, also known as
              immediate elastic shortening, is a significant consideration
              in prestressed concrete design and construction</p>
            <Link href="/elastics" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>

          <div className=" hover:-translate-y-2 transition ease-linear max-w-80 p-6  border-gray-200 rounded-lg shadow hbg2">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Creep</h5>
            </a>
            <p className="mb-3 font-normal text-white">Loss in prestress due to elastic shortening, also known as
              immediate elastic shortening, is a significant consideration
              in prestressed concrete design and construction</p>
            <Link href="/elastics" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>

          <div className=" hover:-translate-y-2 transition ease-linear max-w-80 p-6  border-gray-200 rounded-lg shadow hbg2">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Relaxation</h5>
            </a>
            <p className="mb-3 font-normal text-white">Loss in prestress due to elastic shortening, also known as
              immediate elastic shortening, is a significant consideration
              in prestressed concrete design and construction</p>
            <Link href="/elastics" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>

          <div className=" hover:-translate-y-2 transition ease-linear max-w-80 p-6  border-gray-200 rounded-lg shadow hbg2">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Shrinkage</h5>
            </a>
            <p className="mb-3 font-normal text-white">Loss in prestress due to elastic shortening, also known as
              immediate elastic shortening, is a significant consideration
              in prestressed concrete design and construction</p>
            <Link href="/elastics" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>

          <div className=" hover:-translate-y-2 transition ease-linear max-w-80 p-6  border-gray-200 rounded-lg shadow hbg2">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Anchorage Slip</h5>
            </a>
            <p className="mb-3 font-normal text-white">Loss in prestress due to elastic shortening, also known as
              immediate elastic shortening, is a significant consideration
              in prestressed concrete design and construction</p>
            <Link href="/elastics" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <p className=" mt-16 font-medium p-32 text-xl hbg3 ">
            The force which is used to stretch the wire to the required length must be available all the time as prestressing force if the steel is to be prevented from contracting. Contraction of steel wire occurs due to several causes, affecting reduction in the prestress. This reduction in the prestressing force is called loss in prestres
          </p>
        </div>

        <Footer />
      </div>


    </div>
  );
}
