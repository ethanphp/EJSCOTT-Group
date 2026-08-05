export type PreviewClient = {
  name: string;
  url: string;
  note?: string;
};

export const clients: Record<string, PreviewClient> = {
  // Add a client with: npx tsx -e or just edit below.
  // slug: { name: "Business Name", url: "https://staging-url.example.com" },
  demo: {
    name: "Demo Business",
    url: "https://example.com",
    note: "Sample entry — replace or remove once real clients are added.",
  },
  crewines: {
    name: "Cre Wines",
    url: "crewines.vercel.app",
    note: "Cre Wines - Initial Draft Preview",
  },
};
