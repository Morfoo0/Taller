import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
    </>
  );
}
