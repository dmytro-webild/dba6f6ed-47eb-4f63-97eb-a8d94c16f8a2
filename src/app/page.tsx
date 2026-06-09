"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Eye, Facebook, Instagram, Twitter, Users } from "lucide-react";

export default function LandingPage() {
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
          name: "Home",
          id: "home",
        },
        {
          name: "About Us",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Impact",
          id: "impact",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Brands",
          id: "brands",
        },
        {
          name: "FAQs",
          id: "faqs",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="El Muslim"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="El Muslim: Vision, Style, Clarity."
      description="Discover a world of perfect vision and impeccable style with our curated collection of eyewear."
      testimonials={[
        {
          name: "Fatima Zahra",
          handle: "@fatima_style",
          testimonial: "El Muslim truly transformed my look! Their selection is amazing, and the staff helped me find the perfect pair.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-black-elegant-suit-fashion-male-posing-studio-white-background_158538-27242.jpg",
        },
        {
          name: "Ahmed Rashid",
          handle: "@ahmed.vision",
          testimonial: "Outstanding service and quality. My new glasses from El Muslim are incredibly comfortable and stylish. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-artist-talking-phone_23-2148422176.jpg",
        },
        {
          name: "Sara Khan",
          handle: "@sara_reads",
          testimonial: "I love my new frames! The blue light filter is a game-changer for my work. Thank you, El Muslim!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-handsome-modern-man-wearing-glasses-denim-jacket-yellow-background-with-happy-face-standing-smiling-with-confident-smile-showing-teeth_839833-30354.jpg",
        },
        {
          name: "Omar Hassan",
          handle: "@omar_sight",
          testimonial: "Professional and friendly. They made the whole process of getting new glasses enjoyable. Fantastic experience!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-fashionable-model_23-2148376637.jpg",
        },
        {
          name: "Leila Mahmoud",
          handle: "@leila_look",
          testimonial: "Fashionable and durable eyewear. I always get compliments when I wear my El Muslim glasses.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-businessman-dressed-elegant-suit-looking-away-correct-his-glasses-while-standing-outdoors-against-skyscraper-background_613910-20067.jpg",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-girl-shows-okay-ok-signs-look-satisfied-recommend-good-company-perfect-quality-praise-good-job-well-done-standing-pleased-against-white-background_176420-54380.jpg",
          alt: "Fatima Zahra",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-businessman-with-glasses_23-2148816885.jpg",
          alt: "Ahmed Rashid",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-woman-with-digital-tablet_329181-20140.jpg",
          alt: "Sara Khan",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-intern-starting-her-career_1262-17047.jpg",
          alt: "Omar Hassan",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-fashion-businessman-model-dressed-elegant-blue-suit-with-glasses_158538-4404.jpg",
          alt: "Aisha Karim",
        },
      ]}
      avatarText="Join thousands of happy customers"
      imageSrc="http://img.b2bpic.net/free-photo/side-view-woman-eye-examination_23-2148273216.jpg"
      imageAlt="Stylish person wearing modern glasses"
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="Crafting Clear Visions Since 2005"
      description="At El Muslim, we believe that eyewear is more than just a necessity; it's a statement. With over two decades of expertise, we've dedicated ourselves to providing high-quality, stylish, and comfortable glasses for every face and every occasion."
      subdescription="Our passion lies in helping you see the world clearly, confidently, and fashionably. We combine traditional craftsmanship with modern design to bring you eyewear that truly stands out."
      icon={Eye}
      imageSrc="http://img.b2bpic.net/free-photo/hand-graphic-designer-working-with-stilus-tablet_93675-131302.jpg"
      imageAlt="Optician adjusting glasses with precision tools"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Comprehensive Eye Exams",
          description: "Our certified optometrists use state-of-the-art equipment to provide thorough eye health and vision assessments.",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-patient-ophthalmologist-s-office_23-2150917653.jpg",
          imageAlt: "Eye exam equipment",
        },
        {
          title: "Personalized Style Consultation",
          description: "Find your ideal frames with expert guidance from our stylists, ensuring a perfect match for your face shape and personal style.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-glasses-looks-herself-mirrormorning-routine_169016-64756.jpg",
          imageAlt: "Woman trying on glasses",
        },
        {
          title: "Advanced Lens Customization",
          description: "We offer a wide range of premium lenses, including blue light filtering, progressive, and anti-glare coatings, tailored to your needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shot-female-holding-blue-sunglasses_181624-20707.jpg",
          imageAlt: "Custom optical lenses",
        },
      ]}
      title="Experience Unmatched Eyewear Services"
      description="From comprehensive eye exams to personalized style consultations, El Muslim ensures a seamless journey to your perfect pair of glasses."
      tag="What We Offer"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "The Classic Round",
          price: "$120.00",
          imageSrc: "http://img.b2bpic.net/free-photo/colored-transparent-sunglasses-still-life_23-2150165930.jpg",
          imageAlt: "Classic round eyeglasses",
        },
        {
          id: "p2",
          name: "Modern Square Sunglasses",
          price: "$180.00",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-arrangement-3d-glasses_23-2149487705.jpg",
          imageAlt: "Modern square sunglasses",
        },
        {
          id: "p3",
          name: "Kids Playful Frames",
          price: "$85.00",
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-young-blonde-girl-using-paper-eyeglasses-looking-camera-pink-wall_171337-3034.jpg",
          imageAlt: "Colorful kids eyeglasses",
        },
        {
          id: "p4",
          name: "Performance Sports Eyewear",
          price: "$150.00",
          imageSrc: "http://img.b2bpic.net/free-photo/young-african-american-rapper-black-top-listening-new-tracks-outside-blue-sky-handsome-serious-man-sitting-alone-roadside-chatting-with-his-friends-his-digital-device_273609-1229.jpg",
          imageAlt: "Sport protective glasses",
        },
        {
          id: "p5",
          name: "Blue Light Filter Glasses",
          price: "$95.00",
          imageSrc: "http://img.b2bpic.net/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-708.jpg",
          imageAlt: "Blue light blocking glasses",
        },
        {
          id: "p6",
          name: "Designer Collection Eyeglasses",
          price: "$250.00",
          imageSrc: "http://img.b2bpic.net/free-photo/optic-glasses-table_140725-7411.jpg",
          imageAlt: "Luxury designer glasses",
        },
      ]}
      title="Find Your Perfect Pair"
      description="Explore our diverse range of eyeglasses and sunglasses, carefully selected for quality, comfort, and cutting-edge design."
      tag="Our Collection"
    />
  </div>

  <div id="impact" data-section="impact">
      <MetricCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "20+",
          title: "Years of Service",
          description: "Dedicated to enhancing vision since 2005.",
          icon: Award,
        },
        {
          id: "m2",
          value: "15K+",
          title: "Happy Customers",
          description: "Thousands have found their perfect pair with us.",
          icon: Users,
        },
        {
          id: "m3",
          value: "Top Rated",
          title: "Quality Eyewear",
          description: "Consistently recognized for excellence in products and service.",
          icon: Award,
        },
      ]}
      title="El Muslim by the Numbers"
      description="Proudly serving our community with exceptional vision care and stylish eyewear for years."
      tag="Our Impact"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Nadia Ali",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-dreamy-cheerful-woman-keeps-palms-pressed-together-near-face-concentrated-away-feels-glad-wears-round-spectacles-pink-jacket-thinks-about-something-pleasant-isolated-blue-wall_273609-57100.jpg",
          imageAlt: "Nadia Ali",
        },
        {
          id: "t2",
          name: "Jamal Khan",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-staff-airport-terminal_107420-85049.jpg",
          imageAlt: "Jamal Khan",
        },
        {
          id: "t3",
          name: "Aisha Rahman",
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-couple-is-posing-outdoor_344912-1672.jpg",
          imageAlt: "Aisha Rahman",
        },
        {
          id: "t4",
          name: "Tariq Mahmood",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-unshaven-employee_1098-4075.jpg",
          imageAlt: "Tariq Mahmood",
        },
        {
          id: "t5",
          name: "Zahra Abbas",
          imageSrc: "http://img.b2bpic.net/free-photo/funny-brunette-girl-portrait_23-2148173634.jpg",
          imageAlt: "Zahra Abbas",
        },
      ]}
      cardTitle="What Our Customers Say"
      cardTag="Happy Visions"
      cardAnimation="slide-up"
    />
  </div>

  <div id="brands" data-section="brands">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Ray-Ban",
        "Oakley",
        "Versace",
        "Gucci",
        "Prada",
        "Vogue",
        "Dior",
      ]}
      title="Partnering with Leading Eyewear Brands"
      description="We collaborate with the industry's most respected names to bring you unparalleled quality and design in every pair."
      tag="Trusted By"
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",
          title: "Do you offer eye exams?",
          content: "Yes, we offer comprehensive eye examinations by certified optometrists. You can book an appointment online or by calling our store.",
        },
        {
          id: "faq2",
          title: "What brands of glasses do you carry?",
          content: "We stock a wide range of international and local brands, including designer labels and affordable options. Visit our store to explore the full collection.",
        },
        {
          id: "faq3",
          title: "Can I use my insurance for purchases?",
          content: "We accept most major vision insurance plans. Please contact us or visit our store with your insurance details, and our staff will assist you.",
        },
        {
          id: "faq4",
          title: "How long does it take to get new glasses?",
          content: "The turnaround time varies depending on your prescription and chosen lenses. Typically, it takes 3-7 business days. We will provide an estimated delivery date at the time of purchase.",
        },
        {
          id: "faq5",
          title: "Do you offer repairs or adjustments?",
          content: "Yes, we provide complimentary adjustments and minor repairs for glasses purchased from our store. For other repairs, charges may apply.",
        },
        {
          id: "faq6",
          title: "What is your return policy?",
          content: "We offer a 30-day satisfaction guarantee on all our products. If you're not completely happy, you can return or exchange your glasses within 30 days of purchase.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our products, services, and policies at El Muslim."
      tag="Need Answers?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Visit Our Store or Send Us a Message"
      description="We're here to assist you with all your eyewear needs. Reach out to El Muslim today!"
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="By submitting, you agree to receive updates and promotions from El Muslim."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="El Muslim"
      copyrightText="© 2024 El Muslim. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
