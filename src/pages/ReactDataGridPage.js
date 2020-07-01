import React from "react";
import ReactDataGrid from "react-data-grid";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const Sparkline = ({ row }) => (
  <Sparklines
    data={[row.jan, row.feb, row.mar, row.apr, row.may, row.jun]}
    margin={6}
    height={40}
    width={200}
  >
    <SparklinesLine
      style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}
    />
    <SparklinesSpots
      size={4}
      style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }}
    />
  </Sparklines>
);

const columns = [
  { key: "year", name: "Year" },
  { key: "jan", name: "January" },
  { key: "feb", name: "February" },
  { key: "mar", name: "March" },
  { key: "apr", name: "April" },
  { key: "may", name: "May" },
  { key: "jun", name: "June" },
  { name: "Info", formatter: Sparkline },
];

const rows = [
  { year: 2016, jan: 20, feb: 108, mar: 45, apr: 10, may: 105, jun: 48 },
  { year: 2017, jan: 48, feb: 10, mar: 0, apr: 0, may: 78, jun: 74 },
  { year: 2018, jan: 12, feb: 102, mar: 10, apr: 0, may: 0, jun: 100 },
  { year: 2019, jan: 1, feb: 20, mar: 3, apr: 40, may: 5, jun: 60 },
];

export default function ReactDataGridPage() {
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={(i) => rows[i]}
      rowsCount={rows.length}
    />
  );
}
