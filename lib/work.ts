// Case studies for the Our Work section. Each one becomes a page at /work/[slug].
// Real projects and true claims only: screenshots are taken from the live site.

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  tag: string;
  title: string;
  summary: string;
  url: string;
  domain: string;
  card: string;
  location: string;
  services: string[];
  brief: string[];
  // Section headings differ per client, so the template never borrows another client's words.
  headings: { brief: string; screens: string; mobile: string; mobileIntro: string };
  // Optional overrides for projects that aren't websites. Defaults suit a client website.
  briefLabel?: string;
  cta?: string;
  contact?: { heading: string; intro: string; need?: string };
  built: { title: string; copy: string }[];
  desktop: Screenshot[];
  mobile: Screenshot[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "stacc",
    client: "STACC Sessions",
    tag: "Live music nights · Dundee",
    title: "A website that sells out live music nights.",
    summary:
      "A bold, poster-style website for STACC's live music nights in Dundee and St Andrews, with ticket sales built right into the homepage.",
    url: "https://staccsessions.com",
    domain: "staccsessions.com",
    card: "/work/stacc/card.webp",
    location: "Dundee and St Andrews, Scotland",
    services: ["Website design", "Ticket sales", "Hosting and changes"],
    brief: [
      "STACC puts on small, curated live music nights. It started in student bars in St Andrews and has grown into Dundee, with plans to go further.",
      "They needed one place that does it all: sells tickets, shows off past nights, finds new artists and helps them grow the team. And it had to look like a STACC night, not a template.",
    ],
    headings: {
      brief: "What STACC needed.",
      screens: "Every section has a job.",
      mobile: "Made for the phone in your pocket.",
      mobileIntro:
        "Most people find a night and buy a ticket on their phone, so every section works just as well on a small screen.",
    },
    built: [
      {
        title: "A design that feels like the nights",
        copy: "Black, cream and STACC yellow, big poster-style headlines and real photos from past nights. It looks like a gig flyer, because that's what it's selling.",
      },
      {
        title: "Tickets on the homepage",
        copy: "The ticket box checks what's on sale, shows how many tickets are left, and takes student codes. Tickets arrive by email with a QR code for the door.",
      },
      {
        title: "Handles the rush",
        copy: "When lots of people buy at once, buyers join a queue and their tickets are held while they pay. Nobody loses out halfway through checkout.",
      },
      {
        title: "Useful between nights",
        copy: "When nothing's on sale, the page sends people to STACC's WhatsApp group, so they hear about the next date first.",
      },
      {
        title: "A way in for artists",
        copy: "A clear \"Want to play?\" section tells artists, DJs and bands exactly what to send. No press kit needed.",
      },
      {
        title: "Room to grow",
        copy: "A full job listing for STACC's student creative role, and answers to the questions people ask before a night: ID, refunds and lost tickets.",
      },
    ],
    desktop: [
      {
        src: "/work/stacc/desktop-hero.webp",
        alt: "STACC Sessions homepage with the headline \"Live music, for the North\" beside a black and white photo of a performer",
        caption: "The homepage opens like a gig poster, with tickets one click away.",
      },
      {
        src: "/work/stacc/desktop-tickets.webp",
        alt: "STACC next night section with event details and a ticket box pointing to the WhatsApp group",
        caption: "The ticket box checks what's on sale. Between nights, it points people to WhatsApp.",
      },
      {
        src: "/work/stacc/desktop-photos.webp",
        alt: "STACC photo gallery titled \"Shot on the night\" showing crowds and performers",
        caption: "A gallery of real photos from past nights.",
      },
      {
        src: "/work/stacc/desktop-play.webp",
        alt: "STACC section titled \"Want to play a STACC night?\" with a photo of a rapper performing",
        caption: "Artists know exactly what to send to get booked.",
      },
      {
        src: "/work/stacc/desktop-hiring.webp",
        alt: "STACC hiring section on a yellow background for a Student Creative Collaborator role",
        caption: "A full job listing, so STACC can grow the team from its own site.",
      },
      {
        src: "/work/stacc/desktop-faq.webp",
        alt: "STACC frequently asked questions titled \"Before you come\"",
        caption: "Answers to the questions people ask before a night.",
      },
    ],
    mobile: [
      {
        src: "/work/stacc/mobile-hero.webp",
        alt: "STACC homepage on a phone",
        caption: "Homepage",
      },
      {
        src: "/work/stacc/mobile-tickets.webp",
        alt: "STACC ticket section on a phone",
        caption: "Tickets",
      },
      {
        src: "/work/stacc/mobile-photos.webp",
        alt: "STACC photo gallery on a phone",
        caption: "Photos",
      },
      {
        src: "/work/stacc/mobile-play.webp",
        alt: "STACC artist section on a phone",
        caption: "Play at STACC",
      },
    ],
  },
  {
    slug: "hempteach",
    client: "hempTEACH",
    tag: "Online tutoring · KS3 & KS4",
    title: "A tutoring website that turns parents into sign-ups.",
    summary:
      "A bright, friendly website for a family-run online tutoring company, where parents can see the subjects, compare prices and sign up in one place.",
    url: "https://www.hempteach.co.uk",
    domain: "hempteach.co.uk",
    card: "/work/hempteach/card.webp",
    location: "Online, across the UK",
    services: ["Website design", "Online sign-up and payments", "Hosting and changes"],
    brief: [
      "hempTEACH is a family-run tutoring company. Two qualified teachers run live online classes in English, Maths and Science for KS3 and KS4, plus weekly wellbeing sessions.",
      "Most of their families home educate, and many come to them after a hard time at school. The site needed to feel warm and fun, answer parents' questions, and make signing up easy.",
    ],
    headings: {
      brief: "What hempTEACH needed.",
      screens: "Built around what parents ask.",
      mobile: "Easy to read on any phone.",
      mobileIntro:
        "Plenty of parents look for a tutor on their phone, so the subjects, prices and reviews are just as clear on a small screen.",
    },
    built: [
      {
        title: "Fun, not stuffy",
        copy: "A dark background covered in hand-drawn science and maths doodles, with bright purple and lime buttons. It feels like their lessons: lively, not like a school prospectus.",
      },
      {
        title: "Meet the teachers",
        copy: "The mission section puts Mr and Mrs Hempkin front and centre, so parents know exactly who'll be teaching their child.",
      },
      {
        title: "Prices you can compare",
        copy: "Clear monthly prices for one, two or three subjects, with a switch between Key Stage 3 and Key Stage 4. No \"call us for a quote\".",
      },
      {
        title: "Sign up and pay online",
        copy: "Parents can send an enquiry, or use Quick Signup to pay securely by card straight from the pricing table.",
      },
      {
        title: "Parents doing the talking",
        copy: "A slider of real reviews from parents, because other families' words do more than anything a business says about itself.",
      },
      {
        title: "Everything in one place",
        copy: "Subjects, term dates, the timetable, FAQs, their charity partnership and their sponsorship of a local youth football team.",
      },
    ],
    desktop: [
      {
        src: "/work/hempteach/desktop-hero.webp",
        alt: "hempTEACH homepage with the headline \"Excellence in Science, Maths & English Tutoring\" over hand-drawn science doodles",
        caption: "The homepage, with two clear next steps: explore the subjects or join.",
      },
      {
        src: "/work/hempteach/desktop-pricing.webp",
        alt: "hempTEACH tutoring packages table with monthly prices for Key Stage 3",
        caption: "Monthly prices side by side, with a switch between Key Stage 3 and 4.",
      },
      {
        src: "/work/hempteach/desktop-about.webp",
        alt: "hempTEACH mission section with a photo of the two teachers",
        caption: "Parents meet the teachers before they sign up.",
      },
      {
        src: "/work/hempteach/desktop-subjects.webp",
        alt: "hempTEACH subjects section with cards for English, Mathematics, Science and Wellbeing",
        caption: "One card per subject, each leading to the prices.",
      },
      {
        src: "/work/hempteach/desktop-testimonials.webp",
        alt: "hempTEACH student success stories slider with reviews from parents",
        caption: "Real reviews from parents, in a slider.",
      },
      {
        src: "/work/hempteach/desktop-charity.webp",
        alt: "hempTEACH section about its partnership with the Bemorefab children's cancer charity",
        caption: "Room to share what they're proud of, like their charity partnership.",
      },
    ],
    mobile: [
      {
        src: "/work/hempteach/mobile-hero.webp",
        alt: "hempTEACH homepage on a phone",
        caption: "Homepage",
      },
      {
        src: "/work/hempteach/mobile-subjects.webp",
        alt: "hempTEACH subjects on a phone",
        caption: "Subjects",
      },
      {
        src: "/work/hempteach/mobile-pricing.webp",
        alt: "hempTEACH pricing on a phone",
        caption: "Prices",
      },
      {
        src: "/work/hempteach/mobile-testimonials.webp",
        alt: "hempTEACH parent reviews on a phone",
        caption: "Reviews",
      },
    ],
  },
  {
    slug: "djstevedee",
    client: "DJ Steve Dee",
    tag: "Events DJ · Letchworth",
    title: "A DJ website that books more parties.",
    summary:
      "A bold website for a wedding and events DJ with over 25 years' experience, built to show off his setup and turn visitors into quote requests.",
    url: "https://www.djstevedee.co.uk",
    domain: "djstevedee.co.uk",
    card: "/work/djstevedee/card.webp",
    location: "Hertfordshire, Bedfordshire and North London",
    services: ["Website design", "Quote request form", "Hosting and changes"],
    brief: [
      "Steve has been DJing for over 25 years, from London's top hotels to weddings, proms and children's parties across Hertfordshire, Bedfordshire and North London.",
      "His setup and his reviews speak for themselves. He needed a website that shows them off and makes it easy for people planning an event to ask for a quote.",
    ],
    headings: {
      brief: "What Steve needed.",
      screens: "Made to win bookings.",
      mobile: "Looks the part on a phone.",
      mobileIntro: "The homepage and the wedding slideshow look just as good on a phone as they do on a big screen.",
    },
    built: [
      {
        title: "A packed dance floor, front and centre",
        copy: "The homepage opens on a packed dance floor at one of Steve's events, so you can picture your own night straight away.",
      },
      {
        title: "A page for weddings",
        copy: "His favourite events get their own page, with a slideshow of real wedding photos and reviews from couples.",
      },
      {
        title: "A gallery of real nights",
        copy: "Photos from recent events, sorted into weddings, parties and DJ setups. Tap any photo to see it full size.",
      },
      {
        title: "Quotes with the right details",
        copy: "The quote form asks for the event type, date, location, guest numbers and times, so Steve has everything he needs to give a price.",
      },
      {
        title: "Every kind of event",
        copy: "Weddings, proms, children's parties, corporate events and more, listed clearly so people know Steve does their kind of night.",
      },
      {
        title: "Easy to get hold of",
        copy: "Phone and email in the header on every page, plus a WhatsApp button for people who'd rather message.",
      },
    ],
    desktop: [
      {
        src: "/work/djstevedee/desktop-hero.webp",
        alt: "DJ Steve Dee homepage with a packed marquee dance floor behind the headline",
        caption: "The homepage opens on a packed dance floor and a big \"Get a free quote\" button.",
      },
      {
        src: "/work/djstevedee/desktop-gallery.webp",
        alt: "DJ Steve Dee gallery with filters for weddings, parties and DJ setups above a grid of event photos",
        caption: "A gallery of photos from real events, sorted by type.",
      },
      {
        src: "/work/djstevedee/desktop-shows.webp",
        alt: "DJ Steve Dee \"The Pro DJ Show\" page with his lit-up DJ booth behind the headline",
        caption: "A page for the full professional DJ show.",
      },
      {
        src: "/work/djstevedee/desktop-about.webp",
        alt: "DJ Steve Dee homepage section \"A full dance floor, start to finish\" next to a photo of his all-white setup",
        caption: "Steve's 25 years of experience, next to his all-white setup.",
      },
      {
        src: "/work/djstevedee/desktop-contact.webp",
        alt: "DJ Steve Dee quote request form next to his phone, email and a WhatsApp button",
        caption: "A quote form that asks for everything Steve needs to give a price.",
      },
    ],
    mobile: [
      {
        src: "/work/djstevedee/mobile-hero.webp",
        alt: "DJ Steve Dee homepage on a phone",
        caption: "Homepage",
      },
      {
        src: "/work/djstevedee/mobile-weddings.webp",
        alt: "DJ Steve Dee weddings page on a phone",
        caption: "Weddings",
      },
    ],
  },
  {
    slug: "eventtickets",
    client: "EventTickets",
    tag: "Custom software · Ticketing platform",
    title: "A ticketing platform built for sell-out nights.",
    summary:
      "A full ticketing platform for promoters, club nights, societies and venues, with branded checkout, a queue for busy on-sales, wallet tickets and a door app.",
    url: "https://www.eventtickets.dev",
    domain: "eventtickets.dev",
    card: "/work/eventtickets/card.webp",
    location: "Online, across the UK",
    services: ["Custom software", "Online payments", "Hosting and support"],
    brief: [
      "Small promoters and student nights sell out fast. A new date lands in a group chat, everyone taps the link at once, and an ordinary ticket page can crash or sell the same ticket twice.",
      "Most ticket sites also put their own name first and show buyers other people's events. EventTickets keeps the organiser's name on every ticket, holds up when a night sells out, and makes the door simple.",
      "It's already in use. STACC Sessions run every ticket, queue and door scan for their nights through it.",
    ],
    headings: {
      brief: "What it had to solve.",
      screens: "Every part of the night, covered.",
      mobile: "Tickets that live on your phone.",
      mobileIntro:
        "Buyers keep their tickets on their phone and door staff scan from theirs, so it all works just as well on a small screen.",
    },
    briefLabel: "The problem",
    cta: "Get a fixed quote",
    contact: {
      heading: "Got an idea for an app?",
      intro:
        "Tell me what you want it to do. I'll come back with a fixed price and a plain-English plan before any work starts.",
      need: "App or custom software",
    },
    built: [
      {
        title: "The organiser's brand, not ours",
        copy: "Checkout, emails and wallet passes all carry the organiser's logo and colours. The platform's name only appears in the small print.",
      },
      {
        title: "A queue for the drop",
        copy: "When everyone taps at once, buyers join a line in the order they arrived. Tickets are held while they pay, and nothing sells twice.",
      },
      {
        title: "Prices that move on their own",
        copy: "Early bird, general and final release tiers, with the next price taking over when one sells out. Discount codes cover student rates.",
      },
      {
        title: "A door app anyone can use",
        copy: "Door staff open a link, type a PIN and start scanning. Duplicates are refused, even when two phones scan the same ticket at once.",
      },
      {
        title: "Apple and Google Wallet",
        copy: "Tickets go straight into buyers' wallets. Change the time or venue and every pass already on a phone updates too.",
      },
      {
        title: "An API for developers",
        copy: "Organisers with their own website can keep it. One call hands the buyer over for stock, payment and entry.",
      },
    ],
    desktop: [
      {
        src: "/work/eventtickets/desktop-hero.webp",
        alt: "EventTickets homepage with the headline \"Ticketing that stays yours\" beside a STACC Sessions ticket",
        caption: "The homepage, showing a real ticket in the organiser's own colours.",
      },
      {
        src: "/work/eventtickets/desktop-brand.webp",
        alt: "EventTickets section titled \"Your name on every ticket\" with three differently branded wallet passes",
        caption: "Three organisers, three brands, one platform behind them.",
      },
      {
        src: "/work/eventtickets/desktop-queue.webp",
        alt: "EventTickets queue section showing a place in line and ticket tiers",
        caption: "The on-sale queue: buyers wait their turn and their tickets are held while they pay.",
      },
      {
        src: "/work/eventtickets/desktop-door.webp",
        alt: "EventTickets door app with a PIN entry and admitted, already scanned and refunded results",
        caption: "The door app: type a PIN and start scanning.",
      },
      {
        src: "/work/eventtickets/desktop-dashboard.webp",
        alt: "EventTickets dashboard features list beside an API code example",
        caption: "One dashboard for organisers, and an API for developers.",
      },
    ],
    mobile: [
      {
        src: "/work/eventtickets/mobile-hero.webp",
        alt: "EventTickets homepage on a phone",
        caption: "Homepage",
      },
      {
        src: "/work/eventtickets/mobile-queue.webp",
        alt: "EventTickets on-sale queue on a phone",
        caption: "Queue",
      },
      {
        src: "/work/eventtickets/mobile-door.webp",
        alt: "EventTickets door app on a phone",
        caption: "Door app",
      },
      {
        src: "/work/eventtickets/mobile-app.webp",
        alt: "EventTickets branded apps section on a phone",
        caption: "Branded apps",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
