export default function Services() {
  return (
    <section className="section bg-secondary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <p className="section-label">Areas of Focus</p>

        <h2 className="section-title font-heading mb-6">
          Thoughtful, Evidence-Based Therapy for Adults in Santa Monica
        </h2>

        <p className="section-subtitle mx-auto mb-16">
          Support for anxiety, trauma, and burnout — tailored to adults who are
          high-functioning on the outside but overwhelmed internally.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          
          {/* Card 1 */}
          <div className="card">
            <h3 className="font-heading text-2xl mb-4">
              Anxiety & Panic Therapy
            </h3>
            <p>
              Support for adults experiencing persistent worry, panic attacks,
              or anxiety that interferes with daily life. Therapy focuses on
              understanding anxiety patterns, building regulation skills, and
              creating practical tools to feel more grounded and in control.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <h3 className="font-heading text-2xl mb-4">
              Trauma Therapy
            </h3>
            <p>
              Trauma-informed therapy for adults impacted by single-incident
              or complex trauma. Dr. Reynolds integrates EMDR and
              body-based approaches to help clients process past
              experiences safely and at a manageable pace.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <h3 className="font-heading text-2xl mb-4">
              Burnout & Chronic Stress
            </h3>
            <p>
              Therapy for high-functioning adults experiencing emotional
              exhaustion, perfectionism, or chronic stress. Sessions focus on
              slowing down, restoring balance, and developing healthier ways
              to relate to work and personal expectations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
