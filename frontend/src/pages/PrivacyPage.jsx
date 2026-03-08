export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-32" data-testid="privacy-page">
      <h1 className="text-4xl text-studio-text sm:text-5xl lg:text-6xl" data-testid="privacy-page-heading">
        Privacy Policy
      </h1>
      <p className="mt-6 text-base text-studio-text/75" data-testid="privacy-page-intro">
        G.J.INTERIORS DESIGN STUDIO respects your privacy. We collect contact and project details
        you submit via forms only to respond to inquiries and provide design services.
      </p>
      <div className="mt-8 space-y-6 text-sm text-studio-text/75" data-testid="privacy-page-content">
        <p data-testid="privacy-data-use-text">Your details are used for communication, quotation, and service updates.</p>
        <p data-testid="privacy-no-resell-text">We do not sell your personal information to third parties.</p>
        <p data-testid="privacy-security-text">We apply reasonable security practices to protect your submitted data.</p>
        <p data-testid="privacy-contact-text">For privacy questions, contact: g.j.interiornavsari@gmail.com</p>
      </div>
    </main>
  );
}