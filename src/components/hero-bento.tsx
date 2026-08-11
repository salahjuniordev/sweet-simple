import { motion } from "framer-motion";
import { ArrowUpRight, Maximize2, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HeroBento() {
  return (
    <section className="relative min-h-screen w-full bg-background pt-24 md:pt-0">
      <div className="grid min-h-screen w-full md:grid-cols-[1.2fr_0.8fr_1fr] lg:grid-cols-[1.5fr_1fr_1.2fr]">
        
        {/* Left Column: Headline & Branding */}
        <div className="flex flex-col border-r border-border p-6 md:p-12 lg:p-16">
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="h-[2px] w-8 bg-brand" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                AGENCE DIGITALE CRÉATIVE
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-6xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-[8rem]"
            >
              DESIGNONS<br />
              <span className="text-brand">AUJOURD'HUI.</span><br />
              MARQUONS<br />
              DEMAIN.
            </motion.h1>
          </div>

          <div className="mt-auto pt-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-xs text-lg font-medium leading-snug"
            >
              Nous transformons vos idées en expériences digitales <span className="text-brand">puissantes, utiles et mémorables.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-4 rounded-full border border-brand/30 px-8 py-4 text-xs font-black uppercase tracking-widest transition-all hover:bg-brand hover:text-brand-foreground"
              >
                DÉCOUVRIR NOS PROJETS
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>

            <div className="mt-20 flex flex-wrap items-center gap-8 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              <span className="text-[10px] font-bold uppercase tracking-widest">ILS NOUS FONT CONFIANCE</span>
              <div className="flex gap-6">
                <div className="h-4 w-12 bg-foreground/20 rounded" />
                <div className="h-4 w-16 bg-foreground/20 rounded" />
                <div className="h-4 w-14 bg-foreground/20 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Visual & Strategy */}
        <div className="relative border-r border-border">
          <div className="h-[60%] w-full overflow-hidden bg-brand">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              {/* Replace with actual high-end portrait if possible */}
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply transition-transform duration-1000 hover:scale-105" />
              
              <div className="absolute top-8 left-8 text-[10px] font-black tracking-widest">[ 01 ]</div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 whitespace-nowrap">
                <span className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-background">
                  <span className="h-[1px] w-8 bg-background" />
                  STRATÉGIE — CRÉATIVITÉ — PERFORMANCE
                </span>
              </div>
            </motion.div>
          </div>

          <div className="grid h-[40%] grid-cols-2">
            <div className="flex flex-col border-r border-border p-8">
              <Sparkles className="h-6 w-6 text-brand" />
              <div className="mt-auto">
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">PLUS DE</p>
                <h3 className="text-5xl font-black text-brand">100+</h3>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-widest leading-tight">
                  PROJETS LIVRÉS<br />AVEC SUCCÈS
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-brand p-8 text-brand-foreground">
              <Maximize2 className="h-6 w-6" />
              <div className="mt-auto">
                <h3 className="text-xl font-black uppercase leading-[0.9] tracking-tight">
                  CRÉONS<br />ENSEMBLE
                </h3>
                <p className="mt-3 text-[9px] font-bold leading-tight opacity-80">
                  Du design au développement, nous vous accompagnons de A à Z.
                </p>
                <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-brand-foreground/30">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Imagery & CTA */}
        <div className="flex flex-col">
          <div className="relative h-[40%] w-full border-b border-border bg-background p-8">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <img src="/logo.png" alt="" className="h-full w-auto object-cover grayscale" />
             </div>
             <div className="relative z-10 mt-auto flex h-full flex-col justify-end">
                <div className="h-[1px] w-12 bg-brand" />
                <p className="mt-6 max-w-[12rem] text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  DES SOLUTIONS DIGITALES SUR MESURE POUR DES MARQUES AMBITIEUSES.
                </p>
             </div>
          </div>
          
          <div className="h-[40%] w-full overflow-hidden border-b border-border">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="h-full w-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale transition-all hover:grayscale-0"
            />
          </div>

          <div className="flex h-[20%] w-full items-center justify-between p-8">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">PARLONS DE VOTRE PROJET</p>
              <a href="mailto:contact@mariodigital.com" className="mt-1 block text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-brand">
                contact@mariodigital.com
              </a>
            </div>
            <Link
              to="/contact"
              className="flex h-16 w-16 items-center justify-center rounded-full border border-border transition-all hover:bg-brand hover:text-brand-foreground"
            >
              <ArrowUpRight className="h-8 w-8" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
