"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import { partySize as partySizes, times } from "@/data";
import useAvailabilities from "@/hooks/useAvailabilities";
import { convertToDisplayTime, Time } from "@/utils/convertToDisplayTime";

export default function ReservationCard({
  id,
  openTime,
  closeTime,
  slug,
}: {
  id: number;
  openTime: string;
  closeTime: string;
  slug: string;
}) {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState("2");
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const handleClick = () => {
    fetchAvailabilities({ id, slug, day, time, partySize });
  };

  const filterTimeByRestaurantOpenWindow = () => {
    const timesWithinWindow: typeof times = [];
    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) isWithinWindow = true;
      if (isWithinWindow) timesWithinWindow.push(time);
      if (time.time === closeTime) isWithinWindow = false;
    });
    return timesWithinWindow;
  };

  return (
    <div className='fixed w-[17%] right-[19vw] bottom-[3vh] bg-white rounded p-3 shadow'>
      <div className='text-center border-b pb-2 font-bold'>
        <h4 className='mr-7 text-lg'>Make a Reservation</h4>
      </div>
      <div className='my-3 flex flex-col'>
        <label htmlFor=''>Party size</label>
        <select
          name=''
          className='py-3 px-4 border-b font-light'
          id=''
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        >
          {partySizes.map((size) => (
            <option key={id + "-" + size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col w-[48%]'>
          <label htmlFor=''>Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            className='py-3 border-b font-light text-reg w-24'
            dateFormat='MMMM d'
            wrapperClassName='w-[48%]'
          />
        </div>
        <div className='flex flex-col w-[48%]'>
          <label htmlFor=''>Time</label>
          <select
            name=''
            id=''
            className='py-3 border-b font-light'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {filterTimeByRestaurantOpenWindow().map((time) => (
              <option key={id + "-" + time.displayTime} value={time.time}>
                {time.displayTime}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='mt-5'>
        <button
          className='bg-red-600 rounded w-full text-white font-medium p-3'
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress className='w-[18px]' color='inherit' />
          ) : (
            "Find a Time"
          )}
        </button>
      </div>
      {data && data.length ? (
        <div className='mt-4'>
          <p className='text-reg'>Select a Time</p>
          <div className='flex flex-wrap mt-2'>
            {data.map((time) => {
              return time.available ? (
                <Link
                  key={id + "-" + time}
                  href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                  className='bg-red-600 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3'
                >
                  <p className='text-sm font-bold'>
                    {convertToDisplayTime(time.time as Time)}
                  </p>
                </Link>
              ) : (
                <p className='bg-gray-300 p-2 w-24 mb-3 rounded mr-3'></p>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
