import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  // console.log(services)

  return (
    // <section className='max-container flex justify-center flex-wrap gap-9'>
    //   {services.map((service) => (
    //     <ServiceCard key={service.label} {...service} />
    //   ))}
    // </section>
    <section className="flex">
      {services.map((service) => (
          <ServiceCard key={service.label} {...service} />

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