import React from "react";
import { motion as m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "SoftSell made selling our unused software effortless. The process was quick and their team was very supportive.",
    name: "Shashank",
    role: "IT Manager, TechCorp",
    avatarText: "JD",
    stars: 5,
  },
  {
    quote:
      "Got paid in 2 days! Highly recommend SoftSell for anyone looking to get value from surplus licenses.",
    name: "Akash",
    role: "Ops Lead, FinX",
    avatarText: "JS",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "circOut" },
    },
  };

  const glassmorphismStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  };

  const darkGlassmorphismStyle = {
    background: "rgba(30, 30, 50, 0.2)" /* Darker translucent background */,
    backdropFilter: "blur(12px)",
    border:
      "1px solid rgba(255, 255, 255, 0.1)" /* Lighter border for contrast */,
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Loved by Businesses
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about their experience
            with SoftSell.
          </p>
        </m.div>
        <m.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <m.div key={index} variants={itemVariants}>
              <Card
                className="h-full shadow-lg dark:shadow-primary/20"
                style={
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? darkGlassmorphismStyle
                    : glassmorphismStyle
                }
              >
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-lg italic text-foreground/90 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-primary-foreground mr-4">
                      {testimonial.avatarText}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
