"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Award, Eye, Facebook, Instagram, Twitter, CheckCircle } from "lucide-react";

export default function ComprehensiveEyeExamsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumLargeSizeMediumTitles"
      background="floatingGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              {
                name: "Home",                id: "home"},
              {
                name: "About Us",                id: "about"},
              {
                name: "Features",                id: "features"},
              {
                name: "Products",                id: "products"},
              {
                name: "Impact",                id: "impact"},
              {
                name: "Reviews",                id: "reviews"},
              {
                name: "Brands",                id: "brands"},
              {
                name: "FAQs",                id: "faqs"},
              {
                name: "Contact",                id: "contact"},
              {
                name: "Eye Exams",                id: "/comprehensive-eye-exams"},
            ]}
            brandName="El Muslim"
          />
        </div>

        <div id="comprehensive-eye-exams" data-section="comprehensive-eye-exams">
          <FeatureCardTen
            tag="Our Services"
            title="Comprehensive Eye Exams"
            description="Protect your vision with our detailed eye examinations, utilizing advanced diagnostic technology for accurate assessments and personalized care."
            features={[
              {
                title: "Advanced Eye Health Assessment",                description: "Our certified optometrists use cutting-edge equipment to detect and monitor eye conditions, ensuring early intervention and optimal visual health.",                media: {
                  imageSrc: "http://img.b2bpic.net/free-photo/doctor-patient-ophthalmologist-s-office_23-2150917653.jpg",                  imageAlt: "Eye exam equipment in an optometrist's office"},
                items: [
                  { icon: CheckCircle, text: "Retinal Imaging" },
                  { icon: CheckCircle, text: "Glaucoma Screening" },
                  { icon: CheckCircle, text: "Visual Acuity Tests" },
                  { icon: CheckCircle, text: "Prescription Update" },
                  { icon: CheckCircle, text: "Cataract Evaluation" },
                  { icon: CheckCircle, text: "Diabetic Eye Exam" },
                ],
                reverse: false,
              },
            ]}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="El Muslim"
            copyrightText="© 2024 El Muslim. All rights reserved."
            socialLinks={[
              {
                icon: Facebook,
                href: "#",                ariaLabel: "Facebook"},
              {
                icon: Instagram,
                href: "#",                ariaLabel: "Instagram"},
              {
                icon: Twitter,
                href: "#",                ariaLabel: "Twitter"},
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
