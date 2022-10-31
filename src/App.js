import { useState } from "react";
import Quotes from "./data.json";

function App() {
  const [quotes, setQuotes] = useState(Quotes);
  const [selectedDate, setSelectedDate] = useState();
  const [allData, setAllData] = useState(true);

  const filterDate = quotes.filter((date) => {
    return date.date === selectedDate;
  });

  return (
    <>
      <div className="main container mx-auto my-5">
        <h1 className="text-4xl font-bold underline">Hello!</h1>
        <h2 className="text-1xl">Welcome To Date Filter Application</h2>
      </div>

      <div className="container mx-auto my-10 dateSec flex justify-between items-center">
        <div className="date">
          <input
            type="date"
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setAllData(false);
            }}
            min={"2023-01-01"}
            max={"2023-01-30"}
            className="input rounded-lg input-md bg-blue-100 p-1.5"
          />
          <hr />
        </div>
        <div className="allData">
          <button
            className="rounded-lg input-md bg-blue-100 p-1.5 w-40"
            onClick={() => setAllData(true)}
          >
            All
          </button>
          <hr />
        </div>
        <div className="today">
          {selectedDate ? (
            <h3 className="text-lg rounded-lg input-md bg-blue-100 p-1.5">TODAY IS {selectedDate}</h3>
          ) : (
            <h3 className="text-lg rounded-lg input-md bg-blue-100 p-1.5">BEST QUOTES</h3>
          )}
          <hr />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-6">
        {allData
          ? quotes?.map((dt, index) => {
              return <Cart dt={dt} key={index} />;
            })
          : filterDate?.map((dt, index) => {
              return <Cart dt={dt} key={index} />;
            })}
      </div>
    </>
  );
}

export default App;

const Cart = (props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg p-5 bg-gray-600 text-white">
        <div className="name bg-blue-800 text-center mt-[-35px] rounded-lg p-1.5">
          <p>{props.dt.quat[1].author}</p>
        </div>
        <p className="mt-5">POST:- {props.dt.date}</p>
        <hr />
        <p>{props.dt.quat[0].text}</p>
      </div>

      <div className="rounded-lg p-5 bg-gray-600 text-white">
        <div className="name bg-blue-800 text-center  mt-[-35px] rounded-lg p-1.5">
          <p>{props.dt.quat1[1].author}</p>
        </div>
        <p className="mt-5">POST:- {props.dt.date}</p>
        <hr />
        <p>{props.dt.quat1[0].text}</p>
      </div>
    </div>
  );
};
