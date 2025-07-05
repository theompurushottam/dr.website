export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid-two-col">
          <div className="space-y-8">
            <h2 className="h2 mb-8">
              About Dr. Serena Blake
            </h2>
            <div className="space-y-6">
              <p className="body-text text-lg text-secondary-text">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p className="body-text text-lg text-secondary-text">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="h4 mb-4 text-primary-text">Experience</h4>
                <p className="body-text text-secondary-text">8 years of practice</p>
                <p className="body-text text-secondary-text">500+ sessions completed</p>
              </div>
              <div>
                <h4 className="h4 mb-4 text-primary-text">Education</h4>
                <p className="body-text text-secondary-text">PsyD, Clinical Psychology</p>
                <p className="body-text text-secondary-text">Licensed in California</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-96 lg:w-96 lg:h-[28rem]">
              <img 
                src="C:\Users\om\Pictures\Screenshots\Screenshot (107).png" 
                alt="Dr. Serena Blake" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}