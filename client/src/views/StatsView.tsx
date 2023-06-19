import React from "react";
import { useOutletContext } from "react-router-dom";

const StatsView = () => {
  const ctx = useOutletContext();
  console.log(ctx);

  return <div>StatsView</div>;
};

export default StatsView;
