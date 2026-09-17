import StockPosition from "./StockPosition";

export default function BlockGroupDetail({ group }: any) {
  return (
    <StockPosition blockList={group.blocks} group={group}></StockPosition>
  )
}
