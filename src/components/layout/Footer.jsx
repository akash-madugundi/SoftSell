import React from "react";
import { motion as m } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <m.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-muted/50 py-8 text-center text-muted-foreground"
    >
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm">
          &copy; {currentYear} SoftSell. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Your trusted partner for software license resale.
        </p>
      </div>
    </m.footer>
  );
};

export default Footer;
