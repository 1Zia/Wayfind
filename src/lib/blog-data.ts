export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string; // ISO
  readTime: number; // minutes
  featured?: boolean;
  content: string; // HTML string
};

export const ARTICLES: Article[] = [
  {
    slug: "why-pakistani-business-needs-website-2025",
    title: "Why Every Pakistani Business Needs a Website in 2025",
    excerpt:
      "90% of Pakistanis research businesses online before visiting. If you don't have a website, you're invisible to your best potential customers. Here's what you're missing.",
    category: "Strategy",
    author: "Bilal Ahmed",
    authorRole: "Founder, WayFind Technologies",
    date: "2025-04-15",
    readTime: 7,
    featured: true,
    content: `
      <h2>The shift has already happened</h2>
      <p>In 2020, a Pakistani business could survive on word-of-mouth and WhatsApp referrals. In 2025, that's no longer enough. Internet penetration in Pakistan crossed 60% last year. Smartphone usage is at an all-time high. And the first thing most people do when they hear about a business? They Google it.</p>
      <p>If they can't find you, they find your competitor instead.</p>

      <h2>What your customers are doing right now</h2>
      <p>Right now, someone in your city is searching for exactly what you offer. "Best clinic in Islamabad." "Gym near me." "Website designer Pakistan." If your business doesn't appear in those results, that customer goes to whoever does.</p>
      <p>Google processes 8.5 billion searches per day. Pakistani search volume has grown 40% year-on-year. The opportunity is enormous — but only for businesses that show up.</p>

      <h2>A website isn't just a brochure</h2>
      <p>The old thinking was "I just need a website so people can find my address." That's outdated. A modern business website is your best salesperson. It works 24/7, never takes a day off, answers customer questions automatically and converts visitors into bookings or enquiries while you sleep.</p>
      <p>For a clinic, that means online appointment booking. For a restaurant, online reservations and menu visibility. For a school, an admissions form that captures leads automatically. For a retailer, an e-commerce store that sells nationally.</p>

      <h2>The cost of not having one</h2>
      <p>One of our clients — a gym owner in Islamabad — was sceptical about investing in a website. "I already have 100 members," he told us. Three months after launch, he had 230 members and a waiting list. The website (plus Meta ads and an AI membership bot) generated PKR 2.4M in new memberships in the first month alone.</p>
      <p>The cost of the website? PKR 90,000. The return? More than 26×.</p>

      <h2>What makes a good business website in 2025</h2>
      <p>Not all websites are equal. A website that loads slowly, looks amateur or doesn't have clear calls-to-action will hurt you more than help you. Here's what matters:</p>
      <ul>
        <li><strong>Speed:</strong> Google penalises slow websites. Aim for a score of 90+ on PageSpeed Insights.</li>
        <li><strong>Mobile-first:</strong> 78% of Pakistani internet users are on mobile. Your website must work perfectly on a phone.</li>
        <li><strong>Clear CTA:</strong> Every page should have one clear action you want visitors to take.</li>
        <li><strong>Trust signals:</strong> Reviews, credentials, photos of your team and premises.</li>
        <li><strong>SEO basics:</strong> Proper titles, meta descriptions, and local keywords.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>A professional website is the foundation of every other digital marketing activity. Google Ads? You need a landing page. SEO? You need a website to optimise. Social media? You need somewhere to direct traffic. Without a website, everything else is much harder and much less effective.</p>
      <p>If you don't have a website, or if your current one is outdated, 2025 is the year to fix it. Your competitors already are.</p>
    `,
  },
  {
    slug: "ai-chatbots-saving-pakistani-businesses-40-hours",
    title: "How AI Chatbots Are Saving Pakistani Businesses 40 Hours a Week",
    excerpt:
      "Handling DMs, answering FAQs, booking appointments — it adds up. AI chatbots are now doing all of this automatically, 24/7, at a fraction of the cost of a human.",
    category: "AI & Automation",
    author: "Fatima Khan",
    authorRole: "AI & Automation Lead, WayFind",
    date: "2025-03-28",
    readTime: 8,
    content: `
      <h2>The hidden time drain</h2>
      <p>Ask any Pakistani business owner how much time they spend answering the same questions every week. "What are your prices?" "Are you open on Sunday?" "Do you offer home service?" "How do I book an appointment?"</p>
      <p>For most businesses, this is 3–6 hours per day. Across a month, that's 60–120 hours of staff time spent answering repetitive questions that an AI can handle in milliseconds.</p>

      <h2>What an AI chatbot actually does</h2>
      <p>A properly trained AI chatbot isn't just a FAQ bot. When we deploy AI for our clients, it can:</p>
      <ul>
        <li>Answer any question about the business (services, prices, hours, location)</li>
        <li>Book appointments directly into the calendar</li>
        <li>Qualify leads before passing them to a human</li>
        <li>Send follow-up reminders automatically</li>
        <li>Work across website, WhatsApp, Facebook and Instagram simultaneously</li>
      </ul>
      <p>And it does all of this at 3am on a Sunday, without ever getting tired or frustrated.</p>

      <h2>Real results from Pakistani businesses</h2>
      <p>Elite Fitness Hub, one of our clients, was losing leads because their team couldn't respond fast enough to DMs. We deployed an AI membership bot that responds to every inquiry within 5 seconds, qualifies the lead, and books a free trial — all without human involvement.</p>
      <p>Result: their lead response time went from hours to under 30 seconds. Membership sign-ups increased significantly. And two staff members who were spending half their day on DMs now focus on actual member experience.</p>

      <h2>The technology behind it</h2>
      <p>Modern AI chatbots use large language models (the same technology behind ChatGPT) but trained specifically on your business. They know your products, prices, policies and tone of voice. They can handle complex, multi-turn conversations and know when to escalate to a human.</p>
      <p>The training process takes 1–2 weeks. After that, the AI learns from every conversation, getting smarter over time.</p>

      <h2>What it costs vs. what it saves</h2>
      <p>Our AI integration packages start from PKR 60,000 — roughly equivalent to one month's salary for a junior staff member. But the AI works 24/7, handles unlimited conversations simultaneously and never quits.</p>
      <p>For most businesses, the ROI is visible within the first month.</p>

      <h2>Is it right for your business?</h2>
      <p>AI chatbots work best for businesses that:</p>
      <ul>
        <li>Receive a high volume of repetitive enquiries</li>
        <li>Offer appointment-based services</li>
        <li>Want to capture leads outside business hours</li>
        <li>Have a WhatsApp or social media presence</li>
      </ul>
      <p>That's most Pakistani service businesses. If you're spending more than 2 hours a day answering messages, an AI chatbot will pay for itself within weeks.</p>
    `,
  },
  {
    slug: "google-business-profile-free-tool-90-percent-ignore",
    title: "Google Business Profile: The Free Tool 90% of Businesses Ignore",
    excerpt:
      "The most powerful free marketing tool available to Pakistani businesses is sitting unclaimed. Here's exactly how to set it up and dominate local search.",
    category: "SEO",
    author: "Umar Farooq",
    authorRole: "SEO Director, WayFind",
    date: "2025-03-10",
    readTime: 6,
    content: `
      <h2>What is Google Business Profile?</h2>
      <p>When you search "restaurant near me" or "dentist Islamabad" and see those map results with photos, reviews and opening hours — that's Google Business Profile (GBP). It's free to set up and it's arguably the most impactful single action a local Pakistani business can take online.</p>
      <p>Yet most businesses either haven't claimed theirs, or set it up once and never touched it again.</p>

      <h2>Why it matters more than ever</h2>
      <p>53% of all Google searches have local intent. People aren't just searching — they're searching nearby. For service businesses (clinics, gyms, restaurants, workshops), the Google Maps results are often the first thing a potential customer sees.</p>
      <p>A fully optimised GBP with good reviews and recent posts will appear above businesses that have better websites but worse profiles. It levels the playing field.</p>

      <h2>How to set up yours properly</h2>
      <p>Here's the exact process we follow when setting up GBP for WayFind clients:</p>

      <h3>1. Claim and verify your listing</h3>
      <p>Go to business.google.com and search for your business. If it exists (Google often creates listings automatically), claim it. If not, create one. Verify via postcard, phone or email.</p>

      <h3>2. Complete every field</h3>
      <p>Business name, address, phone number, website, category, hours — fill them all in. The more complete your profile, the higher Google ranks it. Add secondary categories too.</p>

      <h3>3. Add 20+ high-quality photos</h3>
      <p>Businesses with photos receive 42% more requests for directions and 35% more website clicks. Add photos of your premises, team, products and services. Update them regularly.</p>

      <h3>4. Write a keyword-rich description</h3>
      <p>Your business description is an SEO opportunity. Include your main services, location and key differentiators naturally. Don't keyword stuff — write for humans first.</p>

      <h3>5. Get reviews systematically</h3>
      <p>Reviews are the single biggest ranking factor for local search. Create a simple process for asking happy customers to leave a review. A WhatsApp message with a direct link works well in Pakistan.</p>

      <h3>6. Post weekly</h3>
      <p>Google allows you to post updates, offers and events directly on your profile. Businesses that post regularly are favoured by Google's algorithm. One post per week is enough to see the benefit.</p>

      <h2>The results you can expect</h2>
      <p>One of our restaurant clients, Dastarkhan, had no GBP presence when we started working together. Within 8 weeks of full optimisation and a review strategy, they ranked #1 for 12 local keywords and monthly profile views went from near zero to over 4,000.</p>

      <h2>The bottom line</h2>
      <p>Google Business Profile is free. It takes a few hours to set up properly. And for local businesses, it's often the single highest-ROI marketing activity available. If you haven't done it yet, start today.</p>
    `,
  },
  {
    slug: "seo-vs-google-ads-which-right-for-your-business",
    title: "SEO vs Google Ads: Which Is Right for Your Business?",
    excerpt:
      "Both can get you to the top of Google — but they work differently, cost differently and suit different stages of business growth. Here's how to decide.",
    category: "Strategy",
    author: "Umar Farooq",
    authorRole: "SEO Director, WayFind",
    date: "2025-02-22",
    readTime: 9,
    content: `
      <h2>The fundamental difference</h2>
      <p>SEO (Search Engine Optimisation) and Google Ads both put your business at the top of Google — but through completely different mechanisms.</p>
      <p>Google Ads are paid. You pay per click, your ad appears immediately, and the moment you stop paying, you disappear. SEO is earned. It takes time and effort to build, but the traffic it generates is essentially free and doesn't disappear when you stop spending.</p>

      <h2>When Google Ads makes sense</h2>
      <p>Google Ads is the right choice when:</p>
      <ul>
        <li><strong>You need results fast.</strong> A new school launching enrollment needs students NOW, not in 6 months.</li>
        <li><strong>You have a high-value transaction.</strong> If each customer is worth PKR 50,000+, the maths of paid ads works easily.</li>
        <li><strong>You're in a market with clear buyer intent.</strong> "Buy kitchen in Islamabad" is a perfect Google Ads keyword.</li>
        <li><strong>You want to test a message.</strong> Ads let you test different value propositions quickly.</li>
      </ul>
      <p>The downside: it's expensive long-term. Our clients spend between PKR 30,000–150,000 per month on ad management fees alone, plus their ad spend budget. And when the budget stops, so does the traffic.</p>

      <h2>When SEO makes sense</h2>
      <p>SEO is the right choice when:</p>
      <ul>
        <li><strong>You're playing a long game.</strong> If you plan to be in business in 5 years, SEO is the most valuable long-term investment.</li>
        <li><strong>Your customers do research before buying.</strong> For professional services, healthcare and education, people research extensively. SEO captures them throughout that journey.</li>
        <li><strong>You want to reduce dependence on paid traffic.</strong> Organic traffic from SEO costs nothing per click.</li>
        <li><strong>You're in a competitive market.</strong> Strong SEO makes it expensive for competitors to outrank you.</li>
      </ul>
      <p>The downside: it takes time. Typically 6–10 weeks to see meaningful results, and 6–12 months to fully dominate your target keywords.</p>

      <h2>The smart answer: both, sequenced correctly</h2>
      <p>For most WayFind clients, we recommend starting with Google Ads for immediate results while building the SEO foundation in parallel. As organic rankings grow, we reduce ad spend, eventually shifting mostly or entirely to SEO.</p>
      <p>This gives you immediate traffic from day one and builds long-term equity simultaneously.</p>

      <h2>What it costs in Pakistan</h2>
      <p>Our SEO packages start at PKR 25,000 per month. Google Ads management from PKR 30,000 per month, plus whatever you choose to spend on the ads themselves (we typically recommend starting with PKR 30,000–50,000/month in ad budget).</p>
      <p>The ROI depends heavily on your industry and average transaction value. A clinic charging PKR 2,000 per consultation needs fewer conversions to justify the investment than a service charging PKR 5,000.</p>

      <h2>The quick guide</h2>
      <ul>
        <li>New business, need results in 30 days → Google Ads first</li>
        <li>Established business, playing long-term → SEO first</li>
        <li>High-value product/service → Google Ads + SEO together</li>
        <li>Limited budget → SEO, focus on Google Business Profile first</li>
      </ul>
      <p>Not sure? Book a free call and we'll look at your specific situation.</p>
    `,
  },
  {
    slug: "how-we-got-rawalpindi-gym-200-new-members-meta-ads",
    title: "How We Got a Rawalpindi Gym 200 New Members With Meta Ads",
    excerpt:
      "A step-by-step breakdown of the exact Meta Ads strategy that generated 200+ new gym memberships in 90 days — and how it applies to your business.",
    category: "Case Study",
    author: "Aisha Raza",
    authorRole: "Performance Marketing, WayFind",
    date: "2025-02-05",
    readTime: 10,
    content: `
      <h2>The challenge</h2>
      <p>PowerHouse Gym, a mid-size gym in Rawalpindi, came to us with a familiar problem: they were running Meta ads but getting almost no results. They were spending PKR 40,000/month and getting maybe 10–15 sign-ups. Their cost per member was over PKR 2,600. They were frustrated and considering stopping ads entirely.</p>
      <p>Within 90 days, we had reduced their cost per member to PKR 380 and delivered 200+ new memberships.</p>

      <h2>What was wrong with their original ads</h2>
      <p>When we audited their existing campaigns, we found every common mistake:</p>
      <ul>
        <li>A single ad set targeting "Rawalpindi" with no demographic refinement</li>
        <li>One creative — a static image of the gym equipment</li>
        <li>The ad pointed to their homepage (not a dedicated landing page)</li>
        <li>No retargeting setup</li>
        <li>No follow-up automation for leads</li>
      </ul>

      <h2>The strategy we built</h2>

      <h3>Step 1: Audience segmentation</h3>
      <p>We created three distinct audiences. Top of funnel: broad targeting with interest-based audiences (fitness, health, weight loss) limited to a 5km radius of the gym. Middle of funnel: website visitors and video viewers from the first 30 days. Bottom of funnel: people who had clicked but not signed up, and lookalike audiences based on current members.</p>

      <h3>Step 2: Creative testing</h3>
      <p>We produced 12 different ad creatives in the first two weeks. Short videos of classes in action. Before/after member stories. A "free week pass" offer. Testimonial clips. We ran all 12 simultaneously and let the data determine winners. Within two weeks, we had 3 clear winners and paused the rest.</p>

      <h3>Step 3: Landing page</h3>
      <p>We built a dedicated landing page for the free week pass offer. It had one focus: get the visitor to submit their phone number. No navigation, no distractions, just social proof, the offer and a form. Conversion rate was 34% — more than 4× their previous homepage.</p>

      <h3>Step 4: Instant follow-up automation</h3>
      <p>Every lead who submitted the form received an immediate WhatsApp message from an AI bot confirming their free pass and asking when they'd like to come in. Leads who didn't respond within 24 hours got a follow-up. A second follow-up at 72 hours. The AI handled all of this automatically.</p>

      <h3>Step 5: Retargeting</h3>
      <p>Anyone who visited the landing page but didn't convert was added to a retargeting audience and shown different creative — this time, member testimonials and transformation stories. Retargeting campaigns have a much higher conversion rate than cold audiences.</p>

      <h2>The results after 90 days</h2>
      <ul>
        <li>200+ new memberships</li>
        <li>Cost per lead: PKR 85 (down from PKR 380)</li>
        <li>Cost per member: PKR 380 (down from PKR 2,600+)</li>
        <li>ROAS: 6.2× (every PKR 1 spent in ads returned PKR 6.20)</li>
      </ul>

      <h2>What this means for your business</h2>
      <p>The same framework — audience segmentation, creative testing, dedicated landing pages, instant follow-up, retargeting — applies to any business running Meta ads. The specific details change, but the principles don't.</p>
      <p>If your current Meta ads aren't working, it's almost certainly not because the platform doesn't work for your business. It's because the strategy needs rethinking.</p>
    `,
  },
  {
    slug: "complete-guide-crm-small-business-pakistan",
    title: "The Complete Guide to CRM for Small Business Pakistan",
    excerpt:
      "What is a CRM, do you actually need one, and how do you pick the right one for a Pakistani business? Everything you need to know in one guide.",
    category: "CRM",
    author: "Hassan Ali",
    authorRole: "Lead Developer, WayFind",
    date: "2025-01-20",
    readTime: 11,
    content: `
      <h2>What is a CRM, actually?</h2>
      <p>CRM stands for Customer Relationship Management. In plain terms, it's a system that keeps track of every interaction between your business and your customers or prospects. Every enquiry, every call, every WhatsApp message, every sale — organised in one place, accessible to your whole team.</p>
      <p>Without a CRM, most Pakistani businesses manage their customer relationships across WhatsApp, notebooks, spreadsheets and someone's memory. That works until it doesn't — until a lead falls through the cracks, a follow-up is forgotten, or a key staff member leaves and takes all the context with them.</p>

      <h2>Do you actually need one?</h2>
      <p>If you answer yes to any of these questions, you probably do:</p>
      <ul>
        <li>Do you receive more than 5 new enquiries per week?</li>
        <li>Is your sales cycle longer than one day?</li>
        <li>Do you have more than 2 people handling customer communications?</li>
        <li>Have you ever lost a lead because someone forgot to follow up?</li>
        <li>Do you want to know which marketing channels are generating your best customers?</li>
      </ul>

      <h2>What a good CRM does for a Pakistani business</h2>

      <h3>Captures every lead automatically</h3>
      <p>When someone fills in your website form, sends a WhatsApp, DMs on Instagram or calls — a good CRM captures that automatically and creates a contact. Nothing falls through the cracks.</p>

      <h3>Automates follow-up</h3>
      <p>You set the sequence once: "If a lead doesn't respond in 24 hours, send this WhatsApp message. If still no response after 72 hours, send this one." The CRM does it automatically, every time, without anyone having to remember.</p>

      <h3>Shows you your pipeline</h3>
      <p>At any moment, you can see exactly how many leads you have, where they are in your sales process and which ones need attention. No more "I think we have about 20 live leads" — you know exactly.</p>

      <h3>Tracks what's working</h3>
      <p>Which marketing channel generates your best customers? Google Ads? WhatsApp referrals? Instagram? A CRM tells you, so you can invest more in what works.</p>

      <h2>Which CRM for a Pakistani business?</h2>
      <p>We recommend different tools depending on the business:</p>
      <ul>
        <li><strong>GoHighLevel:</strong> Our top recommendation for service businesses. Includes website, landing pages, email, SMS, WhatsApp and pipeline management. PKR 15,000–20,000/month.</li>
        <li><strong>HubSpot Free:</strong> Good starting point for businesses just beginning to systematise. Free forever but limited automation.</li>
        <li><strong>Custom CRM:</strong> For businesses with specific workflows that off-the-shelf tools can't handle. We build these from scratch.</li>
      </ul>

      <h2>The WhatsApp integration question</h2>
      <p>WhatsApp is how Pakistani customers communicate. Any CRM you choose needs proper WhatsApp integration. GoHighLevel has this built-in. Others require a third-party bridge. This is non-negotiable for the Pakistani market.</p>

      <h2>Implementation: what to expect</h2>
      <p>A basic CRM setup takes 2–3 weeks: connecting your lead sources, setting up your pipeline stages, configuring automation sequences, training your team. A complex multi-service CRM can take 4–6 weeks.</p>
      <p>The key is getting team buy-in. A CRM only works if everyone uses it consistently. Spend as much time on training and adoption as you do on the technical setup.</p>

      <h2>ROI: what our clients see</h2>
      <p>The most consistent result we see is a 30–50% increase in lead conversion rate. When you follow up faster and more consistently — which automation guarantees — more leads convert. For most businesses, this alone justifies the entire CRM investment within 60–90 days.</p>
    `,
  },
];

export const CATEGORIES = [
  "All",
  ...Array.from(new Set(ARTICLES.map((a) => a.category))),
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug) ?? null;
}

export function getRelatedArticles(slug: string, count = 3) {
  const article = getArticle(slug);
  if (!article) return [];
  return ARTICLES.filter(
    (a) => a.slug !== slug && a.category === article.category
  )
    .slice(0, count)
    .concat(
      ARTICLES.filter(
        (a) => a.slug !== slug && a.category !== article.category
      ).slice(0, Math.max(0, count - 2))
    )
    .slice(0, count);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function relativeDate(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}
