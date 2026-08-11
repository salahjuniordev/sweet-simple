import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
const logoUrl = "/logo.png";

const slides = [
  {
    tag: "Digital Studio",
    title: "Brands built sharp.",
    subtitle: "Websites built fast.",
    desc: "Mario Studio is a full-service digital partner: identity, design, development, video and marketing — delivered by one team.",
    cta: "Get a free brand audit",
    ctaLink: "/contact",
    image: logoUrl,
  },
  {
    tag: "UI/UX Design",
    title: "Interfaces that",
    subtitle: "drive conversion.",
    desc: "We build user experiences that don't just look good, they perform. From SaaS platforms to e-commerce storefronts.",
    cta: "View our process",
    ctaLink: "/services/ui-ux-design",
    image: logoUrl,
  },
  {
    tag: "Identity Branding",
    title: "Symbols that",
    subtitle: "last a decade.",
    desc: "Visual identities built to scale. We don't just make logos; we create systems that grow with your business.",
    cta: "Start your brand",
    ctaLink: "/services/identity-branding",
    image: logoUrl,
  },
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const { scrollY } = useScroll();
  // Parallax for the whole hero container
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  // Parallax for the logo image
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide min-w-0 flex-[0_0_100%] h-screen min-h-[700px]">
              <div className="relative h-full w-full overflow-hidden">
                {/* Magazine Background: Large stylized text or pattern */}
                <motion.div 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={selectedIndex === index ? { opacity: 0.05, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                >
                  <span className="text-[25vw] font-black leading-none text-foreground uppercase tracking-tighter">
                    {slide.tag.split(' ')[0]}
                  </span>
                </motion.div>

                <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col justify-center">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    
                    {/* Main Title Section */}
                    <div className="lg:col-span-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <span className="h-[1px] w-12 bg-brand" />
                          <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
                            {slide.tag}
                          </span>
                        </div>
                        
                        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase italic">
                          {slide.title}
                          <br />
                          <span className="text-brand not-italic">{slide.subtitle}</span>
                        </h1>
                      </motion.div>
                    </div>

                    {/* Description and CTA Column */}
                    <div className="lg:col-span-4 lg:pb-6">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={selectedIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                      >
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium border-l-2 border-brand pl-6">
                          {slide.desc}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            to={slide.ctaLink}
                            className="group relative inline-flex items-center justify-between gap-4 bg-brand px-8 py-5 text-sm font-black uppercase tracking-widest text-brand-foreground transition-all hover:pr-10"
                          >
                            <span>{slide.cta}</span>
                            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Image/Graphic Element */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={selectedIndex === index ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute bottom-20 right-6 hidden xl:block w-48 h-48"
                  >
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-20 group-hover:opacity-40" />
                      <img 
                        src={slide.image} 
                        alt="Brand Icon" 
                        className="relative z-10 w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-6 md:left-6 md:translate-x-0">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 transition-all ${
                selectedIndex === i ? "w-8 bg-brand" : "w-2 bg-muted hover:bg-muted-foreground"
              } rounded-full`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={scrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-brand hover:text-brand"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-brand hover:text-brand"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
