// import taskBanner from '../assets/Banner/banner-2.png'
import { useEffect, useState } from 'react';
import taskBanner from '../assets/Banner/banner-2.png'
 
const ViewTasks = () => {
    const [task,setTask] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            setTask(data);
        })
    },[])
    return (
        <div>
              <div
        className="hero h-[350px]"
        style={{backgroundImage: `url(${taskBanner})`}}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-slate-900 bg-white p-2 rounded-lg bg-opacity-30">My Tasks</h1>
          </div>
        </div>
      </div>
      <h2>Total tasks: {task.length}</h2>


        </div>
    );
};

export default ViewTasks;