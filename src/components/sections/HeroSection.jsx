import React from "react";
import { motion as m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ onGetQuoteClick }) => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <img
          className="w-full h-full object-cover"
          alt="Abstract background with geometric shapes"
          src="https://images.unsplash.com/photo-1538143869686-3ef4bc6f446a"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Unlock the Value of Your Unused Software Licenses
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10"
        >
          SoftSell helps you sell unused software easily and get paid fast. Turn
          your surplus licenses into valuable assets.
        </m.p>
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Button
            onClick={onGetQuoteClick}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 group"
          >
            Get a Quote Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </m.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

export default HeroSection;
