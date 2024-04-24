import Header from "./components/Header";

export default function RestaurantLayout({
  children,
  slug,
}: {
  children: React.ReactNode;
  slug: string;
}) {
  return (
    <>
      <Header name={slug} />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        {children}
      </div>
    </>
  );
}
