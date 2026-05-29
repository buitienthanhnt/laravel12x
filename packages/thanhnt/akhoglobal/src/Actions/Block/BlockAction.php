<?php

namespace Thanhnt\Akhoglobal\Actions\Block;

use Thanhnt\Akhoglobal\Models\Block;
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

	public function addBlockItem(string $blockKey, string $item)
	{
		$block = Block::where(BlockInterface::_KEY, $blockKey)->firstOrFail();
		$block_items = $block->items()->create([BlockItemInterface::_ITEM_MODEL => $item, BlockItemInterface::_ITEM_TYPE => 'text']);

		return $block_items;
	}
}
