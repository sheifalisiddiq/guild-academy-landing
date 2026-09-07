/* ==========================================================================
   GUILD Academy — all page copy and configuration.

   This is the only file that needs editing to change what the page says.
   Anything marked PLACEHOLDER or DEMO must be replaced before launch.
   ========================================================================== */

/* --- Form submission ------------------------------------------------------
   Demo mode: the form validates, shows a submitting state and navigates to
   the thank-you page WITHOUT sending anything anywhere.

   To go live: paste the GoHighLevel inbound-webhook URL into SUBMIT_ENDPOINT.
   LeadForm automatically switches from demo mode to a real POST as soon as
   this string is non-empty — no other change required.                      */
export const SUBMIT_ENDPOINT = '';

export const THANK_YOU_URL = './thank-you.html';

export const brand = {
  name: 'GUILD Academy',
  /* The 'G' monogram on its own — the full lockup's ACADEMY wordmark is
     illegible below ~140px, so small placements use the mark alone. */
  markGradient: './logo-g-gradient.png',
  markWhite: './logo-g-white.png',
  textLogoWhite: './logo-text-white.png',
};

export const nav = {
  cta: 'Get Started',
};

export const hero = {
  headline:
    'Join a global community built around education, daily signals and verified results for $30/month.',
  supporting:
    'Learn the skills, strategies, and market knowledge you need to trade with greater confidence and work toward building wealth through the financial markets.',
  cta: 'Get Started',
  scrollCue: 'Scroll',
};

export const video = {
  eyebrow: 'Watch the Video',
  title: 'See how GUILD Academy works.',
  src: './hero-video.mp4',
  poster: './hero-video-poster.webp',
  caption: 'A short introduction to the programme, the method, and the community.',
};

export const benefits = {
  eyebrow: "What You'll Get",
  title: 'Everything you need to start trading properly.',
  items: [
    '12,500+ five-star reviews across all student platforms',
    'Verified track-record with institutional trade documentation',
    'Founded in 2018 and built on years of live market experience',
    'Built for dedicated beginners, trusted by active experienced traders',
    'Daily live market execution sessions across Forex, Commodities & Indices',
    'Proprietary GUILD risk management framework & position sizing playbook',
  ],
  location: 'Licensed Academy Registered in Dubai, UAE',
  socialProof: {
    count: '39,000+',
    label: 'active members registered worldwide',
    avatars: [
      './avatars/avatar-1.jpg',
      './avatars/avatar-2.jpg',
      './avatars/avatar-3.jpg',
      './avatars/avatar-4.jpg',
      './avatars/avatar-5.jpg',
    ],
  },
  cta: 'Get Started Today',
};

export const whyGuild = {
  eyebrow: 'Why GUILD',
  statement: 'Markets reward preparation, not luck.',
  supporting:
    'GUILD Academy exists to close the distance between watching the markets and actually understanding them — with structured teaching, disciplined risk management, and a community that keeps you accountable long after the first lesson.',

  proof: [
    {
      label: 'Structured Curriculum',
      detail: 'A defined path from first chart to consistent process.',
    },
    {
      label: 'Live Market Sessions',
      detail: 'Real conditions, reviewed together as they happen.',
    },
    {
      label: 'Dubai-Based Community',
      detail: 'A network that extends well beyond the lessons.',
    },
  ],
};

export const testimonials = [
  {
    quote:
      'I stopped guessing. The structure gave me a process I could actually repeat, and the risk rules changed how I size every position.',
    name: 'Omar Al-Mansoor',
    role: 'Private Equity Analyst • Dubai',
    rating: 5,
  },
  {
    quote:
      'The community is the part I underestimated. Having veteran traders review your reasoning in real time is worth more than any single strategy.',
    name: 'Marcus Vance',
    role: 'Full-Time FX Trader • London',
    rating: 5,
  },
  {
    quote:
      'Clear teaching, zero hype. It treated trading like an institutional skill to be mastered rather than a shortcut to be sold.',
    name: 'Sarah Lindqvist',
    role: 'Systematic Trader • Stockholm',
    rating: 5,
  },
  {
    quote:
      'The live execution sessions alone paid for the entire programme. Watching how mentors manage risk during high volatility was a masterclass.',
    name: 'Tariq Haddad',
    role: 'Commodities Trader • Abu Dhabi',
    rating: 5,
  },
  {
    quote:
      'Before GUILD, I suffered from overtrading and blowing accounts. Their drawdown rules and psychological frameworks completely transformed my results.',
    name: 'Elena Rostova',
    role: 'Portfolio Manager • Dubai',
    rating: 5,
  },
  {
    quote:
      'From zero experience to taking disciplined, high-probability setups every week. The mentorship in Dubai is unmatched.',
    name: 'David Chen',
    role: 'Derivatives Trader • Singapore',
    rating: 5,
  },
];

export const howItWorks = {
  eyebrow: 'How It Works',
  title: 'Three steps to get started.',
  steps: [
    {
      title: 'Apply',
      body: 'Complete the short form so we understand your experience and your goals.',
    },
    {
      title: 'Speak With Us',
      body: 'A brief call to confirm the programme is the right fit and answer your questions.',
    },
    {
      title: 'Start Trading',
      body: 'Begin structured training and join the GUILD community.',
    },
  ],
};

/* DEMO copy — replace with the client's approved FAQ wording before launch. */
export const faq = {
  eyebrow: 'FAQ',
  title: 'Common questions.',
  items: [
    {
      q: 'How much does membership cost?',
      a: '$30 per month, billed monthly. One membership unlocks everything — no tiers, no upsells.',
    },
    {
      q: "What's included?",
      a: 'Daily market analysis, deep-dive breakdowns, daily FX & commodities updates, live AGTS & MTS trade signals, and the structured Trading Technical Analysis course.',
    },
    {
      q: 'How many signals do I get?',
      a: 'Between 10 and 20 AGTS & MTS signals on a typical trading day, posted live with entry, stop, and target context.',
    },
    {
      q: "I've never traded before — is this for me?",
      a: 'Yes. The technical-analysis course starts from first principles, and the daily sessions show the method applied in real market conditions.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Membership is month-to-month. Cancel whenever you like and keep access until the end of the current billing period.',
    },
    {
      q: 'Is GUILD Academy regulated?',
      a: 'GUILD Academy is a licensed academy registered in Dubai, UAE. It provides education only and does not offer financial advice — see the disclosure in the footer.',
    },
  ],
};

export const form = {
  eyebrow: 'Ready to Get Started?',
  title: 'Take the first step.',
  supporting:
    'Tell us where you are today. A member of the team will reach out to confirm your fit and walk you through the next steps.',
  submit: 'Get Started',
  submitting: 'Sending…',
  privacy: 'Your details stay private. No spam, no sharing with third parties.',
  experienceOptions: [
    'Complete beginner',
    'Some experience',
    'Actively trading',
  ],
  /* Dial codes offered by the phone field. Default is the UAE. */
  dialCodes: [
    { code: '+971', label: 'UAE +971' },
    { code: '+966', label: 'KSA +966' },
    { code: '+91', label: 'India +91' },
    { code: '+44', label: 'UK +44' },
    { code: '+1', label: 'US/CA +1' },
    { code: '+92', label: 'Pakistan +92' },
    { code: '+20', label: 'Egypt +20' },
    { code: '+234', label: 'Nigeria +234' },
  ],
};

export const thankYou = {
  headline: "You're In.",
  message:
    "Thanks — we've got your details. A member of the GUILD Academy team will reach out on WhatsApp within 24 hours to confirm your fit and walk you through the next steps.",
  primaryCta: 'Watch the Video',
  primaryHref: './index.html#video',
  secondaryCta: 'Message us on WhatsApp',
  /* PLACEHOLDER — replace with the real business WhatsApp number. */
  secondaryHref: 'https://wa.me/971000000000',
};

export const footer = {
  /* PLACEHOLDER — the client's compliance-approved wording goes here.
     Trading education brands should carry a risk disclosure.               */
  disclosure:
    'Trading involves risk. GUILD Academy provides education only and does not provide financial advice or guarantee results. Never trade with money you cannot afford to lose.',
  copyright: `© ${new Date().getFullYear()} GUILD Academy. All rights reserved.`,
  /* PLACEHOLDER — replace with the real profile URLs. */
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
};
