import type { Faq, PlanNeed } from "@/lib/site";

export type Industry = {
  slug: string;
  /** Plural label used in lists and links. */
  name: string;
  /** Page heading. */
  title: string;
  /** One-line hook used in the meta description. */
  hook: string;
  lead: string;
  problems: string[];
  features: { title: string; copy: string }[];
  /** Plan to highlight in the pricing section. */
  plan: PlanNeed;
  /** Index into `work` for a relevant real project, if there is one. */
  workIndex?: number;
  faqs: Faq[];
  related: string[];
};

export const industries: Industry[] = [
  {
    slug: "hair-and-beauty-salons",
    name: "Hair & beauty salons",
    title: "Websites for hair & beauty salons",
    hook: "Show off your work and let clients book themselves in, 24/7.",
    lead: "For hairdressers, nail techs, lash artists and beauty therapists. A website that shows off your work and lets clients book themselves in, day or night, so you can stop answering messages between appointments.",
    problems: [
      "Booking requests arrive by DM, text and phone, and you're replying at 11pm.",
      "Last-minute gaps and no-shows cost you money every week.",
      "New clients can't see your prices or your work without messaging you first.",
    ],
    features: [
      { title: "Online booking, 24/7", copy: "Clients pick a treatment and a time and book themselves in. You get a notification, they get a confirmation." },
      { title: "Your work, front and centre", copy: "A gallery of your best work, so new clients can see your style before they book." },
      { title: "Clear prices and treatments", copy: "A tidy price list that's easy to update whenever things change." },
      { title: "Found on Google", copy: "Set up to show up when people search for a salon in your town, linked to your Google Business Profile." },
    ],
    plan: "Website + bookings",
    faqs: [
      {
        q: "Can I still use Instagram to show my work?",
        a: "Definitely. Your website and Instagram work together, and I can link your feed. But your website is where people check prices and book, and it doesn't depend on an algorithm.",
      },
      {
        q: "Can clients pay a deposit when they book?",
        a: "Many booking systems can take a deposit at the time of booking, which helps cut no-shows. I'll talk you through the options and set up the one that suits you.",
      },
      {
        q: "I already use a booking app. Can you work with it?",
        a: "Usually, yes. If you're happy with your booking app, I can build your website around it so everything links up neatly.",
      },
    ],
    related: ["barbers", "therapists-and-wellbeing", "personal-trainers-and-gyms"],
  },
  {
    slug: "barbers",
    name: "Barbers",
    title: "Websites for barbers",
    hook: "Let customers book a chair without ringing the shop mid-cut.",
    lead: "A website for your barbershop that shows off your cuts, your prices and your team, and lets customers book a chair without ringing the shop while you're mid-fade.",
    problems: [
      "The phone rings while you're cutting, and you lose bookings when you can't answer.",
      "Customers don't know how busy you are or when it's worth coming in.",
      "People new to town pick whichever barber shows up first on Google.",
    ],
    features: [
      { title: "Book a chair online", copy: "Customers choose a barber, a cut and a time, and book in seconds." },
      { title: "Clear prices", copy: "Every cut and service listed with prices, so there are no surprises at the till." },
      { title: "Show off fresh cuts", copy: "A gallery of your best work to win over new customers." },
      { title: "Opening hours that are always right", copy: "Text me when they change and I'll update them for you." },
    ],
    plan: "Website + bookings",
    faqs: [
      {
        q: "Can each barber have their own booking calendar?",
        a: "Yes. Customers can choose who they want, and each barber sees their own bookings.",
      },
      {
        q: "Do I need a website if I'm busy with walk-ins?",
        a: "A website helps you fill quieter days and win customers who are new to the area. It also stops people turning up when you're closed.",
      },
    ],
    related: ["hair-and-beauty-salons", "personal-trainers-and-gyms"],
  },
  {
    slug: "tradespeople",
    name: "Tradespeople",
    title: "Websites for tradespeople",
    hook: "Look established, show your work and get the phone ringing.",
    lead: "For plumbers, electricians, builders, roofers, decorators and every other trade. A website that makes you look established, shows off your work and gets the phone ringing with proper jobs.",
    problems: [
      "You rely on word of mouth and directory sites that charge you for every lead.",
      "Customers compare a few trades online and pick the one that looks most professional.",
      "You haven't got time to deal with a website in the evenings.",
    ],
    features: [
      { title: "One-tap calls and quote requests", copy: "A big call button and a simple quote form, so customers get in touch while they're still looking." },
      { title: "Photos of your work", copy: "Finished jobs and before-and-afters that prove you do quality work." },
      { title: "The areas you cover", copy: "Clear service areas, so you show up for searches in the towns you actually work in." },
      { title: "Reviews and accreditations", copy: "Your reviews and trade memberships on show, to build trust fast." },
    ],
    plan: "New website",
    faqs: [
      {
        q: "Will a website get me more work than directory sites?",
        a: "Directory sites can help, but you're listed right next to your competitors and often pay for each lead. Your own website brings customers straight to you, with no fee per job.",
      },
      {
        q: "I'm always on site. How do I make changes?",
        a: "Just send me a text or WhatsApp with a photo or the change you want. I'll sort it, usually the same day.",
      },
    ],
    related: ["cleaners", "shops-and-retail"],
  },
  {
    slug: "cafes-and-restaurants",
    name: "Cafés & restaurants",
    title: "Websites for cafés & restaurants",
    hook: "Your menu, opening hours and table bookings, looking as good as your food.",
    lead: "For cafés, restaurants, pubs and takeaways. A website with your menu, your opening hours and a way to book a table or order, that looks as good as your food.",
    problems: [
      "People can't find your menu or opening hours, so they go somewhere they can.",
      "Your menu online is an old PDF or a blurry photo.",
      "Delivery apps take a big cut of every order.",
    ],
    features: [
      { title: "A menu people can read", copy: "A clean, mobile-friendly menu that's easy to update when dishes change." },
      { title: "Table bookings", copy: "Let customers book a table online, any time of day." },
      { title: "Find us", copy: "Opening hours, a map and directions, always up to date." },
      { title: "Order direct", copy: "Online ordering for collection or delivery can be added, so you keep more of every order." },
    ],
    plan: "Website + bookings",
    faqs: [
      {
        q: "Can I update the menu myself?",
        a: "Yes, or text me a photo of the new menu and I'll update it for you. It's included in your plan.",
      },
      {
        q: "Can customers order online without a delivery app?",
        a: "Yes. I can add online ordering for collection or delivery, so you're not paying commission on every order. I'll quote for it up front.",
      },
    ],
    related: ["shops-and-retail", "djs-and-entertainers"],
  },
  {
    slug: "djs-and-entertainers",
    name: "DJs & entertainers",
    title: "Websites for DJs & entertainers",
    hook: "Show what an event with you feels like, and turn visitors into bookings.",
    lead: "For DJs, bands, magicians, party hosts and entertainers. A website that shows what an event with you looks and sounds like, and turns visitors into bookings. I've already built one for a Letchworth events DJ.",
    problems: [
      "You answer the same questions about prices and availability over and over.",
      "Your best mixes, videos and photos are scattered across different apps.",
      "Couples and party planners want to see you look professional before they book.",
    ],
    features: [
      { title: "Show what you do", copy: "Mixes, videos and photos in one place, so clients get a feel for your events." },
      { title: "Packages and pricing", copy: "Clear packages for weddings, parties and corporate events." },
      { title: "Enquiries with the details", copy: "An enquiry form that asks for the date, venue and type of event, so you can reply fast." },
      { title: "Reviews", copy: "Happy clients' words, front and centre." },
    ],
    plan: "New website",
    workIndex: 0,
    faqs: [
      {
        q: "Have you built websites for DJs before?",
        a: "Yes. I built the website for DJ Steve Dee, an events DJ in Letchworth. You can see it on this page.",
      },
      {
        q: "Can people check whether I'm free?",
        a: "Yes. I can add an availability calendar, or an enquiry form that asks for the event date first, so you know straight away whether you're free.",
      },
    ],
    related: ["photographers", "cafes-and-restaurants"],
  },
  {
    slug: "tutors",
    name: "Tutors",
    title: "Websites for tutors",
    hook: "Reassure parents and make it easy to book a first lesson.",
    lead: "For private tutors, tuition centres and music teachers. A website that reassures parents, explains what you teach and makes it easy to book a first lesson. I've already built one for a Hertfordshire tutor.",
    problems: [
      "Parents want to know you're qualified and trustworthy before they get in touch.",
      "You spend time answering the same questions about subjects, levels and prices.",
      "Arranging lessons over messages is slow and messy.",
    ],
    features: [
      { title: "Subjects, levels and prices", copy: "Everything parents need to know, laid out clearly." },
      { title: "Trust built in", copy: "Your experience, qualifications, DBS check and reviews from families, all on show." },
      { title: "Book a first lesson", copy: "Online booking or a simple enquiry form, so families can get started quickly." },
      { title: "Found locally", copy: "Set up to show up when parents search for a tutor in your town." },
    ],
    plan: "Website + bookings",
    workIndex: 1,
    faqs: [
      {
        q: "Have you built websites for tutors before?",
        a: "Yes. I built a website for a Hertfordshire tutor that highlights their services, testimonials and easy booking. You can see it on this page.",
      },
      {
        q: "Can I take bookings for regular weekly lessons?",
        a: "Yes. Booking can be set up for one-off sessions, regular weekly slots, or both.",
      },
    ],
    related: ["personal-trainers-and-gyms", "therapists-and-wellbeing"],
  },
  {
    slug: "personal-trainers-and-gyms",
    name: "Personal trainers & gyms",
    title: "Websites for personal trainers & gyms",
    hook: "Sell your sessions, show real results and take bookings on the spot.",
    lead: "For personal trainers, fitness studios, yoga and pilates teachers, and small gyms. A website that sells your sessions, shows real results and lets people book or sign up on the spot.",
    problems: [
      "People follow you on social media but never actually book.",
      "Class timetables and prices are out of date or hard to find.",
      "Sorting bookings and payments over messages eats your time.",
    ],
    features: [
      { title: "Book sessions and classes", copy: "Clients book one-to-ones or classes online, any time." },
      { title: "Your timetable, always current", copy: "A simple class timetable that's easy to update." },
      { title: "Results and reviews", copy: "Client stories that make people want to get started." },
      { title: "Packages and memberships", copy: "Clear prices for single sessions, blocks and memberships." },
    ],
    plan: "Website + bookings",
    faqs: [
      {
        q: "Can people pay for sessions online?",
        a: "Yes. Online payment for sessions and packages can be added to your booking system. I'll go through the options with you.",
      },
      {
        q: "Can you build an app for my gym?",
        a: "Yes. If you need a members' app for bookings or workouts, I can quote for it as a custom build.",
      },
    ],
    related: ["therapists-and-wellbeing", "hair-and-beauty-salons"],
  },
  {
    slug: "cleaners",
    name: "Cleaners",
    title: "Websites for cleaners",
    hook: "Look reliable, explain your services and win regular customers.",
    lead: "For domestic and commercial cleaners, carpet cleaners and window cleaners. A website that makes you look reliable, explains your services and brings in regular customers.",
    problems: [
      "New customers need to trust you before they let you into their home or business.",
      "Quote requests come in by text with half the details missing.",
      "You're up against bigger cleaning companies online.",
    ],
    features: [
      { title: "Trust signals", copy: "Insurance, checks, reviews and photos, so customers feel safe choosing you." },
      { title: "A smarter quote form", copy: "Asks for property size, type of clean and how often, so you can quote quickly." },
      { title: "Service areas", copy: "The towns and villages you cover, so you show up in local searches." },
      { title: "Regular bookings", copy: "Customers can book regular cleans online if you'd like them to." },
    ],
    plan: "New website",
    faqs: [
      {
        q: "Can customers get a price online?",
        a: "Yes. I can add a quote form, or show set prices for standard cleans, so customers know what to expect.",
      },
      {
        q: "I work on my own. Will I look too small?",
        a: "Not at all. A professional website makes a one-person business look established and trustworthy, and plenty of customers prefer someone who'll actually turn up themselves.",
      },
    ],
    related: ["tradespeople", "dog-groomers-and-pet-services"],
  },
  {
    slug: "dog-groomers-and-pet-services",
    name: "Dog groomers & pet services",
    title: "Websites for dog groomers & pet services",
    hook: "Show happy pets and let owners book without the back-and-forth.",
    lead: "For dog groomers, dog walkers, pet sitters and trainers. A website that shows happy pets, explains your services and lets owners book in without the back-and-forth.",
    problems: [
      "Owners want to see how you treat animals before they trust you with theirs.",
      "Taking bookings by phone mid-groom or out on a walk is a juggle.",
      "Your prices depend on size and breed, and explaining that takes ages.",
    ],
    features: [
      { title: "Happy pets gallery", copy: "Before-and-afters and happy customers, front and centre." },
      { title: "Book online", copy: "Owners choose a service and a time that suits them, any time of day." },
      { title: "Clear prices", copy: "Prices by size or breed, laid out so owners know what to expect." },
      { title: "Areas covered", copy: "Where you're based, or which areas you walk and sit in." },
    ],
    plan: "Website + bookings",
    faqs: [
      {
        q: "Can owners book grooms online?",
        a: "Yes. On the Website + bookings plan, owners can book a groom any time and get an instant confirmation.",
      },
      {
        q: "I'm a dog walker. Do I need online booking?",
        a: "Not always. Some walkers prefer a simple enquiry form and set prices. I'll suggest whatever saves you the most time.",
      },
    ],
    related: ["cleaners", "hair-and-beauty-salons"],
  },
  {
    slug: "photographers",
    name: "Photographers & creatives",
    title: "Websites for photographers & creatives",
    hook: "A fast portfolio that lets your work speak for itself.",
    lead: "For photographers, videographers, designers and makers. A portfolio website that lets your work speak for itself, and makes it easy for clients to enquire and book.",
    problems: [
      "Your portfolio lives on Instagram, where it's buried and cropped.",
      "Clients don't know your packages or prices until they ask.",
      "Slow, clunky portfolio sites lose people before they see your best work.",
    ],
    features: [
      { title: "Fast, beautiful galleries", copy: "Your work shown big and sharp, without slowing the site down." },
      { title: "Packages and pricing", copy: "Clear packages for weddings, portraits, events or commercial work." },
      { title: "Enquiries with the details", copy: "Forms that ask for the date, location and type of shoot." },
      { title: "Found locally", copy: "Set up to show up for searches like “wedding photographer in Hertfordshire”." },
    ],
    plan: "New website",
    faqs: [
      {
        q: "Will my photos load quickly?",
        a: "Yes. I make sure your images are sized and compressed properly, so they look sharp and load fast on any phone.",
      },
      {
        q: "Can I add new work myself?",
        a: "Yes, or send it to me and I'll add it for you. It's included in your plan.",
      },
    ],
    related: ["djs-and-entertainers", "shops-and-retail"],
  },
  {
    slug: "therapists-and-wellbeing",
    name: "Therapists & wellbeing",
    title: "Websites for therapists & wellbeing practitioners",
    hook: "A calm, professional site that puts clients at ease.",
    lead: "For massage therapists, physios, counsellors, osteopaths and wellbeing practitioners. A calm, professional website that puts clients at ease and lets them book an appointment without picking up the phone.",
    problems: [
      "New clients are nervous and want to know what to expect before they get in touch.",
      "You need to look professional and qualified, not like a side project.",
      "Phone calls interrupt sessions, and some clients would rather not call at all.",
    ],
    features: [
      { title: "Calm, reassuring design", copy: "A site that feels like your practice: clear, calm and welcoming." },
      { title: "Treatments explained", copy: "What each treatment involves, how long it takes and what it costs." },
      { title: "Online booking", copy: "Clients book discreetly online, without having to phone." },
      { title: "Credentials on show", copy: "Your qualifications and memberships, to build trust." },
    ],
    plan: "Website + bookings",
    faqs: [
      {
        q: "Are online bookings private?",
        a: "Yes. Bookings come straight to you, and your clients' details are never shown anywhere on the site.",
      },
      {
        q: "Can I list prices for different session lengths?",
        a: "Yes. I'll lay out your treatments and prices clearly, including different session lengths and packages.",
      },
    ],
    related: ["hair-and-beauty-salons", "personal-trainers-and-gyms"],
  },
  {
    slug: "shops-and-retail",
    name: "Shops & online stores",
    title: "Websites & online shops for retailers",
    hook: "Bring people through your door and sell online while you sleep.",
    lead: "For independent shops, boutiques, makers and anyone selling products. A website that brings people through your door, and an online shop that sells for you while you sleep.",
    problems: [
      "Customers can't buy from you when the shop is closed.",
      "Marketplace sites take a big cut of every sale.",
      "People don't know what you stock until they visit.",
    ],
    features: [
      { title: "Online shop", copy: "Sell online with secure payments going straight to your bank." },
      { title: "Click and collect", copy: "Let local customers order online and pick up in store." },
      { title: "Show off your range", copy: "New stock and best-sellers on show, and easy to update." },
      { title: "Visit us", copy: "Opening hours, location and directions, always correct." },
    ],
    plan: "App or custom software",
    faqs: [
      {
        q: "How much does an online shop cost?",
        a: "Online shops start from £2,500 as a fixed quote, depending on how many products you have and what you need. If you just want a website for your shop without online sales, the Starter plan covers it.",
      },
      {
        q: "Can I add new products myself?",
        a: "Yes. I'll set up your shop so adding products, changing prices and managing stock is simple. I can also do it for you.",
      },
    ],
    related: ["cafes-and-restaurants", "photographers"],
  },
  {
    slug: "startups-and-app-ideas",
    name: "Start-ups & app ideas",
    title: "App development for start-ups & small businesses",
    hook: "iPhone, Android and web apps, explained in plain English and priced up front.",
    lead: "Got an idea for an app, or a part of your business that's crying out for software? I build iPhone, Android and web apps, customer portals and internal tools, explained in plain English and priced up front.",
    problems: [
      "Agencies quote huge numbers and talk in jargon.",
      "You're not sure where to start or what it should cost.",
      "Your business runs on spreadsheets, paperwork and the same admin every week.",
    ],
    features: [
      { title: "A plain-English plan", copy: "We start with a chat about what you want it to do. I turn that into a simple plan and a fixed price." },
      { title: "Phone and web apps", copy: "iPhone and Android apps, and web apps that work in any browser." },
      { title: "Portals and internal tools", copy: "Customer logins, booking systems, dashboards and tools that save hours of admin." },
      { title: "Looked after afterwards", copy: "Hosting, updates and support, so your app keeps running." },
    ],
    plan: "App or custom software",
    faqs: [
      {
        q: "How much does an app cost?",
        a: "It depends on what it needs to do. Most projects start from £2,500. You'll get a fixed price and a plain-English plan before any work begins, paid in 2–3 stages.",
      },
      {
        q: "I'm not technical. Is that a problem?",
        a: "Not at all. You tell me what you want the app to do for you or your customers, and I'll handle the technical side and explain everything in plain English.",
      },
      {
        q: "Who owns the app once it's built?",
        a: "You do. Once it's paid for, the app is yours.",
      },
    ],
    related: ["shops-and-retail", "tradespeople"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
