export interface ProjectData {
  slug: string;
  name: string;
  industry: string;
  industrySlug: string;
  tagline: string;
  services: string[];
  timeline: string;
  keyResult: string;
  color: string;
  accent: string;
  challenge: string;
  approach: {
    step: string;
    title: string;
    body: string;
  }[];
  results: {
    label: string;
    value: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  description?: string; // For the grid cards
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    slug: "medcare-clinic",
    name: "MedCare Clinic",
    industry: "Healthcare",
    industrySlug: "healthcare",
    tagline: "How a struggling clinic tripled its appointments in 60 days.",
    description: "Complete digital transformation — website, AI chatbot and CRM — turning a struggling clinic into the most booked practice in their area.",
    services: ["Website Design", "AI Integration", "CRM"],
    timeline: "6 weeks",
    keyResult: "3× more appointments",
    color: "#0F172A",
    accent: "#3B82F6",
    challenge:
      "MedCare Clinic was operating at 35% capacity despite being one of the most qualified practices in their area. Their website was outdated, had no online booking, and they were losing potential patients to competitors who appeared higher on Google. The front desk team was overwhelmed with manual appointment calls and WhatsApp messages.",
    approach: [
      {
        step: "01",
        title: "Website Redesign",
        body: "Built a clean, fast, mobile-first website with an integrated booking system. Patients can book appointments in under 60 seconds.",
      },
      {
        step: "02",
        title: "AI Booking Assistant",
        body: "Deployed an AI chatbot trained on MedCare's services, FAQs and availability. It handles 90% of patient queries and books appointments 24/7.",
      },
      {
        step: "03",
        title: "CRM Integration",
        body: "Connected all patient inquiries — website, WhatsApp, Instagram — into a single CRM. Automated follow-ups for missed calls and no-shows.",
      },
      {
        step: "04",
        title: "Local SEO",
        body: "Optimised their Google Business Profile and added location-targeted content. They now appear in the top 3 for all target keywords.",
      },
    ],
    results: [
      { label: "Appointment increase", value: "3×" },
      { label: "Admin time saved weekly", value: "18hrs" },
      { label: "Google ranking position", value: "#1" },
      { label: "Patient satisfaction score", value: "4.9★" },
    ],
    testimonial: {
      quote:
        "We went from turning patients away because we couldn't manage the load, to having a waitlist. WayFind didn't just build us a website — they changed how our entire practice operates.",
      author: "Dr. Sara Ahmed",
      role: "Founder, MedCare Clinic",
    },
  },
  {
    slug: "elite-fitness-hub",
    name: "Elite Fitness Hub",
    industry: "Fitness",
    industrySlug: "fitness",
    tagline: "PKR 2.4M in new memberships — in the first month.",
    description: "Meta ad campaigns and an AI membership bot that generated PKR 2.4M in new memberships in the first month.",
    services: ["Meta Ads", "AI Integration", "Website Design"],
    timeline: "4 weeks",
    keyResult: "PKR 2.4M new memberships",
    color: "#111111",
    accent: "#22C55E",
    challenge:
      "Elite Fitness Hub had a great facility but poor digital presence. Their Meta ads were running with no strategy, wasting budget. Their website had no clear call-to-action and their DMs were unmanaged — leads were going cold before staff could respond.",
    approach: [
      {
        step: "01",
        title: "Meta Ad Overhaul",
        body: "Rebuilt their entire campaign structure with proper targeting, creative testing and a clear funnel from awareness to membership sign-up.",
      },
      {
        step: "02",
        title: "AI Membership Bot",
        body: "Built an AI assistant that instantly responds to every Instagram and Facebook inquiry, qualifies leads and books free trial sessions automatically.",
      },
      {
        step: "03",
        title: "Landing Page Optimisation",
        body: "Redesigned the key membership landing page with social proof, clear pricing and a friction-free sign-up flow. Conversion rate increased 4×.",
      },
    ],
    results: [
      { label: "Revenue, Month 1", value: "PKR 2.4M" },
      { label: "Cost per lead", value: "↓ 68%" },
      { label: "Lead response time", value: "< 30 sec" },
      { label: "Ad ROAS", value: "5.8×" },
    ],
    testimonial: {
      quote:
        "The AI bot alone saved us two full-time staff costs. It responds instantly, qualifies leads perfectly and books trials while we sleep. The first month results blew us away.",
      author: "Kamran Raza",
      role: "Owner, Elite Fitness Hub",
    },
  },
  {
    slug: "dastarkhan-restaurant",
    name: "Dastarkhan Restaurant",
    industry: "Food", // Changed to Food to match industries slug
    industrySlug: "food",
    tagline: "Ranking #1 on Google for every target keyword in Islamabad.",
    description: "Local SEO and Google Business Profile management that pushed them to #1 for all their target keywords in Islamabad.",
    services: ["SEO", "Google Business", "Website Design"],
    timeline: "8 weeks",
    keyResult: "#1 on Google for 12 keywords",
    color: "#1A0A00",
    accent: "#F59E0B",
    challenge:
      "Dastarkhan was a beloved local restaurant with no digital presence. Competitors with inferior food were appearing above them on Google. They had no Google Business Profile, no reviews strategy, and their old website wasn't indexed properly.",
    approach: [
      {
        step: "01",
        title: "Google Business Overhaul",
        body: "Created and fully optimised their Google Business Profile with professional photos, complete menu, service areas and Q&A. Set up a review collection system.",
      },
      {
        step: "02",
        title: "Local SEO Campaign",
        body: "Targeted 12 high-intent local keywords. Built location-specific landing pages, fixed all technical SEO issues and built local citations.",
      },
      {
        step: "03",
        title: "Website Redesign",
        body: "Built a beautiful restaurant website with the full menu, online reservation and delivery integration. Page speed went from 42 to 96 on Google PageSpeed.",
      },
    ],
    results: [
      { label: "Keywords ranking #1", value: "12" },
      { label: "Monthly Google impressions", value: "+840%" },
      { label: "Online reservations/month", value: "180+" },
      { label: "ROI (first quarter)", value: "12×" },
    ],
    testimonial: {
      quote:
        "We went from invisible to number one. People now walk in saying they found us on Google — that never happened before. The ROI in the first 3 months was 12 times what we invested.",
      author: "Ali Khan",
      role: "Owner, Dastarkhan Restaurant",
    },
  },
  {
    slug: "brightpath-academy",
    name: "BrightPath Academy",
    industry: "Education",
    industrySlug: "education",
    tagline: "180 new admissions in the first term — double their previous intake.",
    description: "A new website and Google ad campaigns that delivered 180 new admissions in the first term — doubling their previous intake.",
    services: ["Website Design", "Google Ads", "SEO"],
    timeline: "5 weeks",
    keyResult: "180 new admissions, first term",
    color: "#0A0F1A",
    accent: "#8B5CF6",
    challenge:
      "BrightPath Academy was a new school struggling to fill seats in their inaugural term. They had no brand awareness, no digital presence and were relying entirely on word of mouth. They needed fast, targeted traffic to parents actively searching for schools.",
    approach: [
      {
        step: "01",
        title: "Website & Enrollment System",
        body: "Built a professional website with an online application form, virtual tour section and clear information for parents. Integrated automated follow-up emails.",
      },
      {
        step: "02",
        title: "Google Ads Campaign",
        body: "Launched targeted search campaigns for high-intent keywords like 'best school Islamabad' and 'school admissions 2025'. Highly optimised ad copy and landing pages.",
      },
      {
        step: "03",
        title: "SEO Foundation",
        body: "Built strong on-page SEO and local content targeting parents in their catchment area. Created a school blog with admissions guides and parent resources.",
      },
    ],
    results: [
      { label: "New admissions, Term 1", value: "180" },
      { label: "Admissions vs previous year", value: "2×" },
      { label: "Cost per enrollment", value: "PKR 1,200" },
      { label: "Parent inquiry conversion", value: "34%" },
    ],
    testimonial: {
      quote:
        "We were genuinely worried about filling our classes. WayFind turned that around completely. We ended up oversubscribed and had to add a waitlist. We've already re-signed for next year.",
      author: "Principal Hira Baig",
      role: "Principal, BrightPath Academy",
    },
  },
  {
    slug: "luxe-boutique",
    name: "Luxe Boutique",
    industry: "Retail",
    industrySlug: "retail",
    tagline: "4.2× ROAS on Meta campaigns — turning a boutique into a national brand.",
    description: "High-ROAS Meta ad campaigns and an e-commerce website that turned a physical boutique into a national online brand.",
    services: ["Meta Ads", "Website Design", "CRM"],
    timeline: "6 weeks",
    keyResult: "4.2× ROAS on Meta campaigns",
    color: "#100A1A",
    accent: "#EC4899",
    challenge:
      "Luxe Boutique was a high-end physical store in Lahore with strong local loyalty but zero online presence. The owner wanted to expand nationally but had no e-commerce infrastructure and no idea how to run digital ads profitably.",
    approach: [
      {
        step: "01",
        title: "E-Commerce Website",
        body: "Built a fully functional e-commerce store with product photography guidelines, easy inventory management and integrated payment options including EasyPaisa and card.",
      },
      {
        step: "02",
        title: "Meta Ad Strategy",
        body: "Launched a full-funnel Meta strategy: awareness campaigns with lifestyle creative, retargeting for product viewers and conversion campaigns for cart abandoners.",
      },
      {
        step: "03",
        title: "CRM & Retention",
        body: "Set up automated post-purchase sequences, birthday discounts and loyalty programme communications. Repeat purchase rate increased from 12% to 38%.",
      },
    ],
    results: [
      { label: "Return on ad spend", value: "4.2×" },
      { label: "Online revenue (Month 3)", value: "PKR 1.8M" },
      { label: "Repeat purchase rate", value: "38%" },
      { label: "Social following growth", value: "+12K" },
    ],
    testimonial: {
      quote:
        "I had no idea our brand could reach this far. We're now shipping to Karachi, Lahore, Islamabad and even international Pakistanis. WayFind made us a real online brand.",
      author: "Sana Mirza",
      role: "Founder, Luxe Boutique",
    },
  },
];
