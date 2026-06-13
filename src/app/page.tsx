import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VslSection from "@/components/VslSection";
import TransformSection from "@/components/TransformSection";
import CoversSection from "@/components/CoversSection";
import TrustSection from "@/components/TrustSection";
import BookingForm from "@/components/BookingForm";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* VSL Section */}
        <VslSection />

        {/* Transform & "For You If" Section */}
        <TransformSection />

        {/* What Session Covers & Bonuses */}
        <CoversSection />

        {/* Backstory & Authority Credentials */}
        <TrustSection />

        {/* How Booking Works & Registration Form */}
        <BookingForm />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Footer CTA & Brand Info */}
      <FooterSection />
    </div>
  );
}

