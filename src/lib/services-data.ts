// Shared service data for all 6 subpages
// Used by /services/[service]/page.tsx

export type ServiceTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  painPoints: { title: string; body: string }[];
  features: { icon: string; title: string; body: string }[];
  processSteps: { num: string; title: string; body: string }[];
  caseStudy: {
    client: string;
    industry: string;
    metric: string;
    metricLabel: string;
    quote: string;
    author: string;
  };
  tiers: ServiceTier[];
  faqs: { q: string; a: string }[];
};

export const SERVICES_DATA: Record<string, ServiceData> = {
  "website-design": {
    slug: "website-design",
    title: "Website Design & Development",
    tagline: "Stunning, fast, conversion-driven websites for every Pakistani business.",
    description:
      "Your website is your most powerful sales tool — or your biggest liability. WayFind builds world-class websites that look incredible, load instantly and turn visitors into paying customers.",
    painPoints: [
      {
        title: "Losing customers to competitors",
        body: "Customers compare businesses online before calling. An outdated or unprofessional website sends them straight to your competition.",
      },
      {
        title: "Website too slow or broken on mobile",
        body: "70% of Pakistani internet traffic is mobile. A slow or broken mobile experience kills conversions before they start.",
      },
      {
        title: "No clear calls-to-action",
        body: "Visitors land on your site but don't know what to do next. Without clear pathways, they leave without contacting you.",
      },
    ],
    features: [
      { icon: "◻", title: "Custom Design", body: "Unique to your brand — no templates." },
      { icon: "⚡", title: "Lightning Fast", body: "Optimised for speed. 90+ PageSpeed scores." },
      { icon: "📱", title: "Mobile-First", body: "Perfect on every screen and device." },
      { icon: "🔍", title: "SEO-Ready", body: "Built for Google from the ground up." },
      { icon: "🔗", title: "Integrations", body: "Booking, chat, CRM and payment ready." },
      { icon: "🔒", title: "Secure & Reliable", body: "SSL, backups and 99.9% uptime." },
    ],
    processSteps: [
      { num: "01", title: "Discovery & Brief", body: "We learn your business, audience and goals in depth." },
      { num: "02", title: "Design Mockups", body: "We present 2 design directions for your feedback." },
      { num: "03", title: "Development", body: "Full build with all integrations and tested on all devices." },
      { num: "04", title: "Launch & Handover", body: "Go live. We train your team and stay on support." },
    ],
    caseStudy: {
      client: "MedCare Clinic",
      industry: "Healthcare",
      metric: "3×",
      metricLabel: "more appointments in 60 days",
      quote: "Our old website was embarrassing. WayFind delivered something we're genuinely proud of — and the results speak for themselves.",
      author: "Dr. Sara Ahmed, Director",
    },
    tiers: [
      {
        name: "Basic",
        price: "PKR 50,000",
        description: "Perfect for new businesses and professionals.",
        features: [
          "Up to 5 pages",
          "Mobile-responsive design",
          "Contact form",
          "Basic SEO setup",
          "WhatsApp integration",
          "1 round of revisions",
        ],
      },
      {
        name: "Growth",
        price: "PKR 90,000",
        description: "For established businesses ready to convert.",
        features: [
          "Up to 10 pages",
          "Premium custom design",
          "Booking / appointment system",
          "Blog / news section",
          "Advanced SEO setup",
          "2 rounds of revisions",
          "30-day support",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "PKR 150,000",
        description: "Full-scale site for market leaders.",
        features: [
          "Unlimited pages",
          "Bespoke design system",
          "E-commerce ready",
          "CRM integration",
          "AI chat widget",
          "Full SEO & analytics",
          "3 rounds of revisions",
          "60-day priority support",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to provide content?",
        a: "We can work with your existing content or help you write new copy as an add-on service. Photos can be stock or yours.",
      },
      {
        q: "What platform will my site be built on?",
        a: "We build on Next.js for maximum performance, or WordPress if you need to manage content yourself easily. We recommend the right choice for your needs.",
      },
      {
        q: "Will I own my website?",
        a: "Absolutely. Once paid, the website and all assets are 100% yours. We transfer everything to your hosting and domains.",
      },
      {
        q: "Can I update the website myself after launch?",
        a: "Yes. We build a simple admin panel for WordPress sites. For Next.js sites, we offer a monthly content update package.",
      },
    ],
  },

  "crm-systems": {
    slug: "crm-systems",
    title: "CRM & Sales Automation",
    tagline: "Never lose a lead. Your pipeline always working automatically.",
    description:
      "Most businesses lose 60–80% of leads simply because no one followed up in time. Our CRM and automation systems make sure every lead is caught, nurtured and converted — even while you sleep.",
    painPoints: [
      {
        title: "Leads falling through the cracks",
        body: "Phone calls, WhatsApp messages, website forms — leads come from everywhere and get lost without a system.",
      },
      {
        title: "Manual follow-up is costing you sales",
        body: "Studies show 80% of sales require 5+ follow-ups. Most salespeople give up after 1–2. Automation fixes this.",
      },
      {
        title: "No visibility into your sales pipeline",
        body: "You don't know how many leads you have, where they are or which ones are worth chasing without a CRM.",
      },
    ],
    features: [
      { icon: "📥", title: "Lead Capture", body: "From website, WhatsApp, social and calls." },
      { icon: "⚡", title: "Instant Follow-up", body: "Automated reply within seconds of enquiry." },
      { icon: "📧", title: "Email & SMS Sequences", body: "Multi-step nurture campaigns." },
      { icon: "📊", title: "Pipeline Dashboard", body: "See every deal at a glance." },
      { icon: "🔔", title: "Task & Reminder System", body: "Never miss a callback again." },
      { icon: "📈", title: "Reports & Analytics", body: "Monthly conversion and revenue reports." },
    ],
    processSteps: [
      { num: "01", title: "Audit Your Lead Flow", body: "We map every source where leads come from." },
      { num: "02", title: "Design Automation", body: "Custom sequences for your sales process." },
      { num: "03", title: "Build & Integrate", body: "Full CRM setup and connected to all channels." },
      { num: "04", title: "Train & Launch", body: "Team training and go-live with full support." },
    ],
    caseStudy: {
      client: "Elite Fitness Hub",
      industry: "Fitness",
      metric: "90%",
      metricLabel: "of enquiries handled automatically",
      quote: "Our team used to spend hours responding to enquiries. Now the system handles it and we just get the sales calls booked in our calendar.",
      author: "Kamran Raza, Owner",
    },
    tiers: [
      {
        name: "Basic",
        price: "PKR 80,000",
        description: "For small businesses getting organised.",
        features: [
          "CRM setup (up to 3 users)",
          "Website lead capture",
          "Basic automation (2 sequences)",
          "Pipeline dashboard",
          "WhatsApp integration",
          "Training session",
        ],
      },
      {
        name: "Growth",
        price: "PKR 130,000",
        description: "For scaling teams with multiple channels.",
        features: [
          "CRM setup (up to 10 users)",
          "Multi-channel lead capture",
          "Advanced automation (5 sequences)",
          "Email + SMS campaigns",
          "Sales reporting",
          "2 training sessions",
          "30-day support",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "PKR 200,000",
        description: "Full-scale revenue operation.",
        features: [
          "Unlimited users",
          "All channel integrations",
          "Unlimited automation sequences",
          "AI lead scoring",
          "Custom reporting dashboard",
          "Monthly optimisation calls",
          "60-day priority support",
        ],
      },
    ],
    faqs: [
      {
        q: "Which CRM platform do you use?",
        a: "We work with GoHighLevel, HubSpot or custom-built CRMs depending on your needs and budget. We recommend the right fit.",
      },
      {
        q: "Can it integrate with WhatsApp Business?",
        a: "Yes. WhatsApp integration is a core part of our CRM setups for Pakistani businesses.",
      },
      {
        q: "How long does setup take?",
        a: "Basic CRM setups take 1–2 weeks. Full automation systems take 3–4 weeks.",
      },
      {
        q: "Do I need technical knowledge to use it?",
        a: "No. We design for non-technical users and provide training so your team can manage it independently.",
      },
    ],
  },

  "ai-integration": {
    slug: "ai-integration",
    title: "AI Integration & Chatbots",
    tagline: "Intelligent bots handling customer queries 24/7 while you sleep.",
    description:
      "We build AI assistants trained specifically on your business — your services, pricing, team, policies and FAQs. They handle customer queries, book appointments, qualify leads and follow up automatically.",
    painPoints: [
      {
        title: "Missing enquiries outside business hours",
        body: "60% of customer enquiries come outside 9–5. Without 24/7 response, you're losing half your potential customers.",
      },
      {
        title: "Staff spending time on repetitive questions",
        body: "The same 10 questions asked 50 times a day. AI handles these instantly so your team focuses on real work.",
      },
      {
        title: "Slow response times killing conversions",
        body: "Research shows responding to a lead within 5 minutes increases conversion by 900%. AI responds in seconds.",
      },
    ],
    features: [
      { icon: "🧠", title: "Custom-Trained AI", body: "Trained on your business, not generic." },
      { icon: "💬", title: "Multi-Channel", body: "Website, WhatsApp, Facebook & Instagram." },
      { icon: "📅", title: "Appointment Booking", body: "Books into your calendar automatically." },
      { icon: "🎯", title: "Lead Qualification", body: "Scores and qualifies leads before handoff." },
      { icon: "🔄", title: "Continuous Learning", body: "Gets smarter with every conversation." },
      { icon: "📊", title: "Analytics Dashboard", body: "Full visibility on conversations and leads." },
    ],
    processSteps: [
      { num: "01", title: "Knowledge Gathering", body: "We collect all your business information, FAQs and policies." },
      { num: "02", title: "AI Training", body: "We train and test the AI until it represents your brand perfectly." },
      { num: "03", title: "Integration", body: "Deploy across all your channels — website, WhatsApp and social." },
      { num: "04", title: "Monitor & Improve", body: "Ongoing refinement based on real conversations." },
    ],
    caseStudy: {
      client: "MedCare Clinic",
      industry: "Healthcare",
      metric: "70%",
      metricLabel: "reduction in admin workload",
      quote: "The AI handles appointment bookings, insurance queries, directions — everything. My receptionist now focuses on patients, not the phone.",
      author: "Dr. Sara Ahmed, Director",
    },
    tiers: [
      {
        name: "Basic",
        price: "PKR 60,000",
        description: "AI chatbot for your website.",
        features: [
          "Custom-trained AI assistant",
          "Website deployment",
          "FAQ and enquiry handling",
          "Basic lead capture",
          "WhatsApp handoff",
          "Monthly review",
        ],
      },
      {
        name: "Growth",
        price: "PKR 100,000",
        description: "Multi-channel AI with appointment booking.",
        features: [
          "Advanced AI training",
          "Website + WhatsApp deployment",
          "Appointment booking integration",
          "Lead qualification scoring",
          "CRM integration",
          "Monthly optimisation",
          "30-day support",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "PKR 180,000",
        description: "Full AI ecosystem across all channels.",
        features: [
          "Deep custom AI training",
          "All channels (Website, WhatsApp, Facebook, Instagram)",
          "Appointment + payment booking",
          "Advanced lead scoring",
          "Full CRM + calendar integration",
          "Weekly performance reports",
          "60-day priority support",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it really 'AI' or just a simple chatbot?",
        a: "It's a genuine large-language-model AI trained on your business data. It can handle nuanced questions, context and natural conversation — far beyond simple if/then chatbots.",
      },
      {
        q: "What languages does it support?",
        a: "English and Urdu, with Roman Urdu support. We can configure the default language based on your customers.",
      },
      {
        q: "How long does training take?",
        a: "Initial training and deployment takes 2–3 weeks. The AI continues to improve over time with monitoring.",
      },
      {
        q: "What if the AI gives a wrong answer?",
        a: "We set up clear escalation rules. If the AI isn't sure, it hands off to your team seamlessly and we review the gap.",
      },
    ],
  },

  "seo": {
    slug: "seo",
    title: "SEO — Get Found on Google",
    tagline: "Rank above competitors and get free traffic every single day.",
    description:
      "SEO is the only marketing channel that compounds. Every article ranked, every backlink earned, every technical fix made — it all builds into a machine that delivers free traffic and free leads, month after month, year after year.",
    painPoints: [
      {
        title: "Invisible on Google",
        body: "If you're not on page one, you're not found. 91% of searches never go past the first page.",
      },
      {
        title: "Competitors getting the clicks you deserve",
        body: "Every day without SEO is another day your competitor takes customers who should be yours.",
      },
      {
        title: "Wasting budget on ads that stop when you stop",
        body: "SEO is an asset. Unlike ads, organic traffic doesn't vanish the moment you stop spending.",
      },
    ],
    features: [
      { icon: "🔑", title: "Keyword Research", body: "Target the exact terms your customers search." },
      { icon: "📄", title: "On-Page SEO", body: "Every page optimised for maximum ranking." },
      { icon: "⚙️", title: "Technical SEO", body: "Speed, structure and crawlability fixes." },
      { icon: "📍", title: "Local SEO", body: "Dominate local search and Google Maps." },
      { icon: "🔗", title: "Link Building", body: "Authority-building backlinks from quality sites." },
      { icon: "📊", title: "Monthly Reports", body: "Clear ranking progress every month." },
    ],
    processSteps: [
      { num: "01", title: "SEO Audit", body: "Full technical and content audit of your site." },
      { num: "02", title: "Keyword Strategy", body: "Research and prioritise your winning keywords." },
      { num: "03", title: "On-Page & Technical", body: "Fix and optimise every page for Google." },
      { num: "04", title: "Build & Report", body: "Ongoing content, links and monthly reporting." },
    ],
    caseStudy: {
      client: "Dastarkhan Restaurant",
      industry: "Food & Beverage",
      metric: "#1",
      metricLabel: "on Google for their local keywords",
      quote: "We went from page 3 to ranking #1 for restaurant in our area within 8 weeks. The walk-in traffic increase was immediate and real.",
      author: "Ali Khan, Founder",
    },
    tiers: [
      {
        name: "Starter",
        price: "PKR 25,000/mo",
        description: "Local SEO for small businesses.",
        features: [
          "5 target keywords",
          "On-page optimisation",
          "Google Business management",
          "Monthly ranking report",
          "Technical fixes",
        ],
      },
      {
        name: "Growth",
        price: "PKR 40,000/mo",
        description: "City-wide visibility and traffic.",
        features: [
          "15 target keywords",
          "Full on-page + technical SEO",
          "Google Business management",
          "2 SEO blog articles/month",
          "Local citation building",
          "Competitor analysis",
          "Monthly report + call",
        ],
        highlighted: true,
      },
      {
        name: "Dominate",
        price: "PKR 65,000/mo",
        description: "National ranking and authority building.",
        features: [
          "30+ target keywords",
          "Full technical SEO suite",
          "4 SEO articles/month",
          "Link building campaign",
          "National + local SEO",
          "Weekly progress updates",
          "Priority support",
        ],
      },
    ],
    faqs: [
      {
        q: "How long before I see results?",
        a: "Most clients see movement in rankings within 4–6 weeks and significant results by 3 months. SEO is a long-term investment, not an overnight fix.",
      },
      {
        q: "Do I need a website already?",
        a: "Yes. SEO works on your existing website. If you need a new site, we can bundle website + SEO for a significant saving.",
      },
      {
        q: "Is there a contract?",
        a: "We work on 3-month minimum commitments. SEO needs time to show results, and we want to be accountable for them.",
      },
      {
        q: "What's included in the monthly reports?",
        a: "Keyword rankings, organic traffic, click-through rates, top-performing pages and competitor comparison.",
      },
    ],
  },

  "ads": {
    slug: "ads",
    title: "Google & Meta Ads",
    tagline: "Every rupee in your budget working harder than ever before.",
    description:
      "Done wrong, paid advertising is a money furnace. Done right, it's the fastest way to put your business in front of ready-to-buy customers in your exact market. We do it right.",
    painPoints: [
      {
        title: "Spending money with no idea what's working",
        body: "Most business owners running their own ads have no clarity on ROAS, CPL or which campaigns are profitable.",
      },
      {
        title: "Generic ads that nobody clicks",
        body: "Bland creative and poor targeting means your budget goes to impressions that mean nothing.",
      },
      {
        title: "No follow-up system for paid leads",
        body: "Getting the click is step one. Without a proper landing page and follow-up, you're wasting half your spend.",
      },
    ],
    features: [
      { icon: "🎯", title: "Precision Targeting", body: "Right audience, right time, right message." },
      { icon: "🎨", title: "Creative Production", body: "Ad copy and visuals that stop the scroll." },
      { icon: "🔬", title: "A/B Testing", body: "Continuous testing to find winning combinations." },
      { icon: "📈", title: "Bid Optimisation", body: "Maximum return from every rupee spent." },
      { icon: "🔄", title: "Retargeting", body: "Re-engage visitors who didn't convert." },
      { icon: "📊", title: "Transparent Reporting", body: "Full clarity on spend, leads and ROAS." },
    ],
    processSteps: [
      { num: "01", title: "Audit & Strategy", body: "Analyse your market, competitors and target audience." },
      { num: "02", title: "Creative & Setup", body: "Build campaigns, ad creative and landing pages." },
      { num: "03", title: "Launch & Optimise", body: "Go live, monitor daily and optimise constantly." },
      { num: "04", title: "Report & Scale", body: "Monthly reporting and scaling what works." },
    ],
    caseStudy: {
      client: "Luxe Boutique",
      industry: "Retail",
      metric: "4.2×",
      metricLabel: "ROAS on Meta campaigns",
      quote: "WayFind's Meta campaigns gave us a 4.2× return in the first month. Our previous agency couldn't break even.",
      author: "Aisha Malik, Owner",
    },
    tiers: [
      {
        name: "Starter",
        price: "PKR 30,000/mo",
        description: "One platform, one campaign.",
        features: [
          "1 platform (Google or Meta)",
          "Campaign setup and management",
          "Ad creative (3 variations)",
          "Monthly performance report",
          "Up to PKR 100K ad spend",
        ],
      },
      {
        name: "Growth",
        price: "PKR 50,000/mo",
        description: "Multi-platform with A/B testing.",
        features: [
          "Google + Meta campaigns",
          "Full campaign management",
          "Ad creative (6 variations)",
          "A/B testing framework",
          "Landing page optimisation",
          "Retargeting campaigns",
          "Bi-weekly reporting",
          "Up to PKR 300K ad spend",
        ],
        highlighted: true,
      },
      {
        name: "Scale",
        price: "PKR 80,000/mo",
        description: "Full-funnel paid acquisition system.",
        features: [
          "All platforms",
          "Full funnel strategy",
          "Unlimited creative variations",
          "Advanced audience building",
          "CRM integration",
          "Weekly optimisation calls",
          "Weekly reporting",
          "Unlimited ad spend",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the ad spend included in the management fee?",
        a: "No. The management fee covers our team's work. Ad spend is paid directly to Google and Meta by you.",
      },
      {
        q: "What's the minimum ad spend you recommend?",
        a: "We recommend a minimum of PKR 50,000/month in ad spend to gather enough data for meaningful optimisation.",
      },
      {
        q: "How quickly will I see results?",
        a: "You can see traffic and leads from day one. Optimisation and peak performance typically takes 4–6 weeks as we gather data.",
      },
      {
        q: "Do you provide the creative (images/videos)?",
        a: "Yes, basic static creative is included. Premium video production is available as an add-on.",
      },
    ],
  },

  "google-business": {
    slug: "google-business",
    title: "Google Business Profile",
    tagline: "Own your neighbourhood's search results completely.",
    description:
      "When someone in your city searches for your type of business, Google Business Profile is often the first thing they see. A fully optimised profile means more calls, more directions and more customers — for free.",
    painPoints: [
      {
        title: "Not appearing in the local map pack",
        body: "The 3-pack of Google Business results at the top of local searches gets 44% of all clicks. If you're not there, you're invisible.",
      },
      {
        title: "Outdated or incomplete profile",
        body: "Wrong hours, no photos, unanswered reviews — all of these actively push customers away.",
      },
      {
        title: "Competitors getting your local customers",
        body: "Local search is won by businesses who actively manage their Google presence. Most don't. You should.",
      },
    ],
    features: [
      { icon: "📍", title: "Profile Optimisation", body: "100% complete, keyword-rich profile." },
      { icon: "📸", title: "Photo & Video", body: "Professional media that builds trust." },
      { icon: "⭐", title: "Review Strategy", body: "Get more reviews. Respond to all." },
      { icon: "📝", title: "Regular Posts", body: "Weekly posts to stay active and visible." },
      { icon: "❓", title: "Q&A Management", body: "Answer questions before they stop calls." },
      { icon: "📊", title: "Insights Reporting", body: "Monthly performance data." },
    ],
    processSteps: [
      { num: "01", title: "Audit & Claim", body: "Audit or claim and verify your profile." },
      { num: "02", title: "Full Optimisation", body: "Complete every section for maximum visibility." },
      { num: "03", title: "Media & Content", body: "Upload photos, videos and first posts." },
      { num: "04", title: "Monthly Management", body: "Ongoing posts, review responses and reporting." },
    ],
    caseStudy: {
      client: "BrightPath Academy",
      industry: "Education",
      metric: "180",
      metricLabel: "new admissions via local search",
      quote: "We had a Google Business Profile but it was barely touched. WayFind optimised it and we started getting 20+ calls a week from it.",
      author: "Principal Hassan, BrightPath",
    },
    tiers: [
      {
        name: "Setup",
        price: "PKR 15,000",
        description: "One-time full optimisation.",
        features: [
          "Profile claim & verification",
          "Full information setup",
          "10 photos uploaded",
          "Business description",
          "Category optimisation",
          "Initial Q&A setup",
        ],
      },
      {
        name: "Starter Management",
        price: "PKR 8,000/mo",
        description: "Basic ongoing management.",
        features: [
          "2 posts per month",
          "Review monitoring & responses",
          "Photo updates",
          "Monthly insights report",
        ],
      },
      {
        name: "Growth Management",
        price: "PKR 15,000/mo",
        description: "Active growth management.",
        features: [
          "4 posts per month",
          "Review generation strategy",
          "All reviews responded to",
          "Q&A management",
          "Competitor monitoring",
          "Monthly report + call",
        ],
        highlighted: true,
      },
    ],
    faqs: [
      {
        q: "I already have a Google Business Profile. Can you take it over?",
        a: "Yes. We audit what's there, add you as an owner and take full management from that point.",
      },
      {
        q: "What if my business has multiple locations?",
        a: "We can manage multiple profiles. Pricing is per-location with discounts for 3+ locations.",
      },
      {
        q: "How important are reviews?",
        a: "Extremely. 93% of consumers read reviews before visiting a local business. We help you get more of them and respond professionally to all.",
      },
      {
        q: "Can I do the setup myself and just pay for management?",
        a: "Yes. If you've done a solid setup already, we can go straight to monthly management.",
      },
    ],
  },
};
