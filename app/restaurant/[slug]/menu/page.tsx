import { Metadata } from "next";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import RestaurantLayout from "../RestaurantLayout";

export const metadata: Metadata = {
  title: "Menu of Milestones Grill (Toronto) | OpenTable",
  description: "The Next.js Bootcamp Project",
};

export default function RestaurantMenuPage() {
  return (
    <RestaurantLayout>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNavbar />
        <Menu />
      </div>
    </RestaurantLayout>
  );
}
