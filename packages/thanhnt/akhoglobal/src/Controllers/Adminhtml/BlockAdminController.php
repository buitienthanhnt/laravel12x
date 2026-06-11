<?php

namespace Thanhnt\Akhoglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Thanhnt\Akhoglobal\Models\Block;
use Thanhnt\Akhoglobal\Models\Types\BlockInterface;
use Thanhnt\Akhoglobal\Models\Types\BlockItemInterface;
use Thanhnt\Akhoglobal\Models\Types\ConfigInterface;

final class BlockAdminController extends Controller
{

	public function __construct(
		protected \Thanhnt\Akhoglobal\Actions\Block\BlockAction $blockAction,
		protected \Thanhnt\Akhoglobal\Actions\Config\ConfigAction $configAction,
	) {
		// throw new \Exception('Not implemented');
	}

	public function blockList()
	{
		$blockList = Block::query()->with('items')->get();

		return Inertia::render('test/StockPosition', [
			'blockList' => $blockList,
			'message' => session('message', null),
			'init_screen' => $this->configAction->getConfig('init_screen') ? json_decode($this->configAction->getConfig('init_screen')->value, true) : null,
		]);
	}

	public function addBlock(Request $request)
	{
		// $blockData = $request->validate([
		// 	'x' => 'required|integer',
		// 	'y' => 'required|integer',
		// 	'width' => 'required|integer',
		// 	'height' => 'required|integer',
		// 	'name' => 'required|string',
		// 	'blockKey' => 'required|string',
		// 	'items' => 'required|array',
		// 	'items.*' => 'string'
		// ]);
		$this->blockAction->addBlock($request->only(BlockInterface::FILLED_FIELDS));
		/**
		 * Register initial screen config if provided in the request
		 * This allows the system to know which screen to display when the user first accesses the block management interface
		 */
		$this->configAction->registerConfig([
			ConfigInterface::_PATH => 'init_screen',
			ConfigInterface::_VALUE => json_encode($request->input('init_screen')),
			ConfigInterface::_TYPE => 'string',
			ConfigInterface::_DESCRIPTION => 'Initial screen configuration for blocks',
		]);

		return redirect(route('akho.block'))->with('message', 'Block added successfully');
	}

	public function deleteBlock(string $id)
	{
		$this->blockAction->deleteBlock($id);
		return redirect(route('akho.block'))->with('message', 'Block deleted successfully');
	}

	public function updateBlock(Request $request)
	{
		$request->validate([
			// 'id' => 'required|integer',
			// 'x' => 'required|integer',
			// 'y' => 'required|integer',
			// 'width' => 'required|integer',
			// 'height' => 'required|integer',
			// 'name' => 'required|string',
			'key' => 'required|string',
			// 'items' => 'required|array',
			// 'items.*' => 'string'
		]);

		$this->blockAction->updateBlock($request->only(BlockInterface::FILLED_FIELDS));
		return redirect(route('akho.block'))->with('message', 'Block updated successfully');
	}

	public function addBlockItem(Request $request)
	{
		$request->validate([
			'key' => 'required|string',
			BlockItemInterface::_ITEM_MODEL => 'required|string'
		]);
		$this->blockAction->addBlockItem($request->input('key'), $request->only([BlockItemInterface::_ITEM_MODEL, BlockItemInterface::_DESCRIPTION]));
		return redirect(route('akho.block'))->with('message', 'Block item added successfully');
	}

	public function deleteBlockItem(int $id, Request $request)
	{
		$blockItem = \Thanhnt\Akhoglobal\Models\BlockItem::findOrFail($id);
		$blockItem->delete();

		return redirect(route('akho.block'))->with('message', 'Block item deleted successfully');
	}
}
