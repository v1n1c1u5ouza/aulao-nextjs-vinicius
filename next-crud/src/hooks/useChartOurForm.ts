import { useState } from "react";

export default function useChartOurForm() {
  const [visible, setVisible] = useState<"chart" | "form">("chart");

  const showChart = () => setVisible("chart");
  const showForm = () => setVisible("form");

  return {
    formVisible: visible === "form",
    chartVisible: visible === "chart",
    showChart,
    showForm,
  };
}
