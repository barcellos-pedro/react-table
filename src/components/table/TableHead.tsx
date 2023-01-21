type TableHeadProps = {
  headers: string[];
};

function TableHead({ headers }: TableHeadProps) {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header} className="font-bold text-justify">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
