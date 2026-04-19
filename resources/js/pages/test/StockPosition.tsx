import { useState } from "react";
import PanelBlock from "../akhoglobal/components/blocks/PanelBlock";

const StockPosition = () => {
  const [selected, setSelected] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    blockKey: string;
  } | null>(null);
  const blockList = [
    { x: 100, y: 100, width: 200, height: 100, name: 'block1', blockKey: 'block1', items: ['1', '2', '3', '4', '5'] },
    // { x: 210, y: 320, width: 320, height: 100 },
    // { x: 200, y: 100, width: 200, height: 100 },
    // { x: 360, y: 320, width: 320, height: 100 },
  ];

  const onSelect = (param) => {
    setSelected({
      x: param.x,
      y: param.y,
      width: param.width,
      height: param.height,
      name: param.name,
      blockKey: param.blockKey
    });
  }

  return (
    <div className="min-h-screen">
      {blockList.map((block) => (
        <PanelBlock key={block.blockKey} selected={selected?.blockKey === block.blockKey} x={block.x} y={block.y} width={block.width} height={block.height} name={block.name} blockKey={block.blockKey} onSelected={onSelect}></PanelBlock>))}
      {selected && <div className="absolute w-96 bg-gray-200 h-full right-1 space-y-1">
        <div className="absolute top-1 right-1" onClick={() => setSelected(null)}>close</div>
        <p>width: {selected.width}</p><p>height: {selected.height}</p><p>x: {selected.x}</p><p>y: {selected.y}</p>
        {blockList.find(item => item.blockKey === selected.blockKey)?.items?.map((item) => <div className="flex w-full bg-gray-500 p-1 rounded-sm justify-between">
          <p className="">{item}</p>
          <span className="text-yellow-800 font-semibold">remove</span>
        </div>)}
      </div>
      }
    </div>
  )
}

export default StockPosition;