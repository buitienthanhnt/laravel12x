import { Trash2Icon } from "lucide-react";
import { type BlockItemType } from "../../type/blockitem";

type ModelItemProps = {
  item: BlockItemType;
  onRemoveBlockItem: (item: BlockItemType) => void;
}
export default function ModelItem({ item, onRemoveBlockItem }: ModelItemProps) {
  return (
    <div key={item.id} className="flex w-full bg-gray-400 p-1 rounded-sm justify-between">
      <div className="flex items-end gap-1">
        <p className="font-semibold text-base">{item.item_model}</p>
        {item.item_desc && <p className="text-sm italic text-purple-600 font-semibold">({item.item_desc})</p>}
      </div>
      <Trash2Icon
        size={26}
        className="text-yellow-600 hover:text-red-600 font-semibold"
        onClick={() => {
          onRemoveBlockItem(item);
        }}>
        remove
      </Trash2Icon>
    </div>
  )
}