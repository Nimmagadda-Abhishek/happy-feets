import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  ArrowRight, 
  MapPin,
  Award,
  CheckCircle,
  Star,
  Globe,
  Users,
  Shield
} from "lucide-react";
import beachImage from "@/assets/03.jpeg";
import mountainImage from "@/assets/mountain-trek.jpg";
import andamanImage from "@/assets/04.jpeg";
import himachalImage from "@/assets/05.jpeg";
import culturalImage from "@/assets/cultural-tour.jpg";
import familyImage from "@/assets/family-getaway.jpg";
import heroBackground from "@/assets/travel-hero-background.jpg";
import ooty from "@/assets/06.jpeg";
import goa from "@/assets/goa.jpeg";
import rajastan from "@/assets/rajastan.jpeg";
import bannerImage from "@/assets/banner.png"
import manaliImage from "@/assets/manali.jpg"
import { markAsUncloneable } from "worker_threads";

const Holidays = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const packages = [
    {
      title: "Kerala",
      image: beachImage,
      link: "/enquiry",
      description: "Experience the serene backwaters, lush greenery, and pristine beaches of God's Own Country."
    },
    {
      title: "Kashmir", 
      image: mountainImage,
      link: "/enquiry",
      description: "Discover the paradise on earth with snow-capped mountains, beautiful valleys, and pristine lakes."
    },
    {
      title: "Shimla Manali",
      image: manaliImage,
      link: "/enquiry",
      description: "Enjoy the cool mountain breeze, scenic landscapes, and adventure activities in the Himalayas."
    },
    {
      title: "Rajasthan",
      image: rajastan,
      link: "/enquiry",
      description: "Explore the royal heritage, magnificent palaces, and vibrant culture of the Desert State."
    },
    {
      title: "Goa",
      image: goa,
      link: "/enquiry",
      description: "Relax on golden beaches, enjoy water sports, and experience the vibrant nightlife."
    },
    {
      title: "Ooty",
      image: ooty,
      link: "/enquiry",
      description: "Escape to the Queen of Hill Stations with pleasant weather, tea gardens, and scenic beauty."
    },
    {
      title: "Agra",
      image: culturalImage,
      link: "/enquiry",
      description: "Visit the iconic Taj Mahal and explore the rich Mughal heritage of this historic city."
    },
    {
      title: "Andaman",
      image: andamanImage,
      link: "/enquiry",
      description: "Dive into crystal clear waters, pristine beaches, and untouched natural beauty."
    },
    {
      title: "Himachal Pradesh",
      image: himachalImage,
      link: "/enquiry",
      description: "Experience adventure sports, apple orchards, and breathtaking mountain views."
    }
  ];

  const filteredPackages = packages.filter(pkg =>
    pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-br from-black/60 to-black/40 bg-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/80 mb-6">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-white">PACKAGES</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              PACKAGES
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search destinations, packages..."
                className="pl-10 pr-4 py-3 bg-white/95 border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      

      {/* Main Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">PACKAGES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CHECKOUT OUR PACKAGES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.title} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{pkg.title}</span>
                    </div>
                    <Button variant="default" size="sm" asChild>
                      <Link to={pkg.link}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our travel experts specialize in creating completely customized itineraries. 
              Tell us your dreams, and we'll make them reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/enquiry">
                  Create Custom Trip
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Speak to Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Holidays;