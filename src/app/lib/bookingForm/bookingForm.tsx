import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 shadow-md rounded-md">
      <div className="flex items-center gap-2 bg-gray-100 p-2 border border-gray-300 rounded-md">
        <DatePicker
          selected={arrivalDate}
          onChange={(date) => setArrivalDate(date)}
          placeholderText="Arrivo"
          className="bg-transparent w-32"
        />
        <span className="text-gray-400">→</span>
        <DatePicker
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
          placeholderText="Salida"
          className="bg-transparent w-32"
        />
      </div>
      <div>
        <select className="border border-gray-300 p-2 rounded-md">
          <option value="" disabled selected hidden>
            Huéspedes
          </option>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        Reservar
      </button>
    </div>
  );
}
