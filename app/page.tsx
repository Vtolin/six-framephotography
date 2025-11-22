"use client";
import Taskbar from "./components/Taskbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Taskbar />
      <main>
        {/* 1. HERO SECTION */}
        <section className="py-20 max-w-[1370px] mx-auto px-4 h-screen">
          <div className="md:flex md:gap-8 lg:gap-12 md:items-center">
            <h1 className="leading-relaxed md:w-1/2 mb-8 md:mb-0 text-4xl md:text-5xl font-bold mt-20">
              Delta Frames Photography
            </h1>
            <div className="md:w-1/2">
              <Image
                src="/landing.jpg"
                alt="About Us Photo"
                width={550}
                height={300}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section className="py-20 max-w-[1370px] mx-auto px-4">
          <h2 className="md:text-3xl text-2xl font-bold mb-8">WHO WE ARE</h2> 
          <div className="md:flex md:gap-8 lg:gap-12 md:items-center">
            <p className="text-gray-600 leading-relaxed md:w-1/2 mb-8 md:mb-0">
              We are a photography studio startup dedicated to capturing life's
              most precious moments. With a passion for storytelling through
              images, we specialize in wedding photography, portrait sessions,
              and event coverage. We also accept commercial shoots but strictly
              tied to motorsport events because of gear limitations. Our team of
              experienced photographers, combines technical expertise with
              artistic vision to create stunning visuals that you will cherish
              forever.
            </p>

            <div className="md:w-1/2">
              <Image
                src="/about.jpg"
                alt="About Us Photo"
                width={550}
                height={300}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
          <p className="text-blue-600 mt-[50px] md:mt-0">
            Learn more about who we are
          </p>
        </section>

        {/* 3. SERVICES SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border shadow-sm">
                <h3 className="font-semibold text-xl">Wedding Photography</h3>
                <p className="text-gray-600 mt-2">
                  Romantic, candid, timeless shots.
                </p>
              </div>

              <div className="p-6 rounded-xl border shadow-sm">
                <h3 className="font-semibold text-xl">Portrait Sessions</h3>
                <p className="text-gray-600 mt-2">
                  Studio or outdoor portraits.
                </p>
              </div>

              <div className="p-6 rounded-xl border shadow-sm">
                <h3 className="font-semibold text-xl">Event Coverage</h3>
                <p className="text-gray-600 mt-2">
                  Capture memories that matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PORTFOLIO PREVIEW */}
        <section className="py-20 max-w-[1370px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Portfolio</h2>

          {/* Placeholder grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-56 rounded-xl"></div>
            <div className="bg-gray-200 h-56 rounded-xl"></div>
            <div className="bg-gray-200 h-56 rounded-xl"></div>
            <div className="bg-gray-200 h-56 rounded-xl"></div>
            <div className="bg-gray-200 h-56 rounded-xl"></div>
            <div className="bg-gray-200 h-56 rounded-xl"></div>
          </div>
        </section>

        {/* 5. CONTACT CTA */}
        <section className="py-20 bg-black text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-300 mb-8">
            Available for weddings, portraits, events, and commercial shoots.
          </p>
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Contact Me
          </button>
        </section>
      </main>
    </>
  );
}
