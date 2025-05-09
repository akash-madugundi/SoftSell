import React from "react";
import { motion as m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const Header = ({ onGetQuoteClick }) => {
  return (
    <m.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <m.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 120,
          }}
          className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          SoftSell
        </m.div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6 items-center">
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#why-choose-us"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <ThemeToggle />
          <Button
            onClick={onGetQuoteClick}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold"
            size="lg"
            asChild
          >
            <m.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get a Quote
            </m.button>
          </Button>
        </div>
      </div>
    </m.header>
  );
};

export default Header;
