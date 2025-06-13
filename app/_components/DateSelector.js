"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";
import { useEffect, useState } from "react";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr?.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;
  const numNights = differenceInDays(displayRange?.to, displayRange?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const [monthsToShow, setMonthsToShow] = useState(2);

  useEffect(() => {
    // Function to update months based on window width
    function handleResize() {
      setMonthsToShow(window.innerWidth < 640 ? 1 : 2); // 640px is Tailwind's 'sm' breakpoint
    }
    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="py-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        // captionLayout="dropdown"
        showOutsideDays
        captionLayout="dropdown-buttons"
        numberOfMonths={monthsToShow}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex text-xs items-center justify-between px-2 sm:px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-center gap-2 sm:gap-6">
          <p className="flex gap-[.4rem] sm:gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-lg sm:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through sm:text-sm text-xs font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 p-1 sm:px-3 sm:py-2 text-xl text-center sm:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="text-center">
                <span className="text-sm sm:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-xl sm:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-1 sm:py-2 px-2 sm:px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
