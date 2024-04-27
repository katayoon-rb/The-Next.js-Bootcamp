import RestaurantNavbar from "./RestaurantNavbar";
import ReviewCard from "./ReviewCard";
import { RestaurantPageProps } from "../page";
import { Restaurant } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import Stars from "@/components/Stars";

export default function Description({
  restaurant,
}: {
  restaurant: RestaurantPageProps;
}) {
  return (
    <div className='bg-white w-[70%] rounded p-3 shadow'>
      <RestaurantNavbar id={restaurant.id} slug={restaurant.slug} />

      {/* TITLE */}
      <div className='mt-4 border-b pb-6'>
        <h1 className='font-bold text-6xl'>{restaurant.name}</h1>
      </div>

      {/* RATING */}
      <div className='flex items-end'>
        <div className='ratings mt-2 flex items-center'>
          <Stars id={restaurant.id} reviews={restaurant.reviews} />
          <p className='text-reg ml-3'>
            {calculateReviewRatingAverage(restaurant.reviews)}
          </p>
        </div>
        <div>
          <p className='text-reg ml-4'>
            {restaurant.reviews.length} Review
            {restaurant.reviews.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className='mt-4'>
        <p className='text-lg font-light'>{restaurant.description}</p>
      </div>

      {/* IMAGES */}
      <div>
        <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
          {restaurant.images.length} photos
        </h1>
        <div className='flex flex-wrap'>
          {restaurant.images.map((img) => (
            <img
              key={restaurant.slug + restaurant.images.indexOf(img)}
              className='w-56 h-44 mr-1 mb-1'
              src={img}
              alt=''
            />
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div>
        <h1 className='font-bold text-3xl mt-10 mb-7 borber-b pb-5'>
          What 100 people are saying
        </h1>
        <div>
          {restaurant.reviews.map((review) => (
            <ReviewCard id={restaurant.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
