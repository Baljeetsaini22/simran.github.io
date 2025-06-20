
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ankit Sharma",
      role: "Marketing Manager, GlowUp",
      text: "Simran's designs helped us launch a bold brand identity that stood out. She's creative, quick, and super easy to work with!",
    },
    {
      id: 2,
      name: "Neha Verma",
      role: "Freelance Blogger",
      text: "I loved the Instagram templates Simran designed for me. My engagement went up and my feed finally looks aesthetic!",
    },
    {
      id: 3,
      name: "Ravi Kapoor",
      role: "Founder, Pixel Agency",
      text: "Simran delivers clean and powerful visuals that speak directly to the audience. A true design professional!",
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-fuchsia-400">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-fuchsia-500/20 transition"
            >
              <p className="text-gray-300 text-sm mb-4 italic">
                “{testimonial.text}”
              </p>
              <h3 className="text-teal-300 font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-gray-500 text-xs">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

