export const getSliverDataOneDay = async () => {
  try {
    const response = await fetch('https://giabac.vn/SilverInfo/GetGoldPriceChartFromSQLData?type=L&days=1');
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching sliver data:', error);
    throw error;
  }
}

export const getSliverDataSevenDays = async () => {
  try {
    const response = await fetch('https://giabac.vn/SilverInfo/GetGoldPriceChartFromSQLData?type=L&days=7');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching sliver data:', error);
    throw error;
  }
}