import Price from "@/components/Price";
import Stars from "@/components/Stars";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link";

interface Props {
  restaurant: {
    id: number;
    name: string;
    main_image: string;
    cuisine: Cuisine;
    location: Location;
    price: PRICE;
    slug: string;
    reviews: Review[];
  };
}

export default function RestaurantCard({ restaurant }: Props) {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else "";
  };

  return (
    <div className='border-b flex py-4'>
      <img
        src={restaurant.main_image}
        alt=''
        className='w-44 rounded bg-cover'
      />
      <div className='pl-5'>
        <h2 className='text-3xl mb-3'>{restaurant.name}</h2>
        <div className='flex items-start'>
          <div className='flex mb-2'>
            <Stars id={restaurant.id} reviews={restaurant.reviews} />
          </div>
          <p className='ml-2 text-sm'>{renderRatingText()}</p>
        </div>
        <div className='mb-4'>
          <div className='font-light flex text-reg'>
            <Price price={restaurant.price} />
            <p className='mr-4'>{restaurant.cuisine.name}</p>
            <p className='mr-4'>{restaurant.location.name}</p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`/restaurant/${restaurant.id}_${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
