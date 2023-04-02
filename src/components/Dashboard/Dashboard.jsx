import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  let studentMarks = [
    { id: 1, name: "John", physics: 15, chemistry: 18, math: 92 },
    { id: 2, name: "Sarah", physics: 76, chemistry: 80, math: 88 },
    { id: 3, name: "David", physics: 92, chemistry: 85, math: 78 },
    { id: 4, name: "Emily", physics: 80, chemistry: 76, math: 85 },
    { id: 5, name: "Michael", physics: 88, chemistry: 92, math: 76 },
    { id: 6, name: "Rachel", physics: 78, chemistry: 85, math: 92 },
    { id: 7, name: "Daniel", physics: 85, chemistry: 76, math: 80 },
    { id: 8, name: "Ava", physics: 80, chemistry: 88, math: 85 },
    { id: 9, name: "Oliver", physics: 76, chemistry: 92, math: 78 },
    { id: 10, name: "Mia", physics: 92, chemistry: 78, math: 85 },
  ];

  return (
    <div>
      <LineChart width={500} height={300} data={studentMarks}>
        <Line dataKey="math" />
        <Line stroke="#8884d8" dataKey="chemistry" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Dashboard;
