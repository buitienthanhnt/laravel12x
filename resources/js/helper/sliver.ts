export const formatSliverData = (dates: string[], prices: number[]) => {
  return dates.map((date, index) => [new Date(date + 'z').getTime(), prices[index]]);
}