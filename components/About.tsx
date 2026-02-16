export default function About() {
  return (
    <section className="section bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src="/images/Dr. Maya Reynolds.png"
            alt="Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica"
            className="rounded-2xl shadow-lg object-cover w-full aspect-[4/5]"

          />
        </div>

        {/* Text Content */}
        <div>
          <p className="section-label">About Dr. Maya Reynolds</p>

          <h2 className="section-title font-heading">
            A Warm, Grounded Approach to Anxiety & Trauma Therapy
          </h2>

          <div className="divider"></div>

          <p className="text-lg mb-5">
            Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist based in Santa Monica, California. She works with adults experiencing anxiety, trauma, burnout, and chronic stress — especially those who appear high-functioning on the outside but feel overwhelmed internally.
          </p>

          <p className="text-lg mb-8">
            Her approach is collaborative and thoughtfully paced, integrating evidence-based therapies such as CBT and EMDR with mindfulness and body-oriented techniques. Sessions are structured enough to feel supportive while allowing space for reflection, depth, and lasting insight.
          </p>

          <button className="btn-secondary">
            Learn More About My Approach
          </button>
        </div>

      </div>
    </section>
  );
}
