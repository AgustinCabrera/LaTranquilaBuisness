import Banner from "@/components/banner/banner";
import BookingForm from "@/components/bookingForm/bookingForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen ">
      <header>
        <Banner />
      </header>

      <div className="border flex items-center justify-center">
        <div className=" flex max-w-3xl items-center ">
          <BookingForm />
        </div>

      </div>

      <div className="flex  items-center justify-center ">

        <div className="flex flex-col items-center justify-center gap-4 max-w-6xl px-4 sm:flex-row sm:justify-between pb-10 w-screen ">
          {/* Contenedor texto */}
          <div className="w-1/2  text-center sm:text-left  ">
          <h1 className="text-2xl mb-4 font-[family-name:var(--poppins)] ">
              La Tranquila: Casa de la Costa
            </h1>
            <p className="text-gray-700 leading-7 px-2 font-[family-name:var(--poppins)] ">
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
          {/* Contenedor título e imagen */}
          <div className="w-1/2 flex flex-col items-center  ">
            <div className=" max-h-[70vh] overflow-hidden rounded-lg shadow-lg ">
              <img
                src="/home/home.jpg"
                alt="home"
                className=" "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}