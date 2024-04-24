import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

export default function Menu({ menu }: { menu: { items: Item[] } }) {
  return (
    <main className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        {menu.items.length ? (
          <div className='flex flex-wrap justify-between'>
            {menu.items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className='flex flex-wrap justify-between'>
            This restaurant does not have a menu!
          </div>
        )}
      </div>
    </main>
  );
}
