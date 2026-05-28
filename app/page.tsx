import type { Metadata } from "next";
import { HeroSection } from "../components/landing/hero";
import { IntroSection } from "../components/landing/intro";
import { ReadySection } from "../components/landing/ready";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { buildPageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";
import { fetchPrograms, hasKey } from "@/lib/programs-data";
import { selectFeaturedPrograms } from "@/lib/programs";

export const metadata: Metadata = buildPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  canonical: "/",
});

export default async function Home() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <IntroSection />
        <ReadySection />
      </main>
      <Footer />
    </>
  );
}
