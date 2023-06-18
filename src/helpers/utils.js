export const createOptions = (dataArray, labelKey, defaultLabel) => {
  return [
    { value: -1, label: defaultLabel },
    ...dataArray.map((dataItem) => ({
      value: dataItem.id,
      label: dataItem[labelKey],
    })),
  ];
};
