import { useState } from "react";

type PaymentMethod = "visa" | "paypal" | "mpesa";

const PRESET_AMOUNTS = [25, 50, 100, 250];

export default function DonationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number | "">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("visa");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up real payment API calls here
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="donate" className="py-24 bg-amber-50">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-3">Thank You, {firstName}!</h3>
          <p className="text-gray-600 leading-relaxed">
            Your generous donation of <span className="font-bold text-amber-600">${finalAmount}</span> is
            making a real difference for students in Kisii, Kenya. We'll send a confirmation to{" "}
            <span className="font-medium">{email}</span>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-amber-600 underline underline-offset-4 text-sm"
          >
            Make another donation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="donate" className="py-24 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Info */}
        <div>
          <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">Give Today</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
            Make a <span className="text-amber-600">Donation</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Every dollar you give helps us put a textbook in a child's hand, a tablet in a
            classroom, and training in a teacher's toolkit. Your support creates lasting change.
          </p>

          {/* Impact breakdown */}
          <div className="space-y-4">
            {[
              { amount: "$25", impact: "Buys 5 textbooks for students in need" },
              { amount: "$50", impact: "Funds a full day of teacher training" },
              { amount: "$100", impact: "Provides a tablet + offline digital library" },
              { amount: "$250", impact: "Sponsors an entire classroom's resources" },
            ].map((item) => (
              <div key={item.amount} className="flex items-center gap-4">
                <span className="shrink-0 bg-amber-600 text-white font-bold text-sm w-16 py-1.5 rounded-lg text-center">
                  {item.amount}
                </span>
                <p className="text-gray-700 text-sm">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
        >
          {/* Amount selector */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3">Select Amount (USD)</label>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {PRESET_AMOUNTS.map((a) => (
                <button
                  type="button"
                  key={a}
                  onClick={() => { setAmount(a); setCustomAmount(""); }}
                  className={`py-2.5 rounded-xl text-sm font-bold border transition-colors ${
                    amount === a && !customAmount
                      ? "bg-amber-600 text-white border-amber-600"
                      : "border-gray-200 text-gray-700 hover:border-amber-400"
                  }`}
                >
                  ${a}
                </button>
              ))}
            </div>
            <input
              type="number"
              min="1"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-400"
            />
          </div>

          {/* Personal info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1.5">First Name</label>
              <input
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1.5">Last Name</label>
              <input
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-600 mb-1.5">Email Address</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Payment method */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3">Payment Method</label>
            <div className="flex gap-3">
              {/* Visa */}
              <button
                type="button"
                onClick={() => setPaymentMethod("visa")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-colors ${
                  paymentMethod === "visa"
                    ? "border-amber-600 bg-amber-50 text-amber-700"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="8" fill="#1A1F71"/>
                  <text x="6" y="32" fontSize="20" fontWeight="bold" fill="white">VISA</text>
                </svg>
                Visa
              </button>

              {/* PayPal */}
              <button
                type="button"
                onClick={() => setPaymentMethod("paypal")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-colors ${
                  paymentMethod === "paypal"
                    ? "border-amber-600 bg-amber-50 text-amber-700"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="8" fill="#003087"/>
                  <text x="4" y="32" fontSize="14" fontWeight="bold" fill="#009CDE">Pay</text>
                  <text x="22" y="32" fontSize="14" fontWeight="bold" fill="white">Pal</text>
                </svg>
                PayPal
              </button>

              {/* M-Pesa */}
              <button
                type="button"
                onClick={() => setPaymentMethod("mpesa")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-colors ${
                  paymentMethod === "mpesa"
                    ? "border-amber-600 bg-amber-50 text-amber-700"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <span className="text-green-600 font-black text-xs">M-PESA</span>
              </button>
            </div>
          </div>

          {/* M-Pesa phone field */}
          {paymentMethod === "mpesa" && (
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-600 mb-1.5">
                M-Pesa Phone Number
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+254 7XX XXX XXX"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading || (!finalAmount)}
            className="w-full bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors text-base shadow-md shadow-amber-200"
          >
            {loading
              ? "Processing…"
              : `Donate $${finalAmount || "—"} via ${
                  paymentMethod === "visa"
                    ? "Visa"
                    : paymentMethod === "paypal"
                    ? "PayPal"
                    : "M-Pesa"
                }`}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Secure &amp; encrypted. 100% goes to the cause.
          </p>
        </form>
      </div>
    </section>
  );
}