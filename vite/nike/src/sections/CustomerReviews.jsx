import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {

  return (
    <section className="max-container flex items-center">
      <div className="flex flex-col">
        <h2 className="text-4xl font-palanquin font-bold text-center">What do our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="info-text text-center">Here genuine stories from our satisfied customers about their exceptional experiences with us</p>
        <div className="flex mt-24 justify-evenly">
        {reviews.map((xd)=>(
          <ReviewCard key={xd.customerName} {...xd}/>
        ))}
        </div>
      </div>
    </section>













    // <section className="max-container items-center">
    //   <h3 className="text-4xl font-palanquin font-bold text-center">What do our <span className="text-coral-red">Customers</span> Say?</h3>
    //   <p className="mt-4 info-text text-center">Hear genuine stories from our satisfied customers about their
    //      exceptional experiences with us.</p>
    //   <div className="mt-24 flex justify-evenly max-lg:flex-col">
    //     {reviews.map((review) => (
    //       <ReviewCard key={review.imgURL} {...review} />
    //     ))}
    //   </div>

    // </section>

















  );
};

export default CustomerReviews;
