import React, { useState } from "react";
import { useEffect } from "react";

const Room = ({ roomNum, id, isSelected, onSelect }) => (
  <div
    className={`seat ${
      isSelected ? "bg-[#00ff00]" : "bg-red-400"
    } w-8 h-8 rounded-xl border-gray-400 border-2 text-sm flex items-center justify-center cursor-pointer hover:bg-[#00ff00] `}
    onClick={() => onSelect(id)}
  >
    {roomNum}
  </div>
);

const RoomChart = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [allRooms, setAllRooms] = useState([]);
  const hostel = Object.freeze({
    BH1: 276,
    BH2: 276,
    BH3: 276,
    BH4: 276,
    GH: 93,
    MTH: 282,
    KCH: 285,
  });

  const handleSeatSelect = (seatId) => {
    // Toggle seat selection
    let rooms = [...allRooms];
    let newRooms = rooms.map((item) => ({ ...item, isSelected: false }));

    setSelectedRoom(newRooms[seatId]);
    newRooms[seatId] = {
      id: seatId,
      roomNum: seatId + 101,
      isSelected: !rooms[seatId].isSelected,
    };
    setAllRooms(newRooms);
  };

  // Generate an array of seat components
  useEffect(() => {
    let rooms = [];
    for (let i = 0; i < hostel.KCH; i++) {
      rooms.push({
        id: i,
        roomNum: i + 101,
        isSelected: false,
        available: true,
      });
      setAllRooms(rooms);
    }
  }, []);

  const handleSubmit = () => {
    console.log("send room details");
    // TODO: Write the logic to send room details here
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div className="seat-chart min-w-1/3">
        <h2 className="text-center bg-[#ffa101] p-4 my-4 rounded-xl text-xl font-bold text-white">
          Select Your Room
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-9 lg:grid-cols-20 gap-2">
          {allRooms.map((room) => {
            return (
              <Room
                key={room.id}
                id={room.id}
                roomNum={room.id}
                isSelected={room.isSelected}
                onSelect={handleSeatSelect}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center w-full">
        <button
          type="button"
          class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default RoomChart;
