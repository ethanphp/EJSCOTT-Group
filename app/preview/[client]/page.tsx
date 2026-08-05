import { notFound } from "next/navigation";
import Image from "next/image";
import { clients } from "../clients";

export default async function ClientPreviewPage({
  params,
}: {
  params: Promise<{ client: string }>;
}) {
  const { client: slug } = await params;
  const client = clients[slug];

  if (!client) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <header className="flex items-center justify-between gap-4 border-b-2 border-cream/15 px-5 py-4 md:px-10">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="EJSCOTT Group"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg border-2 border-cream"
          />
          <div>
            <p className="font-display text-sm font-semibold tracking-tight text-cream">
              Preview for {client.name}
            </p>
            <p className="text-xs text-cream/50">
              Built by EJSCOTT Group — for review only
            </p>
          </div>
        </div>

        <a
          href={client.url}
          target="_blank"
          rel="noreferrer"
          className="sticker-sm hidden rounded-full bg-green px-4 py-2 text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none md:inline-block"
        >
          Open in new tab
        </a>
      </header>

      {client.note && (
        <div className="border-b-2 border-cream/15 bg-cream/5 px-5 py-2 text-center text-xs text-cream/60 md:px-10">
          {client.note}
        </div>
      )}

      <main className="flex-1">
        <iframe
          src={client.url}
          title={`${client.name} preview`}
          className="h-[calc(100vh-73px)] w-full border-0 bg-white"
        />
      </main>
    </div>
  );
}
