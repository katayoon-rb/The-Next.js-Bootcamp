import { Metadata } from "next";
import Description from "./components/Description";
import ReservationCard from "./components/ReservationCard";
import RestaurantLayout from "./RestaurantLayout";

export const metadata: Metadata = {
  title: "Milestones Grill (Toronto) | OpenTable",
  description: "The Next.js Bootcamp Project",
};

export default function RestaurantDetails() {
  return (
    <RestaurantLayout>
      <Description />
      <ReservationCard />
    </RestaurantLayout>
  );
}
