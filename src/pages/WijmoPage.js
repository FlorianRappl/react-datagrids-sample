import "@grapecity/wijmo.styles/wijmo.css";
import React from "react";
import { CollectionView } from "@grapecity/wijmo";
import { FlexGrid, FlexGridColumn } from "@grapecity/wijmo.react.grid";
import { CellMaker, SparklineMarkers } from "@grapecity/wijmo.grid.cellmaker";
import { SortDescription } from "@grapecity/wijmo";

const data = [
  { year: 2016, jan: 20, feb: 108, mar: 45, apr: 10, may: 105, jun: 48 },
  { year: 2017, jan: 48, feb: 10, mar: 0, apr: 0, may: 78, jun: 74 },
  { year: 2018, jan: 12, feb: 102, mar: 10, apr: 0, may: 0, jun: 100 },
  { year: 2019, jan: 1, feb: 20, mar: 3, apr: 40, may: 5, jun: 60 },
];

export default function WijmoPage() {
  const [view] = React.useState(() => {
    const view = new CollectionView(
      data.map((item) => ({
        ...item,
        info: [item.jan, item.feb, item.mar, item.apr, item.may, item.jun],
      }))
    );
    return view;
  });

  const [infoCellTemplate] = React.useState(() =>
    CellMaker.makeSparkline({
      markers: SparklineMarkers.High | SparklineMarkers.Low,
      maxPoints: 25,
      label: "Info",
    })
  );

  const flexInitialized = React.useCallback((flexgrid) => {
    flexgrid.collectionView.sortDescriptions.push(
      new SortDescription("year", true)
    );
  }, []);

  return (
    <FlexGrid initialized={flexInitialized} itemsSource={view}>
      <FlexGridColumn header="Year" binding="year" width="*" />
      <FlexGridColumn header="January" binding="jan" width="*" />
      <FlexGridColumn header="February" binding="feb" width="*" />
      <FlexGridColumn header="March" binding="mar" width="*" />
      <FlexGridColumn header="April" binding="apr" width="*" />
      <FlexGridColumn header="May" binding="may" width="*" />
      <FlexGridColumn header="June" binding="jun" width="*" />
      <FlexGridColumn
        header="Info"
        binding="info"
        align="center"
        width={180}
        allowSorting={false}
        cellTemplate={infoCellTemplate}
      />
    </FlexGrid>
  );
}
