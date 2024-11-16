import Banner from "@/components/banner/banner";
import BookingForm from "@/components/bookingForm/bookingForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <header>
        <Banner />
        <BookingForm />
      </header>
      <div className="info-section">
        <div className="info-text">
        <p>
        En La Tranquila, un refugio natural a orillas del Río Paraná, 
        desconéctate del estrés diario y sumérgete en la belleza de Aldea Brasilera.
        Con espacio para hasta diez personas, la casa ofrece habitaciones amplias y 
        confortables, perfectas para el descanso. Disfruta del aire acondicionado en los 
        días cálidos y relájate en la piscina privada o la playa exclusiva.
        Para los aventureros, una bajada de lanchas privada y un muelle para pesca te invitan
        a explorar el río. La Tranquila está equipada con todo lo necesario para que te sientas 
        como en casa, desde sábanas frescas hasta un juego completo de toallas. Aquí, la naturaleza 
        se convierte en tu hogar.
        </p>
        </div>
        <div className="info-image">
          <h1>La Tranquila: Casa de la Costa </h1>
          <img src="/home/home.jpg" alt="home" />

        </div>

      </div>
        </div>
      </main>
    </div>
  );
}
