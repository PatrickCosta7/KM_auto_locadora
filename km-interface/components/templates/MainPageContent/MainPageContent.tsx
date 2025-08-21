import { HeroSection } from "../../organisms/HeroSection";
import { HowItWorks } from "../../organisms/HowItWorks";
import { Benefits } from "../../organisms/Benefits";
import { ContactForm } from "../../organisms/ContactForm";
import { WhatsAppButton } from "../../atoms/WhatsAppButton";

export default function MainPageContent() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <ContactForm />
      <WhatsAppButton />
    </>
  );
}
