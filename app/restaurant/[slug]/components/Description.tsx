import RestaurantNavbar from "./RestaurantNavbar";
import ReviewCard from "./ReviewCard";

export default function Description() {
  return (
    <div className='bg-white w-[70%] rounded p-3 shadow'>
      <RestaurantNavbar />

      {/* TITLE */}
      <div className='mt-4 border-b pb-6'>
        <h1 className='font-bold text-6xl'>Milestones Grill</h1>
      </div>

      {/* RATING */}
      <div className='flex items-end'>
        <div className='ratings mt-2 flex items-center'>
          <p>*****</p>
          <p className='text-reg ml-3'>4.9</p>
        </div>
        <div>
          <p className='text-reg ml-4'>600 Reviews</p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className='mt-4'>
        <p className='text-lg font-light'>
          The classics you love prepared with a perfect twist, all served up in
          an atmosphere that feels just right. That’s the Milestones promise.
          So, whether you’re celebrating a milestone, making the most of Happy
          Hour or enjoying brunch with friends, you can be sure that every
          Milestones experience is a simple and perfectly memorable one.
        </p>
      </div>

      {/* IMAGES */}
      <div>
        <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
          5 photos
        </h1>
        <div className='flex flex-wrap'>
          <img
            className='w-56 h-44 mr-1 mb-1'
            src='https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg'
            alt=''
          />
          <img
            className='w-56 h-44 mr-1 mb-1'
            src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg'
            alt=''
          />
          <img
            className='w-56 h-44 mr-1 mb-1'
            src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg'
            alt=''
          />
          <img
            className='w-56 h-44 mr-1 mb-1'
            src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg'
            alt=''
          />
          <img
            className='w-56 h-44 mr-1 mb-1'
            src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg'
            alt=''
          />
        </div>
      </div>

      {/* REVIEWS */}
      <div>
        <h1 className='font-bold text-3xl mt-10 mb-7 borber-b pb-5'>
          What 100 people are saying
        </h1>
        <div>
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}
