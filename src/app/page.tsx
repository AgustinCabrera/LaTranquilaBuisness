import Banner from "@/components/banner/banner";
import BookingForm from "@/components/bookingForm/bookingForm";

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
          <p className="text-gray-700 text-lg leading-7">
            En La Tranquila, un refugio natural a orillas del Río Paraná,
            desconéctate del estrés diario y sumérgete en la belleza de Aldea
            Brasilera. Con espacio para hasta diez personas, la casa ofrece
            habitaciones amplias y confortables, perfectas para el descanso.
            Disfruta del aire acondicionado en los días cálidos y relájate en la
            piscina privada o la playa exclusiva. Para los aventureros, una
            bajada de lanchas privada y un muelle para pesca te invitan a
            explorar el río. La Tranquila está equipada con todo lo necesario
            para que te sientas como en casa, desde sábanas frescas hasta un
            juego completo de toallas. Aquí, la naturaleza se convierte en tu
            hogar.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">
            La Tranquila: Casa de la Costa
          </h1>
          <img
            src="/home/home.jpg"
            alt="home"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
