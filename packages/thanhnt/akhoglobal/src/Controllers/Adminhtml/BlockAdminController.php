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
        // Các mã chuyển hướng (Redirect Codes) phổ biến trong Laravel:
        // 302 (Found / Form Redirect): Được Laravel dùng mặc định. Rất phù hợp sau khi xử lý xong form PUT/POST để tránh người dùng F5 bị gửi lại dữ liệu (Pattern: Post/Redirect/Get).
        // 301 (Moved Permanently): Dùng khi URL cũ đã bị xóa hoặc thay đổi hoàn toàn sang URL mới vĩnh viễn.
        // 303 (See Other): Thường dùng sau một lệnh PUT hoặc POST để ép buộc trình duyệt phải dùng phương thức GET khi chuyển hướng đến trang mới.
        // 307 (Temporary Redirect): Chuyển hướng tạm thời nhưng bắt buộc trình duyệt phải giữ nguyên phương thức (ví dụ: đang gửi PUT ở trang cũ thì sang trang mới vẫn phải gửi PUT).

        // Ví dụ áp dụng cho trường hợp của bạn (Sau khi PUT Update)Sau khi người dùng bấm cập nhật (PUT), bạn nên giữ nguyên mã
        // 302 (mặc định) hoặc dùng mã 303 để trình duyệt chuyển hướng an toàn về trang hiển thị (GET)
        // return redirect(route('akho.block'), 303)->with('message', 'Block updated successfully');
        return redirect()->route('akho.block')->with('message', 'Block updated successfully');
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
