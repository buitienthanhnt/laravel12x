import { useCallback, useEffect, useState } from "react"
import { getSliverDataOneDay, getSliverDataSevenDays } from "../network/getSliverData";

type SliverDataType = number[][];

type SliverDataResponse = {
  Dates: string[];
  LastSellPrices: number[];
  LastBuyPrices: number[];
}


const useSliverData = () => {
  const [sliverdata, setSliverData] = useState<SliverDataResponse>([])
  const [sliver7days, setSliver7Days] = useState<SliverDataResponse>([])

  const fetchSliverOneDayData = useCallback(async () => {
    const sliverOneDayData = await getSliverDataOneDay();
    setSliverData(sliverOneDayData);
  }, []);

  const fetchSliver7DaysData = useCallback(async () => {
    const sliver7DaysData = await getSliverDataSevenDays();
    setSliver7Days(sliver7DaysData);
  }, []);

  useEffect(() => {
    fetchSliverOneDayData();
    fetchSliver7DaysData();
  }, [fetchSliverOneDayData, fetchSliver7DaysData]);

  console.log('====================================');
  console.log(sliverdata, sliver7days);
  console.log('====================================');

  return { sliverdata, sliver7days }
}

export { useSliverData };