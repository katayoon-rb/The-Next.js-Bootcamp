import { Metadata } from "next";
import Header from "./components/Header";
import Form from "./components/Form";

export const metadata: Metadata = {
  title: "Reserve at Milestones Grill (Toronto) | OpenTable",
  description: "The Next.js Bootcamp Project",
};

export default function ReservationPage() {
  return (
    <>
      <div className='border-t h-screen'>
        <div className='py-9 w-3/5 m-auto'>
          <Header />
          <Form />
        </div>
      </div>
    </>
  );
}
