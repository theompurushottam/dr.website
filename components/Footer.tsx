export default function Footer() {
  return (
    <footer className="bg-primary-text text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="h4 mb-8 text-white font-serif">Dr. Serena Blake, PsyD</h3>
            <p className="text-gray-300 font-sans">
              Licensed Clinical Psychologist providing compassionate, evidence-based therapy 
              in Los Angeles and online.
            </p>
          </div>
          
          <div>
            <h3 className="h4 mb-8 text-white font-serif">Contact</h3>
            <div className="space-y-3 text-gray-300 font-sans">
              <p>1287 Maplewood Drive</p>
              <p>Los Angeles, CA 90026</p>
              <p>(323) 555-0192</p>
              <p>serena@blakepsychology.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="h4 mb-8 text-white font-serif">Office Hours</h3>
            <div className="space-y-3 text-gray-300 font-sans">
              <p>In-person: Tue & Thu, 10 AM–6 PM</p>
              <p>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-12 text-center text-gray-400">
          <p className="font-sans">&copy; 2024 Dr. Serena Blake, PsyD. All rights reserved.</p>
          <p className="mt-3 text-sm font-sans">
            Licensed Clinical Psychologist • California License #PSY12345
          </p>
        </div>
      </div>
    </footer>
  );
}