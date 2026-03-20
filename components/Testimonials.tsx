const testimonials = [
  {
    name: "Akinyi M.",
    role: "University Student, Kisii",
    quote:
      "I managed to attend a national university because of the improved quality of education. Thanks to GBH, I had the resources I needed to succeed.",
    img: "/images/testimonial-2.jpg",
  },
  {
    name: "Brian O.",
    role: "Secondary School Graduate",
    quote:
      "The tablets and digital library changed everything. I could study even without electricity. GBH gave us a real chance at a better future.",
    img: "/images/testimonial-2.jpg",
  },
  {
    name: "Faith W.",
    role: "Teacher, Kisii County",
    quote:
      "The teacher training workshops transformed how I deliver lessons. My students are more engaged and their results have improved significantly.",
    img: "/images/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Stories of Change</span>
          <h2 className="text-4xl font-extrabold text-white mt-3">
            Testimonials
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Hear directly from the students and teachers whose lives have been transformed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-white/5 rounded-2xl p-7 flex flex-col gap-5 hover:border-amber-600/30 transition-colors"
            >
              {/* Quote mark */}
              <span className="text-amber-500 text-5xl font-serif leading-none">"</span>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                {t.quote}
              </p>
              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-600"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/80/d97706/white?text=${t.name[0]}`;
                  }}
                />
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}