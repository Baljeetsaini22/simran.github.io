

 function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-lime-300">Let's Work Together</h2>
      <p className="mb-6">Want to collaborate or hire me? Drop a message below!</p>
      <a
        href="mailto:simran@example.com"
        className="inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition"
      >
        Email Me
      </a>
      </div>
    </section>
  );
} 

export default Contact;
