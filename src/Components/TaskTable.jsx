import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const TaskTable = ({ index, item, refetch }) => {
  const { _id, title, description, status } = item;

  const handleUpdate = (id) => {
    Swal.fire({
      title: "Mark Task As Completed?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire(
                "Updated!",
                "Task has been marked as completed.",
                "success"
              );
            } else {
              Swal.fire(
                "Error!",
                "Task has already been completed.",
                "warning"
              );
            }
          });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Remove From Task List?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Task has been deleted from List.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <tbody>
      <tr>
        <td className="font-bold">{index + 1}.</td>

        <td className="font-bold">{title}</td>

        <td className="font-bold">{description}</td>

        <td className="font-bold"> {status}</td>
        <td>
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-sm bg-green-700 text-white hover:bg-green-950 p-1 h-10"
          >
            Mark as Completed
          </button>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm bg-red-800 text-white hover:bg-red-900"
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TaskTable;
