<?php

namespace Thanhnt\Akhoglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Thanhnt\Akhoglobal\Models\Block;
use Thanhnt\Akhoglobal\Models\Types\BlockInterface;

final class BlockAdminController extends Controller
{

	public function __construct(
		protected \Thanhnt\Akhoglobal\Actions\Block\BlockAction $blockAction
	) {
		// throw new \Exception('Not implemented');
	}

	public function blockList()
	{
		$blockList = Block::query()->with('items')->get();

		return Inertia::render('test/StockPosition', [
			'blockList' => $blockList,
			'message' => session('message', null)
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
		return redirect('test/resize-div')->with('message', 'Block added successfully');
	}

	public function deleteBlock(string $id)
	{
		$this->blockAction->deleteBlock($id);
		return redirect('test/resize-div')->with('message', 'Block deleted successfully');
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
		return redirect('test/resize-div')->with('message', 'Block updated successfully');
	}

	public function addBlockItem(Request $request)
	{
		$request->validate([
			'key' => 'required|string',
			'item' => 'required|string'
		]);
		$this->blockAction->addBlockItem($request->input('key'), $request->input('item'));
		return redirect('test/resize-div')->with('message', 'Block item added successfully');
	}

	public function deleteBlockItem(int $id, Request $request)
	{
		$blockItem = \Thanhnt\Akhoglobal\Models\BlockItem::findOrFail($id);
		$blockItem->delete();

		return redirect('test/resize-div')->with('message', 'Block item deleted successfully');
	}
}
