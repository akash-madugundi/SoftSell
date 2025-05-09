import React from "react";
import { motion as m } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud, IndianRupee, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="h-12 w-12 text-primary" />,
    title: "Upload License",
    description:
      "Securely submit details of your unused software licenses through our easy-to-use portal.",
  },
  {
    icon: <IndianRupee className="h-12 w-12 text-primary" />,
    title: "Get Valuation",
    description:
      "Our experts quickly assess your licenses and provide a competitive market valuation.",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-primary" />,
    title: "Get Paid",
    description:
      "Once you accept the offer, receive fast and secure payment directly to your account.",
  },
];

const HowItWorksSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Selling your software licenses is simple with SoftSell. Follow these
            three easy steps.
          </p>
        </m.div>
        <m.div
          className="grid md:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <m.div key={index} variants={itemVariants}>
              <Card className="h-full text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    {step.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
