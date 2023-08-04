import { useState } from "react";

const InfoConfig = () => {
  const [isDrawTypeOpen, setIsDrawTypeOpen] = useState(false);

  const filters = [
    {
      filterTitle: "Draw Type",
      openFilter: () => {
        setIsDrawTypeOpen(!isDrawTypeOpen);
      },
      isFilterOpen: isDrawTypeOpen,
    },
  ];
  return filters;
};
export default InfoConfig;
