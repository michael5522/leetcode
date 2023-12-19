import { logos } from "../constants";
import { toolimages } from "../constants";
import SkillsCard from "../components/SkillsCard";
const Skills = () => {
  return (
    <section id='skills' className='max-container max-sm:mt-12'>
      <div className="flex flex-col items-center">
        <h2 className="text-8xl font-palanquin font-bold mt-9 max-sm:text-4xl">Skills
        </h2>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-sm:gap-0 gap-14">
        {logos.map((xd) => (
          <SkillsCard {...xd} key={xd.name} />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-8xl font-palanquin font-bold mt-10 max-sm:text-4xl">Tools
        </h2>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-sm:gap-0 gap-14 mb-9">
        {toolimages.map((xd) => (
          <SkillsCard {...xd} key={xd.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
