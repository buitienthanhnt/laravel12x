<?php

namespace Thanhnt\Amuaglobal\Models\Types;

interface FormFieldInterface
{
    const TYPE_TEXT = 'text';
    const TYPE_TEXTAREA = 'textarea';
    const TYPE_TEXTEDITOR = 'textEditor';
    const TYPE_EMAIL = 'email';
    const TYPE_PASSWORD = 'password';
    const TYPE_NUMBER = 'number';
    const TYPE_BOOL = 'boolean';
    const TYPE_SELECT = 'select';
    const TYPE_MULTISELECT = 'multiselect';
		const TYPE_SELECT_CHECKBOX = 'select_checkbox';
    const TYPE_DROPDOWN = 'dropdown';
    const TYPE_CHECKBOX = 'checkbox';
    const TYPE_RADIO = 'radio';
    const TYPE_COLOR = 'color';
    const TYPE_FILE = 'choose-file';
    const TYPE_MULTIFILE = 'multifile';
		const PICK_FILE = 'pick-file';
    const TYPE_PHONE = 'tel';
    const TYPE_DATE = 'date';
    const TYPE_IMAGE_CHOOSE = 'imageChoose';
    const TYPE_TIMELINE = 'timeline';
    const CAROUSEL = 'carousel';
}
