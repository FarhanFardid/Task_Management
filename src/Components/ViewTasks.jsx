import taskBanner from "../assets/Banner/banner-2.png";
import useTask from "../hooks/useTask";
import TaskRows from "./TaskRows";

const ViewTasks = () => {
  const [task] = useTask();
  return (
    <div>
      <div
        className="hero h-[350px]"
        style={{ backgroundImage: `url(${taskBanner})` }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-slate-900 bg-white p-2 rounded-lg bg-opacity-30">
              All Tasks
            </h1>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center py-3 text-black">
        Total Available Tasks: {task.length}
      </h2>

      <div className="m-4">
        <div className="overflow-x-auto">
          <table className="table mx-auto w-full m-5">
            <thead>
              <tr>
                <th>Task No.</th>
                <th>Task Id</th>
                <th>Task Title</th>
                <th>Task Description</th>
                <th>Task Status</th>
              </tr>
            </thead>

            {task.map((item, index) => (
              <TaskRows key={item._id} item={item} index={index}></TaskRows>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTasks;
