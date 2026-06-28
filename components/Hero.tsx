type HeroProps = {
  onOpen: () => void;
};

export default function Hero({ onOpen }: HeroProps) {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="section-label">
            Licensed Clinical Psychologist | Santa Monica, CA
          </p>

          <h1 className="font-heading text-5xl md:text-6xl leading-tight mb-6">
            Anxiety & Trauma Therapy in Santa Monica for Adults Who Feel
            Overwhelmed but Keep Pushing Through
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-xl text-neutral">
            Work through anxiety, trauma, and burnout with a licensed psychologist
            offering thoughtful, evidence-based therapy for adults in Santa Monica
            and across California.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={onOpen}
              className="btn-primary"
            >
              Schedule a Consultation
            </button>

            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/images/office2.jpeg"
            alt="Dr. Maya Reynolds office in Santa Monica"
            className="rounded-2xl shadow-lg object-cover w-full h-125"
          />
        </div>

      </div>
    </section>
  );
}