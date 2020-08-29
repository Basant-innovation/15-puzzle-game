const swap = (index1, index2, array) => {
  const temparray = [...array];
  //   const temp = temparray[index1]
  //   temparray[index1] = temparray[index2];
  //distruction
  [temparray[index1], temparray[index2]] = [
    temparray[index2],
    temparray[index1],
  ];
  return temparray;
};
export default swap;
