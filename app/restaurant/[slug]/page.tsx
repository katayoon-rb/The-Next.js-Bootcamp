import { Metadata } from "next";
import { Location, PrismaClient, Review } from "@prisma/client";
import Description from "./components/Description";
import ReservationCard from "./components/ReservationCard";
import RestaurantLayout from "./RestaurantLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Milestones Grill (Toronto) | OpenTable",
  description: "The Next.js Bootcamp Project",
};

export interface RestaurantPageProps {
  id: number;
  name: string;
  images: string[];
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  location: Location;
  reviews: Review[];
}

const prisma = new PrismaClient();
const fetchRestaurantsBySlugs = async (slug: string, id: number) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug, id },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      open_time: true,
      close_time: true,
      slug: true,
      location: true,
      reviews: true,
    },
  });
  if (!restaurant) notFound();
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
      <ReservationCard
        id={restaurant.id}
        openTime={restaurant.open_time}
        closeTime={restaurant.close_time}
        slug={restaurant.slug}
      />
    </RestaurantLayout>
  );
}
