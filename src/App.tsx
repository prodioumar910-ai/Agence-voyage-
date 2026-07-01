import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import SignatureExperience from "./components/SignatureExperience";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Notification from "./components/Notification";

export default function App() {
  // Booking Modal State
  const [booking, setBooking] = useState<{ isOpen: boolean; destinationId?: string }>({
    isOpen: false,
    destinationId: "",
  });

  // Floating Premium Toast Notification
  const [notification, setNotification] = useState<string | null>(null);

  // Helper to open booking modal (optionally with pre-selected destination card)
  const handleOpenBooking = (destinationId?: string) => {
    setBooking({
      isOpen: true,
      destinationId: destinationId || "",
    });
  };

  const handleCloseBooking = () => {
    setBooking((prev) => ({ ...prev, isOpen: false }));
  };

  // Callback triggers for successful form actions
  const triggerSuccessNotification = (message: string) => {
    setNotification(message);
  };

  return (
    <div className="min-h-screen bg-offwhite text-slate-deep selection:bg-brand-blue/10 selection:text-slate-deep">
      {/* 1. Sticky Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main>
        {/* 2. Hero Section - Cinematic Entrance */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Destinations Selectionnées - Curated Grid */}
        <Destinations onDiscover={handleOpenBooking} />

        {/* 4. Expérience Signature - Craft Narrative */}
        <SignatureExperience onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Témoignages (Slider) - Prestigious Quotes */}
        <Testimonials />
      </main>

      {/* 6. Contact / Footer - Final Call & Newsletter Signup */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onSubscribeSuccess={triggerSuccessNotification}
      />

      {/* 7. Fully interactive consultation inquiry Form */}
      <BookingModal
        isOpen={booking.isOpen}
        onClose={handleCloseBooking}
        selectedDestinationId={booking.destinationId}
        onSuccess={triggerSuccessNotification}
      />

      {/* 8. Success Action Toast Indicator */}
      <Notification
        message={notification}
        onClose={() => setNotification(null)}
      />
    </div>
  );
}
