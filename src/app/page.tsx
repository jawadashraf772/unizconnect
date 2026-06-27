import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VslSection from "@/components/VslSection";

// Lazy-load all below-the-fold sections to drastically reduce initial JS bundle on mobile
const TransformSection = dynamic(() => import("@/components/TransformSection"), { ssr: true });
const CoversSection = dynamic(() => import("@/components/CoversSection"), { ssr: true });
const AcceptancesSection = dynamic(() => import("@/components/AcceptancesSection"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: true });
const TrustSection = dynamic(() => import("@/components/TrustSection"), { ssr: true });
const BookingForm = dynamic(() => import("@/components/BookingForm"), { ssr: true });
const WhySection = dynamic(() => import("@/components/WhySection"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: true });
const FooterSection = dynamic(() => import("@/components/FooterSection"), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

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
