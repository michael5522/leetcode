import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {

  return (

    <section className="max-container items-center">
      <h3 className="text-4xl font-palanquin font-bold text-center">What do our <span className="text-coral-red">Customers</span> Say?</h3>
      <p className="mt-4 info-text text-center">Hear genuine stories from our satisfied customers about their
         exceptional experiences with us.</p>
      <div className="mt-24 flex justify-evenly max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.imgURL} {...review} />
        ))}
      </div>

    </section>
  );
};

export default CustomerReviews;
