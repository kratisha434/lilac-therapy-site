export default function FAQ() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">
              Do you offer in-person or virtual sessions?
            </h3>
            <p className="text-sm">
              Dr. Reynolds offers in-person therapy sessions at her Santa Monica office, as well as telehealth
              sessions for adults located in California.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">
              What issues do you specialize in?
            </h3>
            <p className="text-sm">
              She works primarily with adults experiencing anxiety, trauma, burnout, and chronic stress, particularly
              individuals who are high-functioning but feel overwhelmed internally.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">
              What is your approach to therapy?
            </h3>
            <p className="text-sm">
              Her approach is collaborative and grounded, integrating evidence-based therapies such as CBT and EMDR
              with mindfulness and body-oriented techniques. Sessions are paced thoughtfully to support safety and
              emotional regulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
