import { Metadata } from "next";
import { Location, PrismaClient } from "@prisma/client";
import Description from "./components/Description";
import ReservationCard from "./components/ReservationCard";
import RestaurantLayout from "./RestaurantLayout";

export const metadata: Metadata = {
  title: "Milestones Grill (Toronto) | OpenTable",
  description: "The Next.js Bootcamp Project",
};

export interface RestaurantPageProps {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  location: Location;
}

const prisma = new PrismaClient();
const fetchRestaurantsBySlugs = async (slug: string, id: number) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug, id },
  });
  if (!restaurant) throw new Error();
  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const id = parseInt(params.slug.split("_")[0]);
  const slug = params.slug.split("_")[1];
  const restaurant = await fetchRestaurantsBySlugs(slug, id);

  return (
    <RestaurantLayout slug={params.slug}>
      <Description restaurant={restaurant} />
      <ReservationCard />
    </RestaurantLayout>
  );
}
