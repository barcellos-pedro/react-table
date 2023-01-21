import { useEffect, useState } from "react";
import { Issue } from "./@types/issue";
import Table from "./components/table/Table";

const API_URL = "http://localhost:3000/issues";

function App() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setIssues(data));
  }, []);

  return (
    <main className="h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Board - Issues</h1>

      <div className="flex gap-2">
        <input type="checkbox" name="checkall" id="checkall" />
        <label htmlFor="checkall">Selected</label>
      </div>

      <hr className="my-4" />

      <Table items={issues} className="my-0 mx-auto" />
    </main>
  );
}

export default App;
