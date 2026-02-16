import Image from "next/image";

export default function Office() {
  return (
    <section className="section bg-secondary">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div>
          <p className="section-label">Our Office</p>

          <h2 className="section-title font-heading">
            A Calm Space for Healing in Santa Monica
          </h2>

          <div className="divider"></div>

          <p className="text-lg mb-5">
            Dr. Maya Reynolds offers in-person therapy from a quiet,
            thoughtfully designed office in Santa Monica, California.
            The space is filled with natural light and arranged to feel
            grounding, private, and uncluttered.
          </p>

          <p className="text-lg mb-6">
            Many clients share that simply entering the space helps
            them feel more at ease. In addition to in-person sessions,
            secure telehealth appointments are available for adults
            across California.
          </p>

          <p className="text-sm text-primary">
            📍 123th Street 45 W, Santa Monica, CA 90401
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div>
          <Image
            src="/images/office2.jpeg"
            alt="Therapy office in Santa Monica with natural light"
            width={600}
            height={450}
            className="rounded-2xl shadow-lg object-cover w-full h-105"
          />
        </div>

      </div>
    </section>
  );
}
