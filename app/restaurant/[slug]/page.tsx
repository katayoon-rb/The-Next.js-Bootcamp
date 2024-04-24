import Description from "./components/Description";
import ReservationCard from "./components/ReservationCard";
import RestaurantLayout from "./RestaurantLayout";

export default function RestaurantDetails() {
  return (
    <RestaurantLayout>
      <Description />
      <ReservationCard />
    </RestaurantLayout>
  );
}
