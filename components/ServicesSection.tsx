export default function ServicesSection() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn effective coping strategies to manage anxiety and stress through evidence-based techniques including cognitive-behavioral therapy and mindfulness practices.",
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen communication and deepen connections in your relationships through personalized therapy sessions focused on building trust and understanding.",
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past experiences with compassionate, trauma-informed care that helps you process difficult emotions and build resilience for the future.",
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="h2 mb-6">
            Services & Specialties
          </h2>
          <p className="body-text text-lg text-secondary-text max-w-3xl mx-auto">
            Comprehensive psychological care tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="max-w-4xl mx-auto text-center">
              <h3 className="h3 mb-6 text-primary-text">
                {service.title}
              </h3>
              <p className="body-text text-lg text-secondary-text max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}