import taskBanner from "../assets/Banner/banner-2.png";
import useTask from "../hooks/useTask";
import TaskTable from "./TaskTable";
const ManageTasks = () => {
  const [task, refetch] = useTask();
  return (
    <div>
      <div
        className="hero md:h-[350px] h-[250px]"
        style={{ backgroundImage: `url(${taskBanner})` }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 md:text-5xl text-2xl font-bold text-slate-900 bg-white p-2 rounded-lg bg-opacity-30">
              Manage Tasks
            </h1>
          </div>
        </div>
      </div>
      <h2 className=" md:text-2xl text-lg font-bold text-center  md:py-3 py-1 text-black">
        Total Tasks: {task.length}
      </h2>

      <div className="m-4">
        <div className="overflow-x-auto">
          <table className="table mx-auto w-full m-5">
            <thead>
              <tr>
                <th>Task No.</th>
                <th>Task Title</th>
                <th>Task Description</th>
                <th>Task Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            {task.map((item, index) => (
              <TaskTable
                key={item._id}
                item={item}
                index={index}
                refetch={refetch}
              ></TaskTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTasks;
