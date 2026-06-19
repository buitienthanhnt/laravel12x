laravel TRelatedModel
Trong Laravel (và đặc biệt là khi làm việc với công cụ phân tích tĩnh như Larastan), TRelatedModel là một ký hiệu kiểu Generic (Template Type) đại diện cho Model được liên kết (Related Model) trong một mối quan hệ Eloquent Relationship.


Ký tự T viết tắt cho "Type", giúp các công cụ IDE và PHPStan hiểu chính xác class Model nào sẽ được trả về khi bạn gọi một mối quan hệ.Ý nghĩa của TRelatedModel trong EloquentKhi bạn xem mã nguồn của Laravel API hoặc tài liệu định nghĩa loại 

(PHPDoc), các mối quan hệ được khai báo bằng Generics dạng:phpRelation<TRelatedModel, TDeclaringModel>
Hãy thận trọng khi sử dụng mã.TRelatedModel: Khai báo kiểu dữ liệu của Model đích (Model kết nối tới).TDeclaringModel / TParentModel: Khai báo kiểu dữ liệu của Model hiện tại (nơi định nghĩa hàm).Ví dụ thực tế:Nếu bạn có một mối quan hệ BelongsTo giữa Post và User:

php
/**
 * @return BelongsTo<User, Post>
 */
public function user(): BelongsTo
{
    return $this->belongsTo(User::class);
}

Hãy thận trọng khi sử dụng mã.

Trong trường hợp này:TRelatedModel chính là User.TDeclaringModel chính là Post.Tại sao bạn lại nhìn thấy TRelatedModel?Bạn thường gặp thuật ngữ này khi:Gặp lỗi phân tích tĩnh (PHPStan / Larastan): Khi Larastan yêu cầu bạn định nghĩa rõ ràng kiểu dữ liệu trả về của một hàm Relationship bằng PHPDoc để nó có thể kiểm tra lỗi ghi/đọc thuộc tính.

Đọc mã nguồn Laravel Framework: Trong các file core của Laravel như HasOne, HasMany, BelongsTo, Laravel sử dụng @template TRelatedModel để IDE tự động gợi ý code (Auto-completion) chính xác các hàm bổ trợ.Cách áp dụng chuẩn để IDE nhận diệnNếu bạn đang dùng Larastan hoặc muốn IDE (PhpStorm, VS Code) gợi ý code chuẩn xác nhất khi gọi mối quan hệ, bạn nên viết Docblock như sau:

php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    /**
     * Lấy tất cả bài viết của user.
     * 
     * @return HasMany<Post, $this>  <-- Post đóng vai trò là TRelatedModel
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}

Hãy thận trọng khi sử dụng mã.Nếu bạn đang thiết lập một hệ thống phân tích mã nguồn hoặc gặp lỗi cụ thể nào liên quan đến TRelatedModel, hãy chia sẻ thêm về đoạn code bạn đang viết hoặc thông báo lỗi để nhận được hỗ trợ tùy chỉnh chính xác nhé!