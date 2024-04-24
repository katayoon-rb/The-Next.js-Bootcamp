import Header from "./components/Header";
import Description from "./components/Description";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails() {
  return (
    <>
      <Header />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        <Description />
        <ReservationCard />
      </div>
    </>
  );
}
