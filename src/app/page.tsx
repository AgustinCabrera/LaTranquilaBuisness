import Banner from "@/components/banner/banner";
import BookingForm from "@/components/bookingForm/bookingForm";
import Text from "./lib/text";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <header>
        <Banner />
      </header>
      <div className="w-full max-w-3xl items-center">
        <BookingForm />
      </div>
      <div className="flex flex-col items-center gap-8 w-full max-w-6xl px-4 sm:flex-row sm:justify-between">
        <div className="max-w-lg text-center sm:text-left">
          <Text/>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">
            La Tranquila: Casa de la Costa
          </h1>
          <img src="/home/home.jpg"alt="home" className="rounded-lg shadow-lg"/>
        </div>
      </div>
    </div>
  );
}
