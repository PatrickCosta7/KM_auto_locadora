import { Banner } from "../../organisms/Banner";
import { HowItWorks } from "../../organisms/HowItWorks";
import { Benefits } from "../../organisms/Benefits";
import { ContactForm } from "../../organisms/ContactForm";
import { WhatsAppButton } from "../../atoms/WhatsAppButton";

export default function MainPageContent() {
  return (
    <>
      <Banner />
      <HowItWorks />
      <Benefits />
      <ContactForm />
      <WhatsAppButton />
    </>
  );
}
