export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>

      <div className="mt-8 space-y-6 text-slate-600">
        <p>
          Northstar respects user privacy and is committed to protecting the personal information you share through this starter template.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-slate-950">Information we collect</h2>
          <p className="mt-2">
            We may collect account details, profile information, and technical data needed to support sign-in, protected routes, and your product experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-950">How we use it</h2>
          <p className="mt-2">
            Your data is used to provide authentication, personalize the dashboard experience, and support the product workflows present in this template.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-950">Data protection</h2>
          <p className="mt-2">
            We take reasonable steps to protect user information and prevent unauthorized access, but you should customize any compliance language for your final product.
          </p>
        </section>
      </div>
    </main>
  );
}