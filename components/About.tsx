export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/logo2.png"
              alt="Children learning"
              className="w-full h-[420px] object-cover"
            />
          </div>
          {/* Accent block */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-100 rounded-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-600 rounded-2xl -z-10 opacity-20" />
        </div>

        {/* Content */}
        <div>
          <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">Who We Are</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
            About <span className="text-amber-600">Us</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Genancia Beacon of Hope is a non-profit organization dedicated to improving
            education access for children in East Africa. Based in Brooklyn Park, Minnesota,
            we are passionate about supporting schools in Kenya particularly in Kisii to
            empower students and communities through quality education.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our work aligns with Kenya's Vision 2030 and the UN Sustainable Development
            Goal 4 (Quality Education). By addressing textbook shortages, bridging the digital
            divide, and strengthening teacher capacity, we help students thrive academically
            and socially.
          </p>

          {/* Mission / Vision cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
              <p className="text-amber-700 font-bold text-sm mb-1">Our Mission</p>
              <p className="text-gray-700 text-sm leading-snug">
                Partner with schools to provide textbooks, digital tools, and teacher training.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5">
              <p className="text-amber-400 font-bold text-sm mb-1">Our Vision</p>
              <p className="text-gray-300 text-sm leading-snug">
                Empower every student in Kisii, Kenya to achieve their full education potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}