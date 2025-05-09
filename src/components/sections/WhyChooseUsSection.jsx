import React from "react";
import { motion as m } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ShieldCheck, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "Fast Payments",
    description:
      "Receive your payment quickly after your license sale is confirmed.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Secure Transactions",
    description:
      "We ensure your data and transactions are protected with top-tier security.",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Trusted by 100+ Companies",
    description:
      "Join a growing list of businesses that trust SoftSell for license resale.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Easy Process",
    description:
      "Our streamlined platform makes selling licenses straightforward and hassle-free.",
  },
];

const WhyChooseUsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose SoftSell?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We provide a reliable, efficient, and secure platform for reselling
            your software licenses.
          </p>
        </m.div>
        <m.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <m.div key={index} variants={itemVariants}>
              <Card className="h-full transform transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-card/60 backdrop-blur-md border-accent/20 hover:border-accent/50">
                <CardHeader className="items-start">
                  <div className="p-3 bg-accent/10 rounded-lg mb-3 inline-block">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
