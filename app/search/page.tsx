import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const select = {
  id: true,
  name: true,
  main_image: true,
  price: true,
  cuisine: true,
  location: true,
  slug: true,
};

const fetchRestaurantByCity = (city: string | undefined) => {
  if (!city) return prisma.restaurant.findMany({ select: select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: { equals: city.toLowerCase() },
      },
    },
    select: select,
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantByCity(searchParams.city);
  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSideBar />
        <div className='w-5/6'>
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
}
