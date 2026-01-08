"use client";
import Image from "next/image";
import useInView from "../hooks/useInView";
import Footer from "../components/Footer";
import Taskbar from "../components/Taskbar";

const Animated = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-in";
}) => {
  const { ref, inView } = useInView();

  const baseClasses =
    "transition-all duration-700 ease-out will-change-transform";
  const visibleClasses = "opacity-100 translate-x-0 translate-y-0 scale-100";
  const hiddenClasses = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-left": "opacity-0 -translate-x-12",
    "fade-right": "opacity-0 translate-x-12",
    "fade-in": "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${
        inView ? visibleClasses : hiddenClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface PortfolioItem {
  src: string;
  title: string;
  width: number;
  height: number;
}

const items: PortfolioItem[] = [
  { src: "/photos/p1.jpeg", title: "Model — Portrait", width: 800, height: 1000 },
  { src: "/photos/p4.jpeg", title: "Candid", width: 1200, height: 800 },
  { src: "/photos/p8.jpeg", title: "Event coverage", width: 900, height: 600 },
  { src: "/photos/p13.jpeg", title: "Bike", width: 1000, height: 1000 },
  { src: "/photos/p11.jpg", title: "Candid Portrait", width: 800, height: 1067 },
  { src: "/photos/p2.jpeg", title: "Event shot", width: 1200, height: 900 },
  
  { src: "/photos/p6.jpeg", title: "Event coverage", width: 1400, height: 800 },
  { src: "/photos/p9.jpeg", title: "Automotive", width: 1000, height: 750 },
  { src: "/photos/p17.jpeg", title: "Portrait", width: 900, height: 1200 },
  
  { src: "/photos/p16.jpg", title: "Superbike", width: 1200, height: 675 },
  { src: "/photos/p3.jpeg", title: "Fast Action — Panning", width: 1100, height: 800 },
  { src: "/photos/p151.png", title: "Automotive", width: 800, height: 1200 },
  
  { src: "/photos/p12.jpeg", title: "Wide angle shot", width: 1000, height: 1000 },
  { src: "/photos/p14.jpg", title: "Automotive", width: 1200, height: 900 },
  { src: "/photos/p19.jpeg", title: "Model Portrait", width: 800, height: 1200 },
];

export default function PortfolioPage() {
  return (
    <>
      <Taskbar /> ""
      <main className="font-sans antialiased">
        {/* 1. Editorial Intro */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Animated animation="fade-in">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-6">
                Portfolio
              </h1>
            </Animated>
            <Animated animation="fade-in" delay={200}>
              <p className="text-gray-600 text-lg max-w-2xl">
                Pilihan karya yang mewakili pendekatan visual, karakter, dan
                konsistensi Delta Frame.
              </p>
            </Animated>
          </div>
        </section>

        {/* 2. Adaptive Grid */}
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {items.map((item, index) => (
                <Animated key={index} delay={index * 100}>
                  <div className="group relative break-inside-avoid overflow-hidden rounded-xl bg-gray-100">
                    {/* Image Container */}
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}