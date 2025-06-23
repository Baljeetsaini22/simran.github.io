

const educationData = [
  {
    title: "Bachelor of Art",
    institution: "Punjabi University",
    year: "Pursuing",
    shadow: "shadow-orange-500",
  },
  {
    title: "Intermediate (12th)",
    institution: "",
    year: "2022 - 2023",
    shadow: "shadow-blue-500" 
  },
  {
    title: "Matriculation (10th)",
    institution: "",
    year: "2020 - 2021",
    shadow: "shadow-pink-500"
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-black text-white w-full h-auto px-[7.5%] py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-10 bg-[#ffe600] text-transparent bg-clip-text">
          Education
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-xl shadow-[0_-5px_5px] ${edu.shadow} hover:shadow-[0_5px_5px] hover:${edu.shadow} transform hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{edu.title}</h3>
              <p className="text-sm text-gray-400">{edu.institution}</p>
              <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
