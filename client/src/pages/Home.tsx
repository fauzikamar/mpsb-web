/**
 * Design Philosophy: Kinetic Futurism with Dimensional Depth
 * Magnitude Power Sdn Bhd - Electrical Services & Transformer Solutions
 * - Layered depth through shadows, blurs, and glass-morphism
 * - Dynamic gradient backgrounds with animations
 * - 3D interactive elements with spring physics
 * - Typography: Outfit (headings), DM Sans (body)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { 
  Zap,
  Wrench,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  ChevronDown,
  ArrowRight,
  Award,
  Users
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            MAGNITUDE POWER
          </motion.div>
          
          <div className="hidden md:flex gap-8">
            {["about", "services", "portfolio", "team", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-primary capitalize transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/K9eX1rskNcJOiwQ0JQHEZ6/sandbox/w6HaRMQOMnow1zMQ7lcY0E-img-1_1770535604000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzllWDFyc2tOY0pPaXdRMEpRSEVaNi9zYW5kYm94L3c2SGFSTVFPTW5vdzF6TVE3bGNZMEUtaW1nLTFfMTc3MDUzNTYwNDAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CO1-0njpe8tEZcey5e~CSzgMzWTKbg7yCbFdG3RuZH-sArTzzIhYv9qWuNLuE9fs9NdmVAgIZKvqqfLMHq7okxpyD1QzwWLbnECw96GwtIzbyJDxehAXVYpRY858dzRLY6ZAdD0PL1-KsHwFn2SrV5k~-9A31SbvyLOJfV5F-WoF3kdN937yDaklkrmBgFuqQYcIC7PSRDyzkXKjs0D0viBFvpNnJC6efHToyZ5o0Cb4LmeoPH~GwxiZ8VMT3vaBwCsK-0Uhz8~PHNPkCB3td3DjX923bDDY8NwRhKVte-uSH62EQXSPdiSQpJVcoiddX5bQw4LQ4HJuQ6YHdZEg4Q__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Powering Malaysia's Electrical Future
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Leading provider of transformer services and electrical solutions for LV to HV (500kV)
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">About Magnitude Power</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Incorporated on 1 April 2011, Magnitude Power Sdn Bhd is an established electrical equipment supplier and services company specializing in transformer solutions and electrical services. We operate across the full spectrum of electrical voltages, from Low Voltage (LV) to High Voltage (HV) systems up to 500kV.
              </p>
              
              <p>
                As an authorized contractor for Malaysia Transformer Manufacturing Sdn Bhd (a subsidiary of Tenaga Nasional Berhad), we are registered with both the Ministry of Finance (MOF) and TNB. Our expertise spans installation, servicing, testing, and commissioning of power transformers for the Malaysian power industry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { label: "Years Active", value: "14+" },
                  { label: "Paid Capital", value: "MYR 1.2M" },
                  { label: "Finance Facility", value: "MYR 5M" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-6 text-center"
                  >
                    <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="text-primary" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be among the leading electrical services providers in Malaysia, delivering innovative solutions with excellence and reliability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="text-primary" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Providing Malaysia's power industry with quality products and services that are affordable, efficient, and reliable.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive electrical solutions for power distribution and transformer management</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Power Transformers",
                description: "Supply of Oil Immersed Power Transformers up to 500kV for high-capacity power distribution.",
                voltage: "Up to 500kV"
              },
              {
                icon: Wrench,
                title: "Distribution Transformers",
                description: "Oil and dry-type distribution transformers for medium and low voltage applications.",
                voltage: "Up to 36kV"
              },
              {
                icon: CheckCircle,
                title: "Switchgear Solutions",
                description: "High voltage switchgear (VCB & GIS) for reliable power switching and protection.",
                voltage: "Up to 275kV"
              },
              {
                icon: Wrench,
                title: "Transformer Repair",
                description: "Professional repair and refurbishment services for power and distribution transformers.",
                voltage: "All Ratings"
              },
              {
                icon: CheckCircle,
                title: "Installation & Testing",
                description: "Complete installation, testing, and commissioning services for transformer systems.",
                voltage: "All Ratings"
              },
              {
                icon: Zap,
                title: "Accessories Supply",
                description: "High-quality accessories including radiators, bushings, and transformer guards.",
                voltage: "All Types"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card h-full overflow-hidden group shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <p className="text-sm text-primary font-semibold">{service.voltage}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Certifications & Registrations</h2>
            <p className="text-lg text-muted-foreground">Authorized and certified by leading regulatory bodies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Ministry of Finance",
                reg: "MOF Reg. No.: 357-02171732",
                desc: "Registered as electrical equipment supplier and distributor"
              },
              {
                title: "CIDB Registration",
                reg: "CIDB Reg. No.: 0120121206-SL147346",
                desc: "Construction Industry Development Board certification"
              },
              {
                title: "TNB Authorization",
                reg: "TNB Reg. No.: 3041449",
                desc: "Authorized contractor for Malaysia Transformer Manufacturing"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card p-8 shadow-2xl hover:shadow-primary/30 transition-all duration-300 h-full">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-primary font-semibold mb-3">{cert.reg}</p>
                  <p className="text-muted-foreground">{cert.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">Experienced professionals with decades of industry expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Abu Bakar Endin",
                role: "Director & Founder",
                qualification: "Diploma of Electrical Engineering (ITM-1982)",
                experience: "30+ years in transformer manufacturing and sales",
                highlights: [
                  "Sales Manager at Malaysia Transformer Manufacturing S/B (1984-1999)",
                  "Sales Director at Pakatan Engineering S/B (2007-2010)",
                  "General Manager at Zanwa Transformer (2010-2011)"
                ]
              },
              {
                name: "Sayaidina Hamzah Che Harun",
                role: "Managing Director",
                qualification: "Degree of Electrical Engineering (UTM-2005)",
                experience: "18+ years in transformer production and operations",
                highlights: [
                  "Production Engineer at Zanwa Transformer (2005-2006)",
                  "Head of Production at Zanwa Transformer (2006-2009)",
                  "Factory Operation & Project Manager (2009-2011)"
                ]
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-card p-8 shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="h-12 w-12 text-primary" />
                    <div>
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{member.qualification}</p>
                  <p className="text-muted-foreground mb-4">{member.experience}</p>
                  
                  <div className="space-y-2">
                    {member.highlights.map((highlight, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {highlight}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-24 relative"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/K9eX1rskNcJOiwQ0JQHEZ6/sandbox/w6HaRMQOMnow1zMQ7lcY0E-img-5_1770535637000_na1fn_Y29udGFjdC1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzllWDFyc2tOY0pPaXdRMEpRSEVaNi9zYW5kYm94L3c2SGFSTVFPTW5vdzF6TVE3bGNZMEUtaW1nLTVfMTc3MDUzNTYzNzAwMF9uYTFmbl9ZMjl1ZEdGamRDMWlZV05yWjNKdmRXNWsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bGaMz2cIBGGsDh6dbRfWEbhLJx9kZiWnc1Cz0gqmmMNi0K3MaZEfpMga~RBaP~OsvFc12PZQz4x1t5Ziyizk3y9WB4u~uAxh801rjVSkLjKdL8sFNbggBh9FIx4Fz3AypwvXdjB41aKzDjMLjEmIdzGllVkGz7Utv0I3i~5cBfEh1sCCFp5fwO-C-lBndQtXQYkHUsVSuCAofe1AofOMfbKpug29AvO~TaQomDhoPil3ETgUWQTn4UK7XF-0t1EitsNmZWgIhqbBTzGjpTm0Ml-qjYQdHu-E8zGS~8dJCmb6wQX-8FSlfoOdQvLk1QNNOxZyIIGTXEK0u-FkUtBJFg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">Contact us for inquiries about our services</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="glass-card p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      No.18, Jalan Seksyen 2/17<br />
                      Taman Kajang Utama<br />
                      43000 Kajang, Selangor<br />
                      Malaysia
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      Tel: 603-8740 1061<br />
                      Fax: 603-8734 0070
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:magnitudepower@gmail.com" className="text-primary hover:underline">
                      magnitudepower@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-border"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-border"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background/50 border-border min-h-[150px]"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg shadow-xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-2xl font-bold gradient-text mb-2">MAGNITUDE POWER</p>
              <p className="text-muted-foreground text-sm">
                © 2025 Magnitude Power Sdn Bhd (938838-M). All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
