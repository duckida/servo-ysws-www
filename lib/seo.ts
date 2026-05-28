import type { Metadata } from "next";

export const SITE_NAME = "Servo";
export const SITE_TITLE = "Servo - the robotics YSWS";
export const SITE_DESCRIPTION =
  "Build or design a robot, and we ship the parts and upgrades to keep it going!";
export const SITE_URL = "https://servo-ysws.netlify.app";

type PageMetadataInput = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  imageAlt?: string;
};

export function buildPageMetadata({
  title,
  description,
  canonical,
  image = "https://servo-ysws.vercel.app/assets/welcometoservo.png",
  imageAlt = SITE_NAME,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
