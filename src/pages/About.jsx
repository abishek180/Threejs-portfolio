import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Abishek
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          FrondEnd Developer based in Mars, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="font-semibold sm:text-3xl text-xl relative font-poppins">
          My Skills
        </h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default About;
