import type { Faq } from "@/lib/site";

export type Town = {
  slug: string;
  name: string;
  /** Shorter name for links and headings, if different. */
  short?: string;
  district: string;
  /** One-line hook used in the meta description. */
  hook: string;
  lead: string;
  /** Ethan's own connection to the town. Only for places with a real one. */
  personal?: { label: string; copy: string };
  localHeading: string;
  local: string[];
  industries: string[];
  faqs: Faq[];
  nearby: string[];
};

export const towns: Town[] = [
  {
    slug: "hitchin",
    name: "Hitchin",
    district: "North Hertfordshire",
    hook: "Websites by a designer who grew up in Hitchin.",
    lead: "I grew up in Hitchin, so this one's personal. I build websites for Hitchin businesses that look the part and bring in customers, then look after them for you so you never have to think about the tech.",
    personal: {
      label: "Where I grew up",
      copy: "Hitchin is where I grew up. I know the Market Place on a Saturday, the independents tucked down the side streets, and how much of the town runs on word of mouth. A good website doesn't replace that. It makes sure that when someone hears your name and looks you up, they like what they find and pick up the phone.",
    },
    localHeading: "Websites for Hitchin's independents",
    local: [
      "Hitchin has more independent businesses than most towns its size: cafés, salons, boutiques, pubs, and a lot of tradespeople serving the villages around it. Most of them win work from people who live nearby, and the first thing a new customer does is search on their phone.",
      "I make sure your site comes up for searches like “barber in Hitchin” or “Hitchin electrician”, loads fast on a phone, and makes it obvious how to call, book or find you. With the station on the lines to London and Cambridge, plenty of people new to the area are searching too.",
    ],
    industries: ["hair-and-beauty-salons", "barbers", "cafes-and-restaurants", "tradespeople", "shops-and-retail", "personal-trainers-and-gyms"],
    faqs: [
      {
        q: "Can we meet in person in Hitchin?",
        a: "Yes. I grew up in Hitchin and live just down the road in Stevenage, so I'm happy to meet for a coffee in town and talk it through. Plenty of people prefer a quick call or WhatsApp, and that works just as well.",
      },
      {
        q: "Will my website show up when people search in Hitchin?",
        a: "I set every site up with the things Google looks for: your town and services in the right places, a fast mobile site, and a Google Business Profile linked up properly. Nobody can honestly promise the top spot, but these are the things that move you up the list.",
      },
    ],
    nearby: ["letchworth", "stevenage", "baldock", "welwyn-garden-city"],
  },
  {
    slug: "stevenage",
    name: "Stevenage",
    district: "Stevenage",
    hook: "A local web designer who lives in Stevenage.",
    lead: "I live in Stevenage, so if you're a Stevenage business, I'm just around the corner. I build websites that bring in customers and look after them afterwards, so you can get on with running things.",
    personal: {
      label: "Where I live",
      copy: "Stevenage is home. I'm here day to day, which means I can pop round, meet you in the Old Town for a coffee, or sort a change the same afternoon. You won't be dealing with a faceless agency. You'll be dealing with someone who lives in the same town as your customers.",
    },
    localHeading: "A town that's always changing",
    local: [
      "Stevenage was Britain's first post-war New Town, and it's still changing, with the town centre being rebuilt and new homes going up around the edges. New residents mean new customers looking for a hairdresser, a plumber or somewhere to eat, and nearly all of them start on Google.",
      "From the independent shops and restaurants along the Old Town High Street to the trades and service businesses across the neighbourhoods, I build sites that make it easy for those customers to find you, trust you and get in touch.",
    ],
    industries: ["tradespeople", "hair-and-beauty-salons", "barbers", "cafes-and-restaurants", "cleaners", "personal-trainers-and-gyms"],
    faqs: [
      {
        q: "Are you actually based in Stevenage?",
        a: "Yes. I live in Stevenage, and EJSCOTT Group is run from here. If you'd like to meet in person, I'm happy to come to you.",
      },
      {
        q: "How quickly can you make changes?",
        a: "Most small changes, like new prices, photos or opening hours, are done the same day or the next. Just text or WhatsApp me what you need.",
      },
    ],
    nearby: ["hitchin", "letchworth", "welwyn-garden-city", "hertford"],
  },
  {
    slug: "letchworth",
    name: "Letchworth Garden City",
    short: "Letchworth",
    district: "North Hertfordshire",
    hook: "Already trusted by a Letchworth events DJ.",
    lead: "Websites for Letchworth businesses, built by someone just down the road in Stevenage. I've already built one for a Letchworth events DJ, and I'd love to build yours.",
    personal: {
      label: "Local work",
      copy: "One of my favourite projects is for DJ Steve Dee, a Letchworth events DJ. His site shows off his music, events and services and makes booking him simple. It's a good example of what I do: a clear, modern site that does one job well, which is bringing in enquiries.",
    },
    localHeading: "Built for the world's first garden city",
    local: [
      "Letchworth was the world's first garden city, and it still has that planned, green, community feel. Businesses here lean on loyal local customers, from the shops on Leys Avenue and Eastcheap to the salons, cafés and trades that serve the town and the villages nearby.",
      "A good website helps you keep those customers and win new ones. It shows up when someone searches in Letchworth, tells them what you do in seconds, and makes it easy to call, book or visit.",
    ],
    industries: ["djs-and-entertainers", "hair-and-beauty-salons", "cafes-and-restaurants", "tradespeople", "shops-and-retail", "dog-groomers-and-pet-services"],
    faqs: [
      {
        q: "Have you worked with businesses in Letchworth before?",
        a: "Yes. I built the website for DJ Steve Dee, an events DJ based in Letchworth. You can see it in the work section on this page.",
      },
      {
        q: "Can you help if I already have a website?",
        a: "Yes. If your current site is slow, out of date or hard to change, I can redesign it, or take over the hosting and keep it up to date for you.",
      },
    ],
    nearby: ["hitchin", "baldock", "stevenage", "royston"],
  },
  {
    slug: "baldock",
    name: "Baldock",
    district: "North Hertfordshire",
    hook: "From a web designer just down the A1(M).",
    lead: "Websites for Baldock businesses, from a web designer just down the A1(M) in Stevenage. Designed, hosted and looked after for you.",
    localHeading: "A small town with a big high street",
    local: [
      "Baldock's wide, historic High Street is lined with independent pubs, cafés, shops and salons, and the town sits right by the A1(M), so plenty of trades and service businesses cover the whole of North Herts from here.",
      "In a town this size, reputation matters. Your website is often the first thing someone checks after a recommendation, so it needs to look professional, work on a phone and make it easy to get in touch. That's exactly what I build.",
    ],
    industries: ["tradespeople", "cafes-and-restaurants", "hair-and-beauty-salons", "shops-and-retail", "dog-groomers-and-pet-services", "cleaners"],
    faqs: [
      {
        q: "Do you work with businesses in the villages around Baldock?",
        a: "Yes. Whether you're in Baldock itself or a village nearby, it makes no difference. I'm a short drive away, and most of the work happens over the phone or WhatsApp anyway.",
      },
      {
        q: "I'm a sole trader. Is a website worth it?",
        a: "For most sole traders, yes. A simple site that shows what you do, where you work and how to reach you helps people trust you before they call. The Starter plan is built for exactly that.",
      },
    ],
    nearby: ["letchworth", "hitchin", "royston", "stevenage"],
  },
  {
    slug: "royston",
    name: "Royston",
    district: "North Hertfordshire",
    hook: "Reaching customers on both sides of the Herts and Cambs border.",
    lead: "Websites for Royston businesses on the Hertfordshire and Cambridgeshire border. Designed, hosted and looked after for you.",
    localHeading: "Reaching customers on both sides of the border",
    local: [
      "Royston sits right on the edge of Hertfordshire, with Cambridge just up the road. Your customers might come from Herts villages, Cambridgeshire or commuters passing through, and nearly all of them will search online before they choose.",
      "I build sites that make the most of that: clear about where you work and who you serve, quick on a phone, and set up so people searching across the area can find you. From the shops and cafés around the town centre to trades covering the surrounding villages, it's the same approach.",
    ],
    industries: ["tradespeople", "cafes-and-restaurants", "hair-and-beauty-salons", "shops-and-retail", "tutors", "cleaners"],
    faqs: [
      {
        q: "Can my website reach Cambridgeshire customers too?",
        a: "Yes. I'll write your pages so it's clear you cover both sides of the border, and set up your Google Business Profile with the right service areas.",
      },
      {
        q: "Do I need to meet you in person?",
        a: "Only if you'd like to. I'm based in Stevenage and happy to come over, but most clients find a phone call and WhatsApp messages easier.",
      },
    ],
    nearby: ["baldock", "letchworth", "hitchin"],
  },
  {
    slug: "welwyn-garden-city",
    name: "Welwyn Garden City",
    district: "Welwyn Hatfield",
    hook: "From a web designer just up the A1(M) in Stevenage.",
    lead: "Websites for Welwyn Garden City businesses, from a web designer just up the A1(M) in Stevenage. Designed, hosted and looked after for you.",
    localHeading: "Built for Britain's second garden city",
    local: [
      "Welwyn Garden City was the second garden city after Letchworth, and it still has the tree-lined avenues and open spaces to prove it. Around the Howard Centre and the town centre there's a busy mix of independent cafés, salons and shops, plus plenty of trades and service businesses working across the area.",
      "With the train into London, a lot of local customers are busy commuters who search, compare and book on their phone. I build sites that make that easy: fast, clear, and with booking or contact one tap away.",
    ],
    industries: ["hair-and-beauty-salons", "personal-trainers-and-gyms", "therapists-and-wellbeing", "cafes-and-restaurants", "tradespeople", "tutors"],
    faqs: [
      {
        q: "Can customers book appointments through my website?",
        a: "Yes. The Website + bookings plan lets customers book any time, day or night, and get an instant confirmation. It's ideal for salons, therapists and personal trainers.",
      },
      {
        q: "How far do you travel?",
        a: "I'm in Stevenage, so Welwyn Garden City is a short trip. I'm happy to meet in person, though most clients prefer to keep it to calls and WhatsApp.",
      },
    ],
    nearby: ["hatfield", "stevenage", "hertford", "harpenden"],
  },
  {
    slug: "hatfield",
    name: "Hatfield",
    district: "Welwyn Hatfield",
    hook: "Websites for businesses, start-ups and student founders.",
    lead: "Websites for Hatfield businesses, designed, hosted and looked after for you by a Hertfordshire web designer.",
    localHeading: "From Old Hatfield to the university",
    local: [
      "Hatfield mixes old and new: Hatfield House and Old Hatfield on one side, the University of Hertfordshire and the Galleria on the other. That gives local businesses a wide spread of customers, from students and families to people working in the business parks.",
      "Whether you're a café wanting more footfall, a tutor looking for students or a trade covering the whole area, I'll build a site that speaks to the right people and makes it easy for them to get in touch.",
    ],
    industries: ["tutors", "cafes-and-restaurants", "hair-and-beauty-salons", "personal-trainers-and-gyms", "tradespeople", "startups-and-app-ideas"],
    faqs: [
      {
        q: "Do you build apps for start-ups and student founders?",
        a: "Yes. If you've got an idea for an app or online service, I can help shape it and build it, with a fixed price agreed before we start.",
      },
      {
        q: "Can my site help me reach students?",
        a: "Yes. Clear pricing, fast mobile pages and easy booking all matter for students, who almost always find services on their phone.",
      },
    ],
    nearby: ["welwyn-garden-city", "st-albans", "potters-bar", "hertford"],
  },
  {
    slug: "hertford",
    name: "Hertford",
    district: "East Hertfordshire",
    hook: "Websites for businesses in the county town.",
    lead: "Websites for businesses in Hertford, the county town. Designed, hosted and looked after for you.",
    localHeading: "Websites for the county town",
    local: [
      "Hertford packs a lot into a small centre. Independent shops, restaurants and pubs fill Fore Street and the streets around the castle, and the town has a strong habit of supporting its own. It's also home to a lot of the county's professional and service businesses.",
      "People in Hertford like to choose local, but they still check online first. I'll build you a site that holds its own next to bigger competitors, shows what makes you different, and makes it easy for customers to call, book or visit.",
    ],
    industries: ["shops-and-retail", "cafes-and-restaurants", "hair-and-beauty-salons", "therapists-and-wellbeing", "photographers", "tradespeople"],
    faqs: [
      {
        q: "Can you build an online shop for my Hertford store?",
        a: "Yes. I can add online ordering or a full online shop to your site, so customers can buy from you even when they can't get into town.",
      },
      {
        q: "Will you keep my website up to date?",
        a: "Yes. Hosting, security and small changes are all part of the plan. Send me what you'd like changed and I'll sort it.",
      },
    ],
    nearby: ["ware", "welwyn-garden-city", "hoddesdon", "stevenage"],
  },
  {
    slug: "ware",
    name: "Ware",
    district: "East Hertfordshire",
    hook: "Turning word-of-mouth recommendations into bookings.",
    lead: "Websites for Ware businesses, built and looked after by a Hertfordshire web designer who'll answer the phone when you call.",
    localHeading: "A riverside town with a loyal local following",
    local: [
      "Ware has real character, from the old gazebos along the River Lea to the independent shops and pubs on the High Street. It's the kind of town where customers know the owners by name, and recommendations count for a lot.",
      "Your website backs up that word of mouth. When someone gets your name from a friend and looks you up, a clear, professional site turns that recommendation into a booking or a phone call. That's what I build.",
    ],
    industries: ["cafes-and-restaurants", "hair-and-beauty-salons", "tradespeople", "shops-and-retail", "dog-groomers-and-pet-services", "cleaners"],
    faqs: [
      {
        q: "I get most of my work through word of mouth. Do I still need a website?",
        a: "Usually, yes. Most people look you up after a recommendation. If they can't find you, or find something out of date, some of them will go elsewhere.",
      },
      {
        q: "Can you help me get more Google reviews?",
        a: "I'll set up your Google Business Profile properly and give you a simple review link you can text to happy customers.",
      },
    ],
    nearby: ["hertford", "hoddesdon", "bishops-stortford", "cheshunt"],
  },
  {
    slug: "st-albans",
    name: "St Albans",
    district: "St Albans",
    hook: "Websites that stand out in a busy city.",
    lead: "Websites for St Albans businesses that look as good as the city they're in. Designed, hosted and looked after for you.",
    localHeading: "Standing out in a busy city",
    local: [
      "St Albans is a cathedral city with Roman roots, a street market that's been running for centuries, and one of the strongest independent scenes in Hertfordshire. Cafés, restaurants, boutiques, salons and studios all compete for the same discerning customers.",
      "That competition means your website has to work hard. It needs to look polished, load quickly, show off what you do and make booking or getting in touch effortless. I build sites with all of that in mind, and look after them so they stay that way.",
    ],
    industries: ["cafes-and-restaurants", "hair-and-beauty-salons", "therapists-and-wellbeing", "personal-trainers-and-gyms", "photographers", "shops-and-retail"],
    faqs: [
      {
        q: "There are lots of web designers in St Albans. Why you?",
        a: "You deal with me directly, from the first chat to every change afterwards. You see a free homepage design before paying anything, and my prices are on this page, not hidden behind a sales call.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. If your current site feels dated or isn't bringing in enquiries, I can redesign it and move it across for you.",
      },
    ],
    nearby: ["harpenden", "hatfield", "hemel-hempstead", "watford"],
  },
  {
    slug: "harpenden",
    name: "Harpenden",
    district: "St Albans",
    hook: "Polished websites without the agency price tag.",
    lead: "Websites for Harpenden businesses, designed to impress and looked after for you.",
    localHeading: "Websites for a town that expects quality",
    local: [
      "Harpenden's high street is full of independent cafés, boutiques, salons and wellbeing studios, and its customers expect a polished experience. Many of them are busy commuters who'll look you up on their phone before they ever walk through the door.",
      "Your website needs to match the standard of what you offer. I'll design a site that feels premium, works perfectly on a phone and makes it quick to book or get in touch, without a premium agency price tag.",
    ],
    industries: ["hair-and-beauty-salons", "therapists-and-wellbeing", "personal-trainers-and-gyms", "cafes-and-restaurants", "tutors", "photographers"],
    faqs: [
      {
        q: "Can you make my site feel high-end?",
        a: "Yes. A high-end feel comes from clear layout, great photos and confident wording, not gimmicks. I'll design your homepage first so you can see the look before you commit.",
      },
      {
        q: "Can clients book and pay online?",
        a: "Yes, clients can book any time on the Website + bookings plan. If you'd like to take deposits or payments online too, we can look at adding that.",
      },
    ],
    nearby: ["st-albans", "hatfield", "welwyn-garden-city", "hemel-hempstead"],
  },
  {
    slug: "hemel-hempstead",
    name: "Hemel Hempstead",
    district: "Dacorum",
    hook: "From the Old Town to Maylands.",
    lead: "Websites for Hemel Hempstead businesses, designed, hosted and looked after for you.",
    localHeading: "From the Old Town to Maylands",
    local: [
      "Hemel Hempstead is one of Hertfordshire's biggest towns, with a historic Old Town High Street, a busy town centre and Maylands, one of the largest business areas in the South East. There's room for every kind of business here, and a lot of competition for attention.",
      "Whether you're a salon in the town centre, a trade covering Dacorum, or a company in Maylands that needs something more custom, I'll build a site that gets you found and makes it easy for customers to take the next step.",
    ],
    industries: ["tradespeople", "hair-and-beauty-salons", "barbers", "cleaners", "personal-trainers-and-gyms", "startups-and-app-ideas"],
    faqs: [
      {
        q: "Can you build software for my business, not just a website?",
        a: "Yes. I build custom tools, customer portals and apps for businesses that have outgrown spreadsheets. You'll get a fixed price and a plain-English plan first.",
      },
      {
        q: "Do you cover the whole of Dacorum?",
        a: "Yes: Hemel, Berkhamsted, Tring and the villages in between. Most of the work happens by phone and WhatsApp, and I'm happy to meet in person when it helps.",
      },
    ],
    nearby: ["berkhamsted", "st-albans", "watford", "tring"],
  },
  {
    slug: "berkhamsted",
    name: "Berkhamsted",
    district: "Dacorum",
    hook: "Websites with as much character as the high street.",
    lead: "Websites for Berkhamsted businesses, designed with care and looked after for you.",
    localHeading: "Websites for a characterful high street",
    local: [
      "Berkhamsted has one of the nicest high streets in the county, with independent shops, cafés and restaurants, an art deco cinema, castle ruins and the Grand Union Canal running through town. Local customers are loyal, and they like to support businesses with personality.",
      "Your website should show that personality. I'll build you a site that tells your story, shows off your work and makes it easy for people to visit, book or order, whether they're locals or visitors heading out to Ashridge for the day.",
    ],
    industries: ["cafes-and-restaurants", "shops-and-retail", "hair-and-beauty-salons", "photographers", "therapists-and-wellbeing", "dog-groomers-and-pet-services"],
    faqs: [
      {
        q: "Can you help my shop sell online?",
        a: "Yes. I can add an online shop to your website so customers can buy from you any time, with payments going straight to your bank.",
      },
      {
        q: "Do you use stock photos?",
        a: "I'd much rather use real photos of you and your business, because they build more trust. If you don't have any, I'll suggest simple ways to get some.",
      },
    ],
    nearby: ["tring", "hemel-hempstead", "watford"],
  },
  {
    slug: "tring",
    name: "Tring",
    district: "Dacorum",
    hook: "Websites for locals and day-trippers alike.",
    lead: "Websites for Tring businesses at the edge of the Chilterns. Designed, hosted and looked after for you.",
    localHeading: "A small market town with a big pull",
    local: [
      "Tring may be small, but it draws people in, from walkers in the Chilterns to visitors at the Natural History Museum at Tring. Its independent shops, pubs and cafés serve a loyal local crowd as well as day-trippers who find them online.",
      "That makes your website doubly important. Locals need to know your opening hours and what's new; visitors need to find you in the first place. I'll build a site that does both, and I'll keep it up to date for you.",
    ],
    industries: ["cafes-and-restaurants", "shops-and-retail", "dog-groomers-and-pet-services", "tradespeople", "photographers", "therapists-and-wellbeing"],
    faqs: [
      {
        q: "Can I update opening hours and menus myself?",
        a: "You can, or just text me and I'll do it for you. Small changes like this are included in your plan.",
      },
      {
        q: "Will my business show up on Google Maps?",
        a: "I'll help you set up or tidy your Google Business Profile and link it to your website, which is a big part of showing up on Maps.",
      },
    ],
    nearby: ["berkhamsted", "hemel-hempstead"],
  },
  {
    slug: "watford",
    name: "Watford",
    district: "Watford",
    hook: "Getting noticed in one of Hertfordshire's busiest towns.",
    lead: "Websites for Watford businesses, designed, hosted and looked after for you, by a Hertfordshire web designer who won't pass you around.",
    localHeading: "Getting noticed in a busy town",
    local: [
      "Watford is one of the busiest towns in Hertfordshire, with a big shopping centre, a lively food and drink scene, Cassiobury Park, and its football club at Vicarage Road. It's close to London, well connected by the M1, M25 and rail, and full of businesses competing for attention.",
      "In a town this busy, your website has to make a good first impression fast. I'll build you a site that looks professional, loads quickly, shows up in local searches and gets people calling, booking or visiting.",
    ],
    industries: ["barbers", "hair-and-beauty-salons", "cafes-and-restaurants", "tradespeople", "personal-trainers-and-gyms", "cleaners"],
    faqs: [
      {
        q: "Isn't a London agency better for a Watford business?",
        a: "Not necessarily. You'll get a site just as polished, without the agency price, and you'll deal with the same person every time you need a change.",
      },
      {
        q: "Can you help me compete with bigger businesses online?",
        a: "Yes. A fast, clear website with the right local information, plus a properly set up Google Business Profile, puts small businesses on a level footing in local searches.",
      },
    ],
    nearby: ["bushey", "rickmansworth", "hemel-hempstead", "st-albans"],
  },
  {
    slug: "rickmansworth",
    name: "Rickmansworth",
    district: "Three Rivers",
    hook: "Websites for businesses across Three Rivers.",
    lead: "Websites for Rickmansworth and Three Rivers businesses, designed, hosted and looked after for you.",
    localHeading: "Websites for Three Rivers",
    local: [
      "Rickmansworth sits where three rivers meet, with the Aquadrome, the Grand Union Canal and a high street of independent shops, cafés and salons. It's a well-connected town, and its customers expect the businesses they use to look professional online.",
      "I'll build a site that matches that expectation: clean, modern and quick on a phone, with your services, prices and contact details exactly where people expect to find them.",
    ],
    industries: ["hair-and-beauty-salons", "therapists-and-wellbeing", "tutors", "tradespeople", "cafes-and-restaurants", "cleaners"],
    faqs: [
      {
        q: "Can you write the words for my website?",
        a: "Yes. I'll write clear, plain-English wording based on a quick chat about your business. You can tweak anything before it goes live.",
      },
      {
        q: "Do you cover Chorleywood and Croxley Green too?",
        a: "Yes. Anywhere in Three Rivers, and further afield. Most of the work happens over the phone and WhatsApp.",
      },
    ],
    nearby: ["watford", "bushey"],
  },
  {
    slug: "bushey",
    name: "Bushey",
    district: "Hertsmere",
    hook: "Websites for businesses that run on regulars and recommendations.",
    lead: "Websites for Bushey businesses, designed, hosted and looked after for you.",
    localHeading: "Websites with a village feel",
    local: [
      "Bushey has kept its village feel, with independent shops and cafés around the high street and Bushey Heath, despite sitting right next to Watford and close to London. Its businesses rely on regulars and recommendations.",
      "A good website helps those recommendations land. When someone looks you up, they should see straight away what you do, what it costs and how to get in touch. I'll build exactly that and look after it for you.",
    ],
    industries: ["hair-and-beauty-salons", "tutors", "tradespeople", "therapists-and-wellbeing", "cleaners", "cafes-and-restaurants"],
    faqs: [
      {
        q: "How much does a simple website cost?",
        a: "The Starter plan is £99 to get started and then £39 a month, with hosting and changes included, or £595 to pay once. You'll see a free homepage design first.",
      },
      {
        q: "Can you set up a business email address too?",
        a: "Yes. I can set up an email address that matches your website, like hello@yourbusiness.co.uk, so you look more professional.",
      },
    ],
    nearby: ["watford", "borehamwood", "rickmansworth"],
  },
  {
    slug: "borehamwood",
    name: "Borehamwood",
    district: "Hertsmere",
    hook: "Websites and portfolios for Britain's Hollywood.",
    lead: "Websites for Borehamwood and Elstree businesses, designed, hosted and looked after for you.",
    localHeading: "Websites for Britain's Hollywood",
    local: [
      "Borehamwood is home to Elstree Studios and the BBC's Elstree Centre, which has given it a reputation as Britain's Hollywood and a lot of creative and freelance businesses. Alongside them, Shenley Road and the neighbourhoods around it are full of salons, cafés and trades.",
      "Whether you're a freelancer who needs a portfolio that wins work, or a local business that wants more customers, I'll build a site that shows you at your best and makes it simple for people to get in touch.",
    ],
    industries: ["photographers", "hair-and-beauty-salons", "personal-trainers-and-gyms", "tradespeople", "djs-and-entertainers", "cafes-and-restaurants"],
    faqs: [
      {
        q: "Can you build a portfolio website?",
        a: "Yes. For photographers, makers, performers and freelancers, I'll build a site that puts your work front and centre and makes it easy for people to hire you.",
      },
      {
        q: "Can I add new work to my portfolio myself?",
        a: "Yes, or send it to me and I'll add it for you. Updates like this are included in your plan.",
      },
    ],
    nearby: ["potters-bar", "bushey", "watford"],
  },
  {
    slug: "potters-bar",
    name: "Potters Bar",
    district: "Hertsmere",
    hook: "Websites for busy commuters to find, trust and book.",
    lead: "Websites for Potters Bar businesses, designed, hosted and looked after for you.",
    localHeading: "Websites for a well-connected town",
    local: [
      "Potters Bar sits on the M25 with fast trains into London, so a lot of its customers are commuters and families who are short on time. They want to find a business, check it's right, and book or call in a few taps.",
      "I'll build you a site that makes that easy, with your services, prices and contact details front and centre, and online booking if you need it. Then I'll look after it, so you never have to think about the tech.",
    ],
    industries: ["hair-and-beauty-salons", "tradespeople", "tutors", "cleaners", "personal-trainers-and-gyms", "dog-groomers-and-pet-services"],
    faqs: [
      {
        q: "Can customers book with me online?",
        a: "Yes. On the Website + bookings plan, customers can book any time and get an instant confirmation, which suits busy commuters.",
      },
      {
        q: "Is there a contract?",
        a: "Monthly plans have a 12-month minimum, then you can cancel any time. If you'd rather not commit, you can pay once instead.",
      },
    ],
    nearby: ["hatfield", "borehamwood", "cheshunt"],
  },
  {
    slug: "cheshunt",
    name: "Cheshunt",
    district: "Broxbourne",
    hook: "Websites that bring in calls, quotes and bookings.",
    lead: "Websites for Cheshunt businesses, designed, hosted and looked after for you.",
    localHeading: "Websites for the Lee Valley",
    local: [
      "Cheshunt sits on the edge of the Lee Valley Park, with a strong mix of family businesses, trades and shops, and good links into London. It's also where Tesco had its head office for decades, so it's a town that knows how far a small business can grow.",
      "If you're ready to grow too, a proper website is a good place to start. I'll build a site that shows people why they should choose you, works perfectly on a phone and brings in calls and bookings.",
    ],
    industries: ["tradespeople", "cleaners", "hair-and-beauty-salons", "barbers", "dog-groomers-and-pet-services", "shops-and-retail"],
    faqs: [
      {
        q: "I'm a tradesperson. What should my website include?",
        a: "The jobs you do, the areas you cover, photos of your work, reviews and a big call button. I'll build all of that into a simple site that brings in quote requests.",
      },
      {
        q: "Can you get me more leads from Google?",
        a: "I'll set your site up to show up for searches like your trade plus your town, and link it to your Google Business Profile. That's where most local leads come from.",
      },
    ],
    nearby: ["hoddesdon", "potters-bar", "ware"],
  },
  {
    slug: "hoddesdon",
    name: "Hoddesdon",
    district: "Broxbourne",
    hook: "Websites that help local customers trust you.",
    lead: "Websites for Hoddesdon and Broxbourne businesses, designed, hosted and looked after for you.",
    localHeading: "A market town with local loyalty",
    local: [
      "Hoddesdon is an old market town with a strong local identity and a high street of independent shops, cafés and salons, plus plenty of trades serving Broxbourne and the Lee Valley.",
      "Local customers here like to stick with businesses they trust. Your website helps them trust you before they've even met you, with real photos, clear prices and an easy way to get in touch. I'll build it and look after it for you.",
    ],
    industries: ["tradespeople", "hair-and-beauty-salons", "cafes-and-restaurants", "cleaners", "dog-groomers-and-pet-services", "tutors"],
    faqs: [
      {
        q: "What if I don't have any photos?",
        a: "That's common. I'll show you how to take good ones on your phone, and I can use your logo and colours to make the site look great in the meantime.",
      },
      {
        q: "How long until my site is live?",
        a: "Most websites are live within a week of getting your details. I'll give you a date before we start.",
      },
    ],
    nearby: ["cheshunt", "ware", "hertford"],
  },
  {
    slug: "bishops-stortford",
    name: "Bishop's Stortford",
    district: "East Hertfordshire",
    hook: "Websites that win over a growing town's new residents.",
    lead: "Websites for Bishop's Stortford businesses, designed, hosted and looked after for you.",
    localHeading: "A growing town on the Essex border",
    local: [
      "Bishop's Stortford keeps growing, with new homes, new families and Stansted Airport just down the road. Its independent shops, restaurants and salons, and the trades that serve the new estates, have more potential customers than ever.",
      "New residents don't know who's good yet, so they search. I'll make sure your website shows up, makes a strong first impression and makes it easy for them to call, book or buy.",
    ],
    industries: ["tradespeople", "hair-and-beauty-salons", "cafes-and-restaurants", "cleaners", "tutors", "personal-trainers-and-gyms"],
    faqs: [
      {
        q: "Do you work with businesses over the border in Essex?",
        a: "Yes. Whether your customers are in Hertfordshire, Essex or both, I'll make sure your website speaks to them.",
      },
      {
        q: "Can I see the design before paying?",
        a: "Yes. I'll design your homepage for free first. You only pay the deposit if you're happy with it.",
      },
    ],
    nearby: ["ware", "hertford"],
  },
];

export const districts = [
  "North Hertfordshire",
  "Stevenage",
  "Welwyn Hatfield",
  "East Hertfordshire",
  "St Albans",
  "Dacorum",
  "Watford",
  "Three Rivers",
  "Hertsmere",
  "Broxbourne",
];

export function getTown(slug: string) {
  return towns.find((t) => t.slug === slug);
}

export function shortName(town: Town) {
  return town.short ?? town.name;
}
