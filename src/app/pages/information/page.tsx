import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBanSmoking,
  faRightFromBracket,
  faCheck,
  faFish,
  faDoorOpen,
  faBacon,
  faSailboat,
  faSnowflake,
  faUserFriends,
  faBath,
  faCar,
  faPaw,
  faWifi,
  faWaterLadder,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

const Information = () => {
  return (
    <div className="flex flex-col gap-8 p-6 bg-gray-100">
      {/* Introduction Section */}
      <section className="text-center bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Bienvenidos a La Tranquila
        </h1>
        <ul className="flex flex-wrap justify-center gap-4 mb-4 text-gray-800">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUserFriends} />
            10 Huéspedes
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDoorOpen} />
            3 Habitaciones
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} />
            10 Camas
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBath} />
            2 Baños
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          Casa quinta ubicada en Aldea Brasilera, con vistas panorámicas al Río
          Paraná.
        </p>


        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCar} />
            Estacionamiento
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPaw} />
            Pet Friendly
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWifi} />
            Internet
          </span>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">
          Comodidades
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-gray-800">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWaterLadder} />
            Piscina
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} />
            Sábanas
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBacon} />
            Desayuno de cortesía
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faShower} />
            Juego de toallas
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSnowflake} />
            Aire acondicionado
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSailboat} />
            Bajada de lanchas
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFish} />
            Muelle de pesca
          </div>
        </div>
      </section>

      {/* House Rules Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Reglas</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-gray-800">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} />
            Check-in: 10:00 AM
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Check-out: 11:00 AM
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBanSmoking} />
            Prohibido fumar
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">
          Política de administración
        </h2>
        <div className="text-gray-700">
          <p>
            El 50% del total al momento de la reserva, el resto en el check-in.
            En caso de cancelación, el dinero de reserva queda a favor para
            futura reserva.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Information;
