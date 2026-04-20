import { PlusIcon, Trash2Icon, XCircleIcon } from "lucide-react";
import { useCallback, useRef, } from "react";
import { useImmer } from "use-immer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PanelBlock from "../akhoglobal/components/blocks/PanelBlock";
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export type Block = {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  blockKey: string;
  items: string[];
  style?: React.CSSProperties;
};

const StockPosition = () => {
  const [selected, updateSelected] = useImmer<Block | null>(null);
  const modelRef = useRef<HTMLInputElement>(null);
  const blockNameRef = useRef<HTMLInputElement>(null);
  const blockColorRef = useRef<HTMLInputElement>(null);

  const [blocks, updateBlocks] = useImmer<Block[]>([
    { x: 100, y: 100, width: 200, height: 100, name: 'block1', blockKey: 'block1', items: ['1', '2', '3', '4', '5', '76'] },
    { x: 210, y: 320, width: 320, height: 100, name: 'block2', blockKey: 'block2', items: ['1', '51', '762'] },
    // { x: 200, y: 100, width: 200, height: 100 },
    // { x: 360, y: 320, width: 320, height: 100 },
  ]);

  const onSelect = useCallback((block: Block) => {
    updateSelected(block);
  }, [updateSelected]);

  const onAddBlock = () => {
    updateBlocks((draft) => {
      draft.push({
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        name: blockNameRef.current?.value || ('block ' + blocks.length),
        blockKey: 'block_' + new Date().getTime(),
        items: [],
        style: { color: blockColorRef?.current?.value, zIndex: blocks.length + 1 }
      });
    });
  }

  const onRemoveBlock = (block: Block) => {
    updateBlocks((draft) => draft.filter(item => item.blockKey !== block.blockKey));
  }

  /**
   * add item model in block items
   */
  const onAddBlockItem = useCallback(() => {
    if (!modelRef.current) {
      return;
    }
    updateSelected(old => {
      old?.items.push(modelRef.current?.value || '');
    })

    // update truc tiep cho block trong block list(khong dung)
    // updateBlocks((draft) => {
    //   const index = draft.findIndex(item => item.blockKey === selected?.blockKey);
    //   draft[index].items.push(modelRef.current?.value || '');
    // })
  }, [updateSelected]);

  /**
   * remove item model in block items
   */
  const onRemoveBlockItem = useCallback((item: string) => {
    updateSelected(old => {
      const index = old?.items.findIndex(i => i === item);
      old?.items.splice(index || 0, 1);
    })
    // remove truc tiep cho block items trong block list(khong dung)
    // updateBlocks((draft) => {
    //   const index = draft.findIndex(item => item.blockKey === block.blockKey);
    //   draft[index].items = draft[index].items.filter(i => i !== item);
    // })
  }, [updateSelected]);

  /**
   * Update selected block name
   */
  const updateBlockName = useCallback((name: string) => {
    updateSelected(old => {
      if (!old) {
        return old;
      }
      old.name = name;
    })
    // update truc tiep cho block name trong block list(khong dung)
    // updateBlocks((draft) => {
    //   const index = draft.findIndex(item => item.blockKey === block.blockKey);
    //   draft[index].name = name;
    // })

  }, [updateSelected]);

  const updateColor = useCallback((color: string) => {
    updateSelected(old => {
      if (!old) {
        return old;
      }
      old.style = { ...old.style, color };
    })
  }, [updateSelected]);

  const updateZindex = useCallback((zIndex: number) => {
    updateSelected(old => {
      if (!old) {
        return old;
      }
      old.style = { ...old.style, zIndex };
    })
  }, [updateSelected]);

  /**
   * Save block into block list
   */
  const onSaveBlock = useCallback(() => {
    /**
     * Update block by useImmer
     */
    updateBlocks((draft) => {
      /**
       * Find block index by blockKey
       */
      const index = draft.findIndex(item => item.blockKey === selected?.blockKey);
      /**
       * update truc tiep block index trong block list
       * sau nay se goi api update truoc sau do moi update block list
       */
      draft[index] = selected || draft[index];
    })
  }, [selected, updateBlocks]);

  return (
    <div className="min-h-screen">
      {blocks.map((block) => (
        <PanelBlock
          key={block.blockKey}
          selected={selected?.blockKey === block.blockKey}
          {...block}
          onSelected={onSelect}>
        </PanelBlock>)
      )}

      {selected && <div className="flex flex-col absolute w-96 bg-gray-200 h-full right-1 animate-wiggle p-1 pt-8">
        <div className="absolute top-1 right-1" onClick={() => updateSelected(null)}>
          <XCircleIcon size={24} color="red"></XCircleIcon>
        </div>
        <div className="flex space-x-1 justify-center items-center">
          <span className="text-md+ font-semibold">Name:</span>
          <Input className="w-full border-blue-400 rounded-md" type="text" value={selected.name} onChange={(e) => {
            updateBlockName(e.target.value);
          }} />
        </div>

        <div className="flex space-x-1 justify-center items-center">
          <span className="text-md+ font-semibold">Color:</span>
          <Input className="w-full border-blue-400 rounded-md" type="color" value={selected?.style?.color} onChange={(e) => {
            updateColor(e.target.value);
          }} />
        </div>

        <div className="flex space-x-1 justify-center items-center">
          <span className="text-md+ font-semibold">zIndex:</span>
          <Input className="w-full border-blue-400 rounded-md" type="number" value={selected?.style?.zIndex} onChange={(e) => {
            updateZindex(e.target.value as unknown as number);
          }} />
        </div>

        <div className="space-x-1 justify-center items-center">
          <span className="text-md+ font-semibold">Model:</span>
          <div className="space-y-1">
            <Input className="w-full border-blue-400 rounded-md" type="text" ref={modelRef} />
            <Button className="w-full" onClick={onAddBlockItem}>save model</Button>
          </div>
        </div>
        <div className="mt-2 space-y-1 flex-1 overflow-scroll">
          {selected?.items?.map((item) => <div className="flex w-full bg-gray-500 p-1 rounded-sm justify-between">
            <p className="font-semibold text-base">{item}</p>
            <Trash2Icon size={26} className="text-yellow-600 hover:text-red-600 font-semibold" onClick={() => {
              onRemoveBlockItem(item);
            }}>remove</Trash2Icon>
          </div>)}
        </div>

        <div className="flex justify-end items-end">
          <Button className="w-full" onClick={onSaveBlock}>on save</Button>
        </div>
      </div>
      }

      <Dialog>
        <DialogTrigger>
          <DialogTitle>
            <div className="absolute size-12 hover:bg-gray-800 rounded-full bottom-10 left-10 bg-gray-500 font-semibold text-base text-white flex justify-center items-center" onClick={onSaveBlock}>
              <PlusIcon size={24}></PlusIcon>
            </div>
          </DialogTitle>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>setup stock block</DialogHeader>
          <div>
            <p>block name:</p>
            <Input className="w-full border-blue-400 rounded-md" type="text" ref={blockNameRef} />
          </div>

          <div>
            <p>block color:</p>
            <input type='color' defaultValue="#7296d4" className="size-15" ref={blockColorRef}></input>
          </div>
          <Button onClick={onAddBlock}>save</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default StockPosition;