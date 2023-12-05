import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLoading } from "../../redux/slices/loaderSlice";
import Loader from "../common/Loader";

const Room = ({ roomNum, id, isSelected, onSelect }) => (
  <div
    className={`seat ${isSelected ? "bg-[#00ff00]" : "bg-red-400"
      } w-8 h-8 rounded-xl border-gray-400 border-2 text-sm flex items-center justify-center cursor-pointer hover:bg-[#00ff00] `}
    onClick={() => onSelect(id)}
  >
    {roomNum}
  </div>
);

const RoomChart = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading.value);
  const authToken = useSelector((store) => store.authToken.token);
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState('BH1')
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

    let hRooms;
    switch (selectedHostel) {
      case 'BH1':
        hRooms = hostel.BH1;
        break;
      case 'BH2':
        hRooms = hostel.BH2;
        break;
      case 'BH3':
        hRooms = hostel.BH3;
        break;
      case 'BH4':
        hRooms = hostel.BH4;
        break;
      case 'GH':
        hRooms = hostel.GH;
        break;
      case 'KCH':
        hRooms = hostel.KCH;
        break;
      case 'MTH':
        hRooms = hostel.MTH;
        break;

      default:
        break;
    }

    for (let i = 0; i < hRooms; i++) {
      rooms.push({
        id: i,
        roomNum: i + 101,
        isSelected: false,
        available: true,
      });
      setAllRooms(rooms);
    }
  }, [selectedHostel]);

  const handleSubmit = async () => {
    dispatch(updateLoading());
    await axios({
      url: `${process.env.REACT_APP_HOST}/api/room/update`,
      method: 'POST',
      headers: {
        'authToken': authToken
      },
      data: {
        roomNum: selectedRoom.roomNum,
        hostel: selectedHostel
      }
    }).then((res) => {
      dispatch(updateLoading());
      navigate('/payment');
    }).catch((err) => {
      alert('Error Occuerred, Please Try again later');
      dispatch(updateLoading());
    })
  };

  return loading ? <Loader /> : (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div className="seat-chart min-w-1/3">

        <div className="w-full flex justify-center">

          <div className="relative inline-block text-left">
            <div className="">
              <button
                type="button"
                className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                id="options-menu"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                {selectedHostel}
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
            {showDropdown && (<div className={`opacity-0 scale-95 transform transition-all ease-in-out duration-700 ${showDropdown ? "opacity-100" : "scale-100"
              } absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}>
              <div
                className="py-1 "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  onClick={() => { setSelectedHostel('BH1'); setShowDropdown(false); }}
                  className="cursor-pointer block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <span className="flex flex-col">
                    <span>BH1</span>
                  </span>
                </div>
                <div
                  onClick={() => { setSelectedHostel('BH2'); setShowDropdown(false); }}
                  className="cursor-pointer block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <span className="flex flex-col">
                    <span>BH2</span>
                  </span>
                </div>
                <div
                  onClick={() => { setSelectedHostel('BH3'); setShowDropdown(false); }}
                  className="cursor-pointer block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <span className="flex flex-col">
                    <span>BH3</span>
                  </span>
                </div>
                <div
                  onClick={() => { setSelectedHostel('BH4'); setShowDropdown(false); }}
                  className="cursor-pointer block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <span className="flex flex-col">
                    <span>BH4</span>
                  </span>
                </div>
                <div
                  onClick={() => { setSelectedHostel('GH'); setShowDropdown(false); }}
                  className="cursor-pointerk block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <span className="flex flex-col">
                    <span>GH</span>
                  </span>
                </div>
                <div
                  onClick={() => { setSelectedHostel('KCH'); setShowDropdown(false); }}
                  className="cursor-pointer block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <span className="flex flex-col">
                    <span>KCH</span>
                  </span>
                </div>
                <div
                  onClick={() => { setSelectedHostel('MTH'); setShowDropdown(false); }}
                  className="cursor-pointer block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  <span className="flex flex-col">
                    <span>MTH</span>
                  </span>
                </div>

              </div>
            </div>)}
          </div>

        </div>


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
          onClick={handleSubmit}
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default RoomChart;
