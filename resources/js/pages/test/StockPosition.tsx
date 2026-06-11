import { router, useForm } from "@inertiajs/react";
import _ from "lodash";
import { PlusIcon, XCircle, XCircleIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, } from "react";
import { useImmer } from "use-immer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ModelItem, PanelBlock } from "../akhoglobal/components/blocks";
import { type BlockItemType } from "../akhoglobal/type/blockitem";

export type Block = {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  key: string;
  items: [
    {
      item_model: string;
      quantity: number;
    }
  ];
  style?: React.CSSProperties;
  type?: 'block' | 'area';
};

const StockPosition = ({ blockList }: { blockList: Block[] }) => {
  const [selected, updateSelected] = useImmer<string | null>(null);
  const modelRef = useRef<HTMLInputElement>(null);
  const modelDescRef = useRef<HTMLInputElement>(null);
  const blockNameRef = useRef<HTMLInputElement>(null);
  const blockColorRef = useRef<HTMLInputElement>(null);
  const blockTypeRef = useRef<HTMLButtonElement>(null);
  const [search, setSearch] = useState<string>('');

  const searchResult = useMemo(() => {
    if (search?.length < 3) {
      return [];
    }

    const result = blockList.filter(block =>
      block.items.some(item => item.item_model.toLowerCase().includes(search?.toLowerCase()))
    );
    return _.map(result, 'key');
  }, [blockList, search])

  const [blocks, updateBlocks] = useImmer<Block[]>(blockList);

  const seletedBlock = blocks.find(item => item.key === selected) || null;

  const { data, setData, } = useForm({
    name: seletedBlock?.name || '',
    style: {
      color: seletedBlock?.style?.color || '',
      zindex: seletedBlock?.style?.zIndex || 0
    },
  })

  useEffect(() => {
    if (seletedBlock) {
      setData('name', seletedBlock.name);
      setData('style.color', seletedBlock.style?.color || '');
      setData('style.zindex', seletedBlock.style?.zIndex || 0);
    }
  }, [seletedBlock, setData]);

  const onSelect = useCallback((blockKey: string) => {
    updateSelected(blockKey);
  }, [updateSelected]);

  const onAddBlock = () => {

    const newBlock: Block = {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      name: blockNameRef.current?.value || ('b_' + blocks.length),
      key: 'block_' + new Date().getTime(),
      items: [],
      style: { color: blockColorRef?.current?.value, zIndex: (_.maxBy(blocks, 'id')?.id || 0) + 1 },
      type: blockTypeRef.current?.getAttribute('data-state') === 'checked' ? 'block' : 'area',
    };

    router.post('/test/add-block', newBlock as any);
  }

  useEffect(() => {
    updateBlocks(blockList);
  }, [blockList, updateBlocks]);

  const onRemoveBlock = () => {
    router.delete('/test/delete-block/' + selected, {
      onSuccess: () => {

      },
      onBefore: () => confirm('Are you sure you want to delete this block?'),
    });

  }

  /**
   * add item model in block items
   */
  const onAddBlockItem = useCallback(() => {
    if (!modelRef.current) { return; }
    router.post('/test/add-block-item', {
      key: selected,
      item_model: modelRef.current.value,
      item_desc: modelDescRef.current?.value
    });
  }, [selected]);

  /**
   * remove item model in block items
   */
  const onRemoveBlockItem = useCallback((item: { id: number }) => {
    router.delete('/test/delete-block-item/' + item.id, {
      onBefore: () => confirm('Are you sure you want to delete this item?'),
    });
  }, []);

  /**
   * Save block into block list
   */
  const onSaveBlock = useCallback(() => {
    /**
     * Update block by useImmer
     */
    router.put('/test/update-block', { key: selected, ...data });

    // updateBlocks((draft) => {
    //   /**
    //    * Find block index by key
    //    */
    //   const index = draft.findIndex(item => item.key === selected);
    //   /**
    //    * update truc tiep block index trong block list
    //    * sau nay se goi api update truoc sau do moi update block list
    //    */
    //   draft[index] = selected || draft[index];
    // })
  }, [data, selected]);

  return (
    <div className="min-h-screen"
      style={{
        backgroundColor: '#e5e5f7',
        opacity: 0.8,
        backgroundSize: '20px 20px',
        backgroundImage: `${search.length >= 3 ? 'none' : 'linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(to right, #444cf7 1px, #e5e5f7 1px)'}`
      }}
    >
      <div className="absolute right-5 flex gap-2 items-center bottom-5 z-50">
        {search && <XCircle size={24} className="hover:text-red-700" onClick={() => setSearch('')}></XCircle>}
        <input
          className="w-full border-blue-500 border rounded-md p-2 z-50 text-lg font-semibold bg-white"
          type="text" value={search}
          placeholder="Tìm kiếm"
          onChange={(e) => {
            setSearch(e.target.value);
          }} />
      </div>
      {blocks.map(({ key, ...block }) => (
        <PanelBlock
          key={key}
          blockKey={key}
          selected={search.length < 3 ? 0 : searchResult.includes(key) ? 1 : 2}
          {...block}
          onSelected={onSelect}>
        </PanelBlock>
      )
      )}

      {seletedBlock && <div className="flex flex-col absolute w-96 bg-gray-200 h-full right-1 animate-wiggle p-1 pt-8 z-50">
        <div className="absolute top-1 right-1" onClick={() => updateSelected(null)}>
          <XCircleIcon size={24} color="red"></XCircleIcon>
        </div>
        <div className="flex space-x-1 justify-center items-center">
          <span className="text-md+ font-semibold">Name:</span>
          <Input className="w-full border-blue-400 rounded-md" type="text" value={data.name} onChange={(e) => {
            setData('name', e.target.value);
          }} />
        </div>

        <div className="flex space-x-1 justify-center items-center">
          <span className="text-md+ font-semibold">Color:</span>
          <Input className="w-full border-blue-400 rounded-md" type="color" value={data?.style?.color} onChange={(e) => {
            setData('style.color', e.target.value);
          }} />
        </div>

        <div className="flex space-x-1 justify-center items-center">
          <span className="text-md+ font-semibold">zIndex:</span>
          <Input className="w-full border-blue-400 rounded-md" type="number" value={data?.style?.zindex} onChange={(e) => {
            setData('style.zindex', parseInt(e.target.value));
          }} />
        </div>
        <div className="space-x-1 justify-center items-center">
          <span className="text-md+ font-semibold">Model:</span>
          <div className="space-y-1">
            <Input className="w-full border-blue-400 rounded-md" type="text" ref={modelRef} placeholder="Khóa" />
            <Input className="w-full border-blue-400 rounded-md" type="text" ref={modelDescRef} placeholder="Thông tin mô tả" />
            <Button className="w-full" onClick={onAddBlockItem}>save model</Button>
          </div>
        </div>
        <div className="mt-2 space-y-1 flex-1 overflow-scroll">
          {seletedBlock?.items?.map((item: BlockItemType) => <ModelItem key={item.id} item={item} onRemoveBlockItem={onRemoveBlockItem}></ModelItem>)}
        </div>

        <div className="flex justify-end items-end gap-1">
          <Button className="w-full" onClick={onSaveBlock}>Save</Button>
          <Button className="w-full bg-red-400 hover:bg-red-600" color="red" onClick={onRemoveBlock}>Delete</Button>
        </div>
      </div>
      }

      <Dialog>
        <DialogTrigger>
          <DialogTitle>
            <div className="absolute size-12 hover:bg-gray-800 rounded-full bottom-10 left-10 z-50 bg-gray-500 font-semibold text-base text-white flex justify-center items-center">
              <PlusIcon size={24}></PlusIcon>
            </div>
          </DialogTitle>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-lg font-semibold">Tạo mới khu vực</DialogHeader>
          <div>
            <b className="text-md">Block name:</b>
            <Input className="w-full border-blue-400 rounded-md" type="text" ref={blockNameRef} />
          </div>

          <div className="flex gap-4">
            <b className="text-md">Is block type?</b>
            <Checkbox id="block-type" className="size-6" ref={blockTypeRef} />
          </div>

          <div className="items-center gap-4 flex">
            <b className="text-md">Block color:</b>
            <input type='color' defaultValue="#7296d4" className="size-15" ref={blockColorRef}></input>
          </div>
          <Button onClick={onAddBlock}>Lưu</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default StockPosition;
