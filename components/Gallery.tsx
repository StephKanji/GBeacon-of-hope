const images = [
  { src: "/images/gallery-1.jpg", alt: "Students with textbooks" },
  { src: "/images/gallery-2.jpg", alt: "Teacher training workshop" },
  { src: "/images/gallery-1.jpg", alt: "Digital library session" },
  { src: "/images/gallery-2.jpg", alt: "Community forum" },
  { src: "/images/gallery-1.jpg", alt: "Girls in classroom" },
  { src: "/images/gallery-2.jpg", alt: "School distribution day" },
];

const placeholder = (i: number) =>
  `https://placehold.co/600x400/1a1a1a/d97706?text=Gallery+${i + 1}`;

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">In the Field</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3">
            Our <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            A glimpse into the lives we're touching across schools in Kisii, Kenya.
          </p>
        </div>

        {/* Uniform 3-column grid — all cards same height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl group bg-gray-100 aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = placeholder(i);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}