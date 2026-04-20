import { useState } from "react";
import PanelBlock from "../akhoglobal/components/blocks/PanelBlock";
import { XCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const StockPosition = () => {
  const [selected, setSelected] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    blockKey: string;
  } | null>(null);
  // animate-in slide-in-from-right
  const blockList = [
    { x: 100, y: 100, width: 200, height: 100, name: 'block1', blockKey: 'block1', items: ['1', '2', '3', '4', '5', '76'] },
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
      {selected && <div className="flex flex-col absolute w-96 bg-gray-200 h-full right-1 space-y-1 animate-wiggle p-1 py-4">
        <div className="absolute top-4 right-1" onClick={() => setSelected(null)}>
          <XCircleIcon size={24} color="black"></XCircleIcon>
        </div>
        <p>width: {selected.width}</p><p>height: {selected.height}</p><p>x: {selected.x}</p><p>y: {selected.y}</p>
        {blockList.find(item => item.blockKey === selected.blockKey)?.items?.map((item) => <div className="flex w-full bg-gray-500 p-1 rounded-sm justify-between">
          <p className="">{item}</p>
          <span className="text-yellow-800 font-semibold">remove</span>
        </div>)}
        <div className="flex flex-1 justify-end items-end">
          <Button className="w-full" onClick={() => {
            console.log(selected);
            
          }}>on save</Button>
        </div>
      </div>
      }
    </div>
  )
}

export default StockPosition;