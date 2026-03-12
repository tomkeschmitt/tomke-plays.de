export default function HomePage() {
  return (
    <main className="pt-24 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        Willkommen auf TomkePlays.de
      </h1>

      <p className="text-lg mb-8">
        Hier findest du alle Infos zu meinen Projekten, Links und Videos.
      </p>

      <div className="grid gap-6 md:grid-cols-3">

        <a
          href="/links"
          className="p-6 border rounded-lg hover:shadow transition"
        >
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <p>Alle wichtigen Plattformen auf einen Blick.</p>
        </a>

        <a
          href="/shop"
          className="p-6 border rounded-lg hover:shadow transition"
        >
          <h2 className="text-xl font-semibold mb-2">Shop</h2>
          <p>Merch und Projekte entdecken.</p>
        </a>

        <a
          href="https://www.youtube.com/@TomkePlays"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded-lg hover:shadow transition"
        >
          <h2 className="text-xl font-semibold mb-2">YouTube</h2>
          <p>Meine neuesten Videos ansehen.</p>
        </a>

      </div>

    </main>
  );
}