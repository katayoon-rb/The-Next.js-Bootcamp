import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import RestaurantLayout from "../RestaurantLayout";

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
