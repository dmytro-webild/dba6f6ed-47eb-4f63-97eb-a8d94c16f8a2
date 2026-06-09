import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'El Muslim - Vision, Style, Clarity | Eyeglasses & Sunglasses',
  description: 'Discover premium eyeglasses and stylish sunglasses at El Muslim. Offering comprehensive eye exams, personalized style consultations, and a curated collection of eyewear for perfect vision.',
  keywords: ["El Muslim, glasses store, eyeglasses, sunglasses, eye exams, optical, eyewear, vision care, contact lenses, designer frames"],
  openGraph: {
    "title": "El Muslim - Vision, Style, Clarity | Eyeglasses & Sunglasses",
    "description": "Discover premium eyeglasses and stylish sunglasses at El Muslim. Offering comprehensive eye exams, personalized style consultations, and a curated collection of eyewear for perfect vision.",
    "url": "https://www.elmuslim.com",
    "siteName": "El Muslim",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/side-view-woman-eye-examination_23-2148273216.jpg",
        "alt": "Stylish person wearing modern glasses"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "El Muslim - Vision, Style, Clarity | Eyeglasses & Sunglasses",
    "description": "Discover premium eyeglasses and stylish sunglasses at El Muslim. Offering comprehensive eye exams, personalized style consultations, and a curated collection of eyewear for perfect vision.",
    "images": [
      "http://img.b2bpic.net/free-photo/side-view-woman-eye-examination_23-2148273216.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
