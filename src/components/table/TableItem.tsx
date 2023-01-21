import { Issue } from "../../@types/issue";
import StatusIcon from "../Status/StatusIcon";

type TableItemProps = {
  item: Issue;
};

function TableItem({ item }: TableItemProps) {
  const { message, name, status } = item;

  return (
    <tr
      key={message}
      className={status === "done" ? "bg-gray-300 opacity-50" : ""}
    >
      <td className="w-36">
        <input
          type="checkbox"
          className="mr-2"
          id={message}
          disabled={status === "done"}
          checked={status === "done"}
        />
        <label htmlFor={message}>{name}</label>
      </td>

      <td>
        <label htmlFor={message}>{message}</label>
      </td>

      <td>
        <label htmlFor={message}>
          <StatusIcon status={status} />
        </label>
      </td>
    </tr>
  );
}

export default TableItem;
