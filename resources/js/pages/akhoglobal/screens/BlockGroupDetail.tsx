import StockPosition from "./StockPosition";

export default function BlockGroupDetail({ group }: any) {
  console.log('====================================');
  console.log(group);
  console.log('====================================');
  return (
    <StockPosition blockList={group.blocks} group={group}></StockPosition>
  )
}