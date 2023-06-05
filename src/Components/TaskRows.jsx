const TaskRows = ({ item, index }) => {
  const { _id, title, description, status } = item;
  return (
    <tbody>
      <tr>
        <td className="font-bold">{index + 1}.</td>
        <td className="font-bold">{_id}.</td>

        <td className="font-bold">{title}</td>

        <td className="font-bold">{description}</td>

        <td className="font-bold"> {status}</td>
      </tr>
    </tbody>
  );
};

export default TaskRows;
