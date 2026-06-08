<?php

namespace Thanhnt\Akhoglobal\Actions\Block;

use Thanhnt\Akhoglobal\Models\Block;
use Thanhnt\Akhoglobal\Models\BlockItem;
use Thanhnt\Akhoglobal\Models\Types\BlockInterface;
use Thanhnt\Akhoglobal\Models\Types\BlockItemInterface;

final class BlockAction
{

	public function addBlock(array $blockData)
	{
		// Save block to database
		$block = $this->saveBlock($blockData);

		return $block;
	}

	public function deleteBlock(string $blockId)
	{
		$block = Block::where(BlockInterface::_KEY, $blockId)->firstOrFail();

		$block->delete();
		$block->items()->delete();
		return $block;
	}

	public function updateBlock(array $blockData)
	{

		// Logic to update block in database
		$block = Block::where(BlockInterface::_KEY, $blockData['key'])->firstOrFail();
		$block->update($blockData);

		return $block;
	}

	protected function saveBlock($data)
	{
		// Logic to save block to database
		// Example: 
		return Block::create($data);
	}

	/**
	 * Add a new item to a block
	 * @param string $blockKey The key of the block to which the item will be added
	 * @param array $itemData The data of the item to be added, must include
	 * - BlockItemInterface::_ITEM_MODEL: The model or content of the block item
	 * - BlockItemInterface::_DESCRIPTION: (optional) A description for the block item
	 * @return BlockItem The created block item
	 * @throws \Illuminate\Database\Eloquent\ModelNotFoundException if the block with the given key does not exist
	 */
	public function addBlockItem(string $blockKey, array $itemData)
	{
		$block = Block::where(BlockInterface::_KEY, $blockKey)->firstOrFail();
		$block_items = $block->items()->create($itemData + [BlockItemInterface::_ITEM_TYPE => 'text']);
		return $block_items;
	}
}
