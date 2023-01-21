import { HTMLAttributes } from "react";
import { Issue } from "../../@types/issue";
import TableHead from "./TableHead";
import TableItem from "./TableItem";

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  items: Issue[];
}

function Table({ items, ...attrs }: TableProps) {
  const headers = ["Name", "Message", "Status"];

  return (
    <table {...attrs}>
      <TableHead headers={headers} />
      <tbody>
        {items.map((issue) => (
          <TableItem key={issue.id} item={issue} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
