export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-32" data-testid="terms-page">
      <h1 className="text-4xl text-studio-text sm:text-5xl lg:text-6xl" data-testid="terms-page-heading">
        Terms & Conditions
      </h1>
      <p className="mt-6 text-base text-studio-text/75" data-testid="terms-page-intro">
        By using this website and submitting inquiry details, you agree to our basic business terms.
      </p>
      <div className="mt-8 space-y-6 text-sm text-studio-text/75" data-testid="terms-page-content">
        <p data-testid="terms-services-text">Project scope, timelines, and fees are finalized only after written confirmation.</p>
        <p data-testid="terms-content-text">Website content, images, and branding are property of G.J.INTERIORS DESIGN STUDIO.</p>
        <p data-testid="terms-liability-text">We are not liable for losses caused by delayed third-party vendor performance.</p>
        <p data-testid="terms-updates-text">Terms may be updated periodically without prior notice.</p>
      </div>
    </main>
  );
}