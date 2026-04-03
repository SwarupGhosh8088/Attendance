import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { FaFileExport } from "react-icons/fa";

function App() {
  const numStart = 128;
  const totalStudents = 63;
  const [presentStudents, setPresentStudents] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  }
  const closePopup = () => {
    setIsOpen(false);
  } 


  const handleAttendance = (roll) => {
    if (presentStudents.includes(roll)) {
      setPresentStudents(presentStudents.filter((student) => student !== roll));
    } else {
      setPresentStudents([...presentStudents, roll]);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(presentStudents.join(","));
    alert("Copied: " + presentStudents.join(","));
  };

  return (
    <>
      <h1 className="  bg-slate-700 text-amber-50 p-3 flex justify-center align-center text-xl fixed w-full top-0 shadow-2xl">
        Roll Number Attendance System
      </h1>
      <div className=" h-auto w-auto bg-mist-200">
        <h1 className="flex justify-center    shadow-2xl p-1 bg-orange-400 mt-13 ">
          Attendance System BCA "C"{" "}
        </h1>

        <div className="flex flex-wrap justify-around p-5">
          {Array.from({ length: totalStudents }, (_, i) => i + numStart).map(
            (rollNumber) => (
              <div
                key={rollNumber}
                className="flex justify-center align-center m-2"
              >
                <button
                  key={rollNumber}
                  onClick={() => handleAttendance(rollNumber)}
                  className={` p-3 rounded-lg hover:transform hover:scale-105 text-xl w-20 ${presentStudents.includes(rollNumber) ? "bg-green-500" : "bg-red-500"}`}
                >
                  {rollNumber}
                </button>
              </div>
            ),
          )}
        </div>
      </div>
      <hr />
      <div className="bg-mist-200 p-4 flex  justify-center gap-4">

        <button
          className="bg-green-500   text-white p-3  rounded-lg flex items-center gap-2 hover:bg-green-600"
          onClick={() => {
            handleCopy();
            openPopup();
          }}
        >
          <FaCopy className="text-2xl" /> Copy Present
        </button>
        <button className="bg-blue-600  text-white p-3 rounded-lg flex items-center gap-2 hover:bg-blue-800">
          <FaFileExport className="text-2xl" /> Export TXT
        </button>

      </div>
      <div className="bg-mist-200 p-4 flex gap-10  justify-center items-center">
        <h1 className="text-lg font-bold flex flex-col justify-center align-center"> <AiOutlineTeam className="text-3xl text-indigo-700 ml-3"/> Total: {totalStudents}</h1>
        <h1 className="text-md flex flex-col justify-center align-center"> <BsCheckCircle className="text-3xl text-green-500 ml-3"/>Present: {presentStudents.length}</h1>
        <h1 className="text-md flex flex-col justify-center align-center"> <BsXCircle className="text-3xl text-red-500 ml-3"/>  Absent :{totalStudents - presentStudents.length}</h1>
        
      </div>


      <footer className="bg-amber-700 flex justify-center align-center text-sm  text-amber-50">
        Developed by &copy; Swarup Ghosh
      </footer>



       {isOpen && (
        // Overlay background
        <div
          className="fixed inset-1 top-5   bg-opacity-50 flex justify-center items-center"
        >
          {/* Centered popup */}
          <div className="bg-white p-4 shadow-lg  relative rounded-2xl flex flex-col justify-center items-center w-auto p-3" >
            <p className="text-xl font-serif">Copied to clipboard: {presentStudents.join(",")}</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}


    </>
  );
}

export default App;
