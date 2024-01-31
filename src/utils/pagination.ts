export const getPages = (total: number, initial = 1) => {
  const pageList: number[] = [];
  for (let i = initial; i <= total; i++) {
    pageList.push(i);
  }

  return pageList;
};
