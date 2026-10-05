import "../components/donor/donor.css"
import Navbar from "../components/donor/Navbar";
import HeroSection from "../components/donor/HeroSection";
import DonorStats from "../components/donor/DonorStats";
import BloodRequests from "../components/donor/BloodRequests";
import WhyDonate from "../components/donor/WhyDonate";
import DonationHistory from "../components/donor/DonationHistory";
import Footer from "../components/donor/Footer";

function DonorDashboard() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <DonorStats />
        <BloodRequests />
        <WhyDonate />
        <DonationHistory />
      </main>

      <Footer />
    </>
  );
}

export default DonorDashboard;