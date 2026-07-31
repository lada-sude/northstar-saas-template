export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">Terms of Service</h1>

      <div className="mt-8 space-y-6 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-950">Platform usage</h2>
          <p className="mt-2">
            Users agree to use this template responsibly and to keep their account information accurate and secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-950">Acceptable use</h2>
          <p className="mt-2">
            Avoid abusive or deceptive behavior, and use the starter in a way that aligns with the goals of your own product.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-950">Product customization</h2>
          <p className="mt-2">
            This template is intended to be customized for your own commercial product, and you should add your own legal language before selling it.
          </p>
        </section>
      </div>
    </main>
  );
}