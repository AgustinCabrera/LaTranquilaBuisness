import Banner from "@/components/banner";
import BookingForm from "@/components/bookingForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <header>
        <Banner />
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-8 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-6 font-[family-name:var(--poppins)]">
                La Tranquila: Casa de la Costa
              </h1>
              <p className="text-gray-700 leading-7 font-[family-name:var(--poppins)]">
                En La Tranquila, un refugio natural a orillas del Río Paraná,
                desconéctate del estrés diario y sumérgete en la belleza de
                Aldea Brasilera. Con espacio para hasta diez personas, la casa
                ofrece habitaciones amplias y confortables, perfectas para el
                descanso. Disfruta del aire acondicionado en los días cálidos y
                relájate en la piscina privada o la playa exclusiva. Para los
                aventureros, una bajada de lanchas privada y un muelle para
                pesca te invitan a explorar el río. La Tranquila está equipada
                con todo lo necesario para que te sientas como en casa, desde
                sábanas frescas hasta un juego completo de toallas. Aquí, la
                naturaleza se convierte en tu hogar.
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/home/home.jpg"
                  alt="La Tranquila - Vista de la casa"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 font-[family-name:var(--poppins)]">
              Nuestras Instalaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Piscina Privada</h3>
                <p className="text-gray-600">
                  Disfruta de nuestra piscina privada con vistas al río.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Muelle para Pesca
                </h3>
                <p className="text-gray-600">
                  Perfecto para los amantes de la pesca y actividades acuáticas.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Habitaciones Confortables
                </h3>
                <p className="text-gray-600">
                  Amplias habitaciones con todas las comodidades para tu
                  descanso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 font-[family-name:var(--poppins)]">
              Reserva Tu Estadía
            </h2>
            <BookingForm />
          </div>
        </section>
      </main>
    </div>
  );
}
