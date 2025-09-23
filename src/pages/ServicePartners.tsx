import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Plane, Hotel, Car, MapPin, Users, Star, Globe } from "lucide-react";
import resortsNetworkMap from "@/assets/resorts-network-map.png";
import happyFeetLogo from "@/assets/happy-feet-logo.png";

const ServicePartners = () => {
  // Actual partner image URLs
  const partnerImages = [
    {
      url: "https://matrimonyybucket.s3.ap-south-1.amazonaws.com/debug-batch/c31b6690-9a15-4287-bedf-8f2e3e7324e0_WhatsApp%20Image%202025-09-22%20at%209.20.16%20PM%20%281%29.jpeg",
      alt: "Travel Partner 1",
    },
    {
      url: "https://matrimonyybucket.s3.ap-south-1.amazonaws.com/debug-batch/b9584126-2730-4791-9a36-aa254ba4a961_WhatsApp%20Image%202025-09-22%20at%209.20.16%20PM.jpeg",
      alt: "Travel Partner 2", 
    },
    {
      url: "https://matrimonyybucket.s3.ap-south-1.amazonaws.com/debug-batch/02b0ff61-f790-4e85-b810-c41f01a40675_WhatsApp%20Image%202025-09-22%20at%209.20.15%20PM%20%281%29.jpeg",
      alt: "Travel Partner 3",
    },
    {
      url: "https://matrimonyybucket.s3.ap-south-1.amazonaws.com/debug-batch/1636beaf-f0ca-46a4-9aa9-0716d89fa902_WhatsApp%20Image%202025-09-22%20at%209.20.15%20PM.jpeg",
      alt: "Travel Partner 4",
    },
    {
      url: "https://matrimonyybucket.s3.ap-south-1.amazonaws.com/debug-batch/aa42fb80-6ba1-4cca-af82-11d11115d4e9_WhatsApp%20Image%202025-09-22%20at%209.20.14%20PM%20%282%29.jpeg",
      alt: "Travel Partner 5",
    },
    {
      url: "https://matrimonyybucket.s3.ap-south-1.amazonaws.com/debug-batch/292c8b6f-0ed2-421e-a190-4ff7d8573bf8_WhatsApp%20Image%202025-09-22%20at%209.20.14%20PM%20%281%29.jpeg",
      alt: "Travel Partner 6",
    },
    {
      url: "https://matrimonyybucket.s3.ap-south-1.amazonaws.com/debug-batch/595337df-ef23-4f7d-884d-dacd56aeae6e_WhatsApp%20Image%202025-09-22%20at%209.20.14%20PM.jpeg",
      alt: "Travel Partner 7",
    },
    {
      url: "https://matrimonyybucket.s3.ap-south-1.amazonaws.com/debug-batch/a4d6adb3-225e-4016-b66c-1776243f565f_WhatsApp%20Image%202025-09-22%20at%209.20.13%20PM.jpeg",
      alt: "Travel Partner 8",
    }
  ];

  const featuredPartners = [
    {
      name: "Luxury Hotels International",
      type: "Hotel Chain",
      locations: "50+ countries",
      rating: 4.9,
      specialization: "Luxury accommodation and premium services"
    },
    {
      name: "Global Airways",
      type: "Airline Partner", 
      locations: "100+ destinations",
      rating: 4.7,
      specialization: "International and domestic flights"
    },
    {
      name: "Heritage Tours & Travels",
      type: "Tour Operator",
      locations: "Pan India",
      rating: 4.8,
      specialization: "Cultural and heritage tourism"
    },
    {
      name: "Adventure Seekers",
      type: "Activity Provider",
      locations: "Adventure destinations",
      rating: 4.6,
      specialization: "Trekking, rafting, and adventure sports"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-8 md:py-16 lg:py-20 px-4 text-center bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-6">
            <img 
              src={happyFeetLogo} 
              alt="Happy Feet Holidays Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <p className="text-primary font-medium mb-4 uppercase tracking-wider">TRUSTED NETWORK</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            <span className="text-primary">Happy Feet Holidays</span> Service Partners
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We collaborate with the finest service providers to ensure exceptional travel experiences
          </p>
        </div>
      </section>

      {/* Resort Network Map */}
      <section className="py-8 md:py-12 lg:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Resort Networks</h2>
            <p className="text-lg text-muted-foreground">
              Discover our extensive network of partner resorts across India's most beautiful destinations
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={resortsNetworkMap} 
              alt="Happy Feet Holidays Resort Network Map"
              className="max-w-full h-auto rounded-xl shadow-strong"
            />
          </div>
        </div>
      </section>

      {/* Partner Images Section - Replaced Partner Categories */}
      <section className="py-8 md:py-12 lg:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Trusted Partners</h2>

          {/* Grid layout: 2 cols on mobile, 3 cols on tablet, 4 cols on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {partnerImages.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={partner.url}
                    alt={partner.alt}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      

      {/* Partnership Benefits */}
      <section className="py-8 md:py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Partnership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Quality Assurance</h3>
              <p className="text-muted-foreground">
                All our partners are carefully vetted to ensure the highest standards of service and quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Seamless Coordination</h3>
              <p className="text-muted-foreground">
                Our strong partnerships enable smooth coordination and hassle-free travel experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Global Reach</h3>
              <p className="text-muted-foreground">
                Our extensive partner network provides you access to services worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePartners;