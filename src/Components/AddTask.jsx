import { useForm } from "react-hook-form";
import addTaskImg from "../assets/Banner/add task.png";
import Swal from "sweetalert2";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // const newTask = {
    //   title: data.title,
    //   description: data.description,
    //   status: data.status,
    // };
    // console.log(newTask)
    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //         reset();
    //                 Swal.fire({
    //                   title: "Success",
    //                   text: "New Task Added to DB Successfully ",
    //                   icon: "success",
    //                   confirmButtonText: "Cool",
    //                 });
    //   }
    // });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-black py-4">
        Add a New Task
      </h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center justify-center">
          <div className="text-center lg:text-left w-full p-5">
            <img src={addTaskImg} alt="task Img" className="w-full" />
          </div>
          <div className="card w-full  shadow-2xl bg-base-300 m-8">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body m-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Task Title*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter task title"
                  name="title"
                  {...register("title", { required: true })}
                  className="input input-bordered"
                />
                {errors.title && (
                  <span className="text-red-700">
                    Task Title field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold">
                    Task Description*
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Enter Task Description"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-red-700">
                    Task Description field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Task Status</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Task status"
                  name="status"
                  {...register("status", { required: true })}
                  className="input input-bordered"
                />
                {errors.status && (
                  <span className="text-red-700">
                    Task status field is required
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-slate-800 text-white hover:bg-slate-600"
                  type="submit"
                  value="Add Task"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
