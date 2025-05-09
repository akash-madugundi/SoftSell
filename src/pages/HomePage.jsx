import React, { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HomePage = () => {
  const contactFormRef = useRef(null);

  const handleGetQuoteClick = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Header onGetQuoteClick={handleGetQuoteClick} />
      <main className="flex-grow">
        <h1>Hello World</h1>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
