import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {


  return (
    <section className="flex max-container justify-center gap-9">
      {services.map((xd)=>(
        <ServiceCard key={xd.umgURL} {...xd}/>
      ))}
    </section>
  );
};

export default Services;

// {
//   imgURL: truckFast,
//     label: "Free shipping",
//       subtext: "Enjoy seamless shopping with our complimentary shipping service."
// },
