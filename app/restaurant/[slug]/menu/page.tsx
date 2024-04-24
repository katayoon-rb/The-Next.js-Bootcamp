import { Metadata } from "next";
import { PrismaClient } from "@prisma/client";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";
import RestaurantLayout from "../RestaurantLayout";

export const metadata: Metadata = {
  title: "Menu of Milestones Grill (Toronto) | OpenTable",
  description: "The Next.js Bootcamp Project",
};

const prisma = new PrismaClient();
const fetchItems = async (slug: string, id: number) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug, id },
    select: { items: true },
  });
  if (!restaurant) throw new Error();
  return restaurant;
};

export default async function RestaurantMenuPage({
  params,
}: {
  params: { slug: string };
}) {
  const id = parseInt(params.slug.split("_")[0]);
  const slug = params.slug.split("_")[1];
  const items = await fetchItems(slug, id);

  return (
    <RestaurantLayout slug={params.slug}>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNavbar id={id} slug={slug} />
        <Menu menu={items} />
      </div>
    </RestaurantLayout>
  );
}
