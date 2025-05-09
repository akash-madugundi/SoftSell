import React, { useState, forwardRef } from "react";
import { motion as m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

const ContactFormSection = forwardRef((props, ref) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.company.trim())
      newErrors.company = "Company name is required.";
    if (!formData.licenseType)
      newErrors.licenseType = "License type is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      toast({
        title: "Quote Request Sent!",
        description:
          "Thank you! We will get back to you shortly with a valuation.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    } else {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get a Quote
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Interested in selling your unused software licenses? Fill out the
            form below, and we'll get back to you with a valuation.
          </p>
        </m.div>

        <m.div
          className="max-w-2xl mx-auto p-6 md:p-10 rounded-xl shadow-2xl bg-card/70 backdrop-blur-lg border border-primary/20"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground/90">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Aman Sharma"
                className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground/90">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., amansharma@example.com"
                className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="company" className="text-foreground/90">
                Company Name
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g., Tech Solutions Inc."
                className={`mt-1 ${errors.company ? "border-destructive" : ""}`}
              />
              {errors.company && (
                <p className="text-sm text-destructive mt-1">
                  {errors.company}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="licenseType" className="text-foreground/90">
                License Type
              </Label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className={`mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  errors.licenseType ? "border-destructive" : ""
                }`}
              >
                <option value="" disabled>
                  Select license type...
                </option>
                <option value="microsoft-office">Microsoft Office</option>
                <option value="adobe-creative-suite">
                  Adobe Creative Suite
                </option>
                <option value="autocad">AutoCAD</option>
                <option value="windows-server">Windows Server</option>
                <option value="other">Other (Specify in message)</option>
              </select>
              {errors.licenseType && (
                <p className="text-sm text-destructive mt-1">
                  {errors.licenseType}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground/90">
                Message / License Details
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide details about the licenses you want to sell (e.g., software name, version, quantity)."
                rows={4}
                className={`mt-1 ${errors.message ? "border-destructive" : ""}`}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-lg"
              >
                Send Request <Send className="ml-2 h-5 w-5" />
              </Button>
            </m.div>
          </form>
        </m.div>
      </div>
    </section>
  );
});
ContactFormSection.displayName = "ContactFormSection";

export default ContactFormSection;
