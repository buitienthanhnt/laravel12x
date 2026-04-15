import PanelBlock from "../akhoglobal/components/blocks/PanelBlock";

const StockPosition = () => {
  const blockList = [
    { x: 100, y: 100, width: 200, height: 100 },
    // { x: 210, y: 320, width: 320, height: 100 },
    // { x: 200, y: 100, width: 200, height: 100 },
    // { x: 360, y: 320, width: 320, height: 100 },
  ];

  return(
    <div className="min-h-screen">
      {blockList.map((block, index) => (
      <PanelBlock key={index} x={block.x} y={block.y} width={block.width} height={block.height}></PanelBlock>))}
    </div>
  )
}

export default StockPosition;