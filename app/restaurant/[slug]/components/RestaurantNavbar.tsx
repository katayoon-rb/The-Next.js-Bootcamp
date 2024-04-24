import Link from "next/link";

export default function RestaurantNavbar({
  id,
  slug,
}: {
  id: number;
  slug: string;
}) {
  const slugWithId = id + "_" + slug;
  return (
    <nav className='flex text-reg border-b pb-2'>
      <Link href={`/restaurant/${slugWithId}`} className='mr-7'>
        {" "}
        Overview{" "}
      </Link>
      <Link href={`/restaurant/${slugWithId}/menu`} className='mr-7'>
        {" "}
        Menu{" "}
      </Link>
    </nav>
  );
}
