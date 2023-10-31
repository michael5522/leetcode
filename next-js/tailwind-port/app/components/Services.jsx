import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {


  return (
    <section className="flex max-container justify-center gap-9">
      {services.map((xd) => (
        <ServiceCard key={xd.umgURL} {...xd} />
      ))}
    </section>
  );
};

export default Services;
