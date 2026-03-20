export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden pt-20">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-red from-gray-950 via-gray-950/80 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div>
          <span className="inline-block bg-amber-600/20 text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-amber-600/30">
            Non-Profit · Brooklyn Park, Minnesota
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Genancia{" "}
            <span className="text-amber-500">Beacon</span>{" "}
            of Hope
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
            We partner with local schools to provide textbooks and digital tools.
            We empower students and teachers in East Africa with resources and
            community support to enhance learning outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#donate"
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-amber-900/40 hover:shadow-amber-900/60 hover:-translate-y-0.5"
            >
              Make a Donation
            </a>
            <a
              href="#about"
              className="border border-white/20 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10">
            {[
              { value: "500+", label: "Textbooks Distributed" },
              { value: "50", label: "Tablets Provided" },
              { value: "5", label: "Schools Reached" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-amber-500">{stat.value}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image card */}
        <div className="hidden md:block relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/logo1.png"
              alt="Students in Kisii, Kenya"
              className="w-full h-[480px] object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/600x480/1a1a1a/amber?text=Students+in+Kisii";
              }}
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 bg-amber-600 text-white rounded-xl px-5 py-4 shadow-xl">
            <p className="text-xs font-medium opacity-80">Our Mission</p>
            <p className="text-sm font-bold mt-0.5 max-w-[180px] leading-snug">
              Empowering students in Kisii, Kenya with quality educational resources and community support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}