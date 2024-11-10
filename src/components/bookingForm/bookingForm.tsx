import { useState } from 'react';
import './bookingForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm: React.FC = () => {
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  return (
    <div className="booking-form">
      <div className='date-inputs'>
        <DatePicker
          selected={arrivalDate}
          onChange={(date: Date | null) => setArrivalDate(date)}
          placeholderText='Arrivo'
          className='date-picker'
        />
        <span className='arrow'>→</span>
        <DatePicker
          selected={departureDate}
          onChange={(date: Date | null) => setDepartureDate(date)}
          placeholderText='Salida'
          className='date-picker'
        />
      </div>
      <form>
        <label>
          <select name="guests" defaultValue="">
            <option value="" disabled hidden>Huespedes</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
