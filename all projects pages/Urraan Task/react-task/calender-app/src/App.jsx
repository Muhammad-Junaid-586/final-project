import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { generateDate, months } from "./utils/calender";
import cn from "./utils/cn";
import dayjs from "dayjs";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function App() {
  const [count, setCount] = useState(0);
  console.log(generateDate());

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="flex w-1/2 mx-auto gap-5 divide-x-2 h-screen items-center">
      <div className="w-96 h-96 ">
        <div className="flex justify-between">
          <h1 className=" font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <GrFormPrevious
              className=" w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() - 1))}
            />
            <h1
              className=" cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className=" w-5 h-5 cursor-pointer"
              onClick={() => setToday(today.month(today.month() + 1))}
            />
          </div>
        </div>
        <div className=" w-full grid grid-cols-7 text-gray-500">
          {days.map((day, ind) => {
            return (
              <h1
                className=" font-bold h-14 grid place-content-center"
                key={ind}
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, ind) => {
              return (
                <div className=" h-14 grid place-content-center" key={ind}>
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-300",
                      today ? "bg-red-600 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="h-96 w-96 px-5">
        <h1 className=" font-semibold">
          Shedule for {selectDate.toDate().toDateString()}
        </h1>
        <p>No meeting for today</p>
      </div>
    </div>
  );
}

export default App;
