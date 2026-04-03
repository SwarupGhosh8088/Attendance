import { useState } from 'react'


function App() {

  const numStart=128
  const totalStudents=63
  const [presentStudents, setPresentStudents] = useState([])

  const handleAttendance = (roll) => {
    if(presentStudents.includes(roll)){
      setPresentStudents(presentStudents.filter((student) => student !== roll))
    }else{
      setPresentStudents([...presentStudents, roll])
    }

  }

  const handleCopy = () => {
    navigator.clipboard.writeText(presentStudents.join(","));
    alert("Copied: " + presentStudents.join(","));
  };
  

  return (
    <>
    <h1 className='bg-amber-400 p-3 flex justify-center align-center text-xl '>Roll Number Attendance System</h1>
      <div className=' h-auto w-auto bg-mist-200'>

        <h1 className='flex justify-center  text-amber-50 bg-amber-700 p-1'>Attendance System BCA "C" </h1>

        <div className='flex flex-wrap justify-around p-5'>
          {Array.from({ length: totalStudents }, (_, i) => i + numStart).map((rollNumber) => (
            <div key={rollNumber} className='flex justify-center align-center m-2'>
              <button key={rollNumber} onClick={ () => handleAttendance(rollNumber)} className={` p-3 rounded-lg hover:transform hover:scale-105 text-xl w-20 ${presentStudents.includes(rollNumber) ? 'bg-green-500' : 'bg-red-500'}`}>
                {rollNumber}
              </button>
            </div>
          ))}
        </div>

      </div>
          <hr />
      <div className='bg-mist-200 p-4 flex flex-col justify-center gap-4'>
        <button className='bg-green-500   text-white p-3  rounded-lg' onClick={handleCopy}>
          Copy Present Students
        </button>
        
      </div>

      
    </>
  )
}

export default App
