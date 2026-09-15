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
export const SUBMIT_ENDPOINT = 'https://services.leadconnectorhq.com/hooks/vB2xTTdlUokjHQ3J53Ju/webhook-trigger/e4ZPPfWMpd63d6a6mfg7';

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
  eyebrow: "GUILD ACADEMY · MEMBERSHIP",
  title: 'Everything Included at $30/Month',
  subtitle:
    'Daily market analysis, live AGTS & MTS signals, and a structured technical analysis course — one membership, full access.',
  stats: [
    { label: 'MONTHLY MEMBERSHIP', value: '$30' },
    { label: 'DAILY SIGNALS', value: '10–20' },
  ],
  accessTitle: 'WHAT YOU GET ACCESS TO',
  accessItems: [
    'Daily Market Analysis',
    'Deep Dives',
    'FX & Commodities: Daily Updates',
    'AGTS & MTS Signals (10–20 Daily)',
    'Trading Technical Analysis Course',
  ],
  itemsTitle: 'TRACK RECORD',
  items: [
    'Verified track-record with institutional trade documentation',
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

/* AGTS performance figures — shown as an animated stat strip below the hero. */
export const trackRecord = {
  eyebrow: 'AGTS',
  stats: [
    { label: 'This Year', value: 53, decimals: 0, suffix: '%' },
    { label: 'Win Rate', value: 83, decimals: 0, suffix: '%' },
    { label: 'Avg. Monthly Return', value: 19.09, decimals: 2, suffix: '%' },
  ],
  highlightIndex: 1,
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

export const faq = {
  eyebrow: 'FAQ',
  title: 'Common questions.',
  items: [
    {
      q: 'I’m completely new to trading. Is Guild Academy suitable for me?',
      a: 'Yes. You can start without previous trading experience. Our structured education introduces the basics of reading charts, understanding trade setups and managing risk. You can build your knowledge at your own pace before deciding whether to trade with real money.',
    },
    {
      q: 'What do I get for $30 per month?',
      a: 'Your membership includes structured trading education, daily forex and commodities analysis, trading signals, deeper market breakdowns and access to our private member channels. You’ll also receive onboarding support and access to live sessions or replays when scheduled. Membership is billed monthly.',
    },
    {
      q: 'How do the trading signals work, and how many will I receive?',
      a: 'We typically share 10–20 signals on a trading day, depending on market conditions. Signals include entry, stop-loss and target levels, with context to help you understand the setup. Our education helps you interpret these signals and understand the risk involved.',
    },
    {
      q: 'Where do I access the content and signals?',
      a: 'Once your membership is activated, we’ll guide you into the member area and private Telegram channels. Our onboarding bot helps connect your Telegram account to your membership so you can access the relevant content and updates.',
    },
    {
      q: 'Do I need a broker account or trading deposit to join?',
      a: 'No. You can join the education membership and start learning without opening or funding a trading account. If you later decide to trade or explore copy trading, a separate broker account, trading funds and additional requirements may apply.',
    },
    {
      q: 'Is copy trading included in my membership?',
      a: 'Membership gives you access to information and onboarding support for available copy-trading options. Activation is separate and depends on availability, eligibility and the requirements of the relevant provider. A broker account, trading deposit and separate fees may be required, which our team will explain before you proceed.',
    },
    {
      q: 'Can I cancel my membership?',
      a: 'Yes. Membership runs monthly. Cancel before your next renewal to stop future subscription charges, and you’ll retain access until the end of your current paid billing period. If you need help, contact [help@guildacademy.info](mailto:help@guildacademy.info).',
    },
    {
      q: 'What happens after I submit the form?',
      a: 'A member of our team will contact you to answer your questions, explain the membership and guide you through joining. Submitting the form is an enquiry—it does not activate a paid subscription or charge you.',
    },
    {
      q: 'Is Guild Academy a broker?',
      a: 'Guild Academy is a trading education platform based in Dubai. We provide learning resources, market analysis and signals. Any brokerage or copy-trading arrangement has its own account setup, terms and requirements, separate from your academy membership.',
    },
    {
      q: 'Are trading results guaranteed?',
      a: 'No. Education and signals can help you develop your understanding and decision-making, but trading involves risk and losses are possible. Previous performance does not guarantee future results. Managing risk is a core part of what we teach.',
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
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/guild.academy.official?stkn=MTU2M21pdDA2emNyeA==' },
    { label: 'Facebook', href: 'https://www.facebook.com/guild.academy.official' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@guild.academy.official' },
  ],
};
