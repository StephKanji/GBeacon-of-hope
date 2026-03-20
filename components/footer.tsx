import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Image src="/logo1.png" alt="Genancia Logo" width={40} height={40} className="rounded-full" />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-white text-sm">Genancia</p>
              <p className="text-amber-500 text-xs">Beacon of Hope</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            A non-profit dedicated to improving education access for children in East Africa.
            Based in Brooklyn Park, Minnesota.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-white font-bold text-sm mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {["About Us", "Our Projects", "Gallery", "Testimonials", "Donate"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <p className="text-white font-bold text-sm mb-4">Contact Us</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>Brooklyn Park, Minnesota, USA</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🌐</span>
              <a href="https://genanciabeacon.com" className="hover:text-amber-400 transition-colors">
                genanciabeacon.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span>✉️</span>
              <a href="mailto:info@genanciabeacon.com" className="hover:text-amber-400 transition-colors">
                info@genanciabeacon.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Genancia Beacon of Hope. All rights reserved.</p>
        <p>made with ❤️ by Spiritbulb</p>
        <p>
          Aligned with{" "}
          <span className="text-amber-500">Kenya Vision 2030</span> &amp;{" "}
          <span className="text-amber-500">UN SDG 4</span>
        </p>
      </div>
    </footer>
  );
}