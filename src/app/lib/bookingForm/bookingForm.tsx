'use client'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  return (
    <div className="booking-form">
      <div className="date-inputs">
        <DatePicker
          selected={arrivalDate}
          onChange={(date: Date | null) => setArrivalDate(date)}
          placeholderText="Arrivo"
          className="date-picker"
        />
        <span className="arrow">→</span>
        <DatePicker
          selected={departureDate}
          onChange={(date: Date | null) => setDepartureDate(date)}
          placeholderText="Salida"
          className="date-picker"
        />
      </div>
      <form>
        <label>
          <select name="guests" defaultValue="">
            <option value="" disabled hidden>
              Huespedes
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
