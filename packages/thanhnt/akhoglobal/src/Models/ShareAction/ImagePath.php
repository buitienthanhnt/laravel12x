<?php

namespace Thanhnt\Akhoglobal\Models\ShareAction;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait ImagePath
{
    protected function imagePath(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $this->profilePhotoUrl($value),
        );
    }

    /**
     * Get the URL to the user's profile photo.
     *
     * @param  string|null  $value
     * @return string|null
     */
    public function profilePhotoUrl(?string $value)
    {
        return $value
            ? Storage::url($value)
            : null;
    }

    /**
     * Get the default profile photo URL if no profile photo has been uploaded.
     *
     * @return string
     */
    protected function defaultProfilePhotoUrl()
    {
        $name = trim(collect(explode(' ', $this->name))->map(function ($segment) {
            return mb_substr($segment, 0, 1);
        })->join(' '));

        return 'https://ui-avatars.com/api/?name=' . urlencode($name) . '&color=7F9CF5&background=EBF4FF';
    }

    /**
     * Get the disk that profile photos should be stored on.
     *
     * @return string
     */
    protected function profilePhotoDisk()
    {
        return isset($_ENV['VAPOR_ARTIFACT_NAME']) ? 's3' : config('jetstream.profile_photo_disk', 'public');
    }
}
