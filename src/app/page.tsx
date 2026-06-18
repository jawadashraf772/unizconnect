import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VslSection from "@/components/VslSection";
import TransformSection from "@/components/TransformSection";
import UniversitiesSection from "@/components/UniversitiesSection";
import CoversSection from "@/components/CoversSection";
import AcceptancesSection from "@/components/AcceptancesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import BookingForm from "@/components/BookingForm";
import SpotlightTestimonial from "@/components/SpotlightTestimonial";
import WhySection from "@/components/WhySection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 5. Top Universities */}
        <UniversitiesSection />

        {/* 2. VSL Section */}
        <VslSection />

        {/* 3 & 4. Transform Stories & "For You If" Section */}
        <TransformSection />

        {/* 6 & 7. What Session Covers & Bonuses */}
        <CoversSection />

        {/* New Acceptances Section */}
        <AcceptancesSection />

        {/* 8. Student Testimonials */}
        <TestimonialsSection />

        {/* 9 & 10. Backstory & Authority Credentials */}
        <TrustSection />

        {/* 12-14. Offer, Value Prop, How Booking Works & Form */}
        <BookingForm />

        {/* 14.5. Spotlight Testimonial (Kashmala Khan) */}
        <SpotlightTestimonial />

        {/* 14.8. Why PKR 5,000 Section */}
        <WhySection />

        {/* 15. FAQs */}
        <FaqSection />
      </main>

      {/* 16. Footer CTA & Brand Info */}
      <FooterSection />
    </div>
  );
}
