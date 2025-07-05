export default function FeesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="h2 mb-6">
            Session Fees
          </h2>
          <p className="body-text text-lg text-secondary-text">
            Transparent pricing for quality psychological care
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center py-12 border-b border-gray-200">
            <h3 className="h3 mb-4 text-primary-text">
              Individual Session
            </h3>
            <div className="text-4xl md:text-5xl font-serif text-primary-text mb-4">
              $200
            </div>
            <p className="body-text text-lg text-secondary-text">
              One-on-one therapy session (50 minutes)
            </p>
          </div>
          
          <div className="text-center py-12 border-b border-gray-200">
            <h3 className="h3 mb-4 text-primary-text">
              Couples Session
            </h3>
            <div className="text-4xl md:text-5xl font-serif text-primary-text mb-4">
              $240
            </div>
            <p className="body-text text-lg text-secondary-text">
              Relationship counseling session (60 minutes)
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="body-text text-lg text-secondary-text max-w-3xl mx-auto">
            Insurance is not accepted, but a superbill is provided for self-submission to your insurance provider for potential reimbursement.
          </p>
        </div>
      </div>
    </section>
  );
}