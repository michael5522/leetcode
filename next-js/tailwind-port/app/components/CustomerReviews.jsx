import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className="text-4xl bold text-center font-bold">
        What our <span className="text-coral-red">Customers </span> say?
      </h3>
      <p className="m-auto mt-4 text-center info-text lg:max-w-lg">Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col">
        {reviews.map((xd) => (
          <ReviewCard {...xd} key={xd} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
