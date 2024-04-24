import Navbar from "@/components/Navbar";
import Header from "./components/Header";
import Description from "./components/Description";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navbar />
        <Header />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <Description />
          <ReservationCard />
        </div>
      </main>
    </main>
  );
}
