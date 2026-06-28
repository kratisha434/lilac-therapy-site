type CTAProps = {
  onOpen: () => void;
};

export default function CTA({ onOpen }: CTAProps) {
  return (
    <section className="section bg-primary text-white text-center">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
          Begin Therapy at a Pace That Feels Right for You
        </h2>

        <p className="text-lg mb-10 opacity-90">
          If you’re feeling overwhelmed, anxious, or emotionally exhausted,
          therapy can offer a supportive space to slow down and gain clarity.
          Dr. Maya Reynolds provides evidence-based therapy for adults in
          Santa Monica and secure telehealth across California.
        </p>

        <button
          onClick={onOpen}
          className="btn-secondary"
        >
          Schedule a Consultation
        </button>

      </div>
    </section>
  );
}