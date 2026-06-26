import type { InertiaConfig } from '@inertiajs/core';
import { Editor, } from '@tinymce/tinymce-react';
import { useCallback, useRef } from 'react';

const env = import.meta.env;

/**
 * Lưu ý khi sử dụng thành phần này thì defaultValue sẽ là giá trị ban đầu
 * và: onChangeValue sẽ để cập nhập giá trị mới mỗi khi có sự thay đổi trong trình soạn thảo,
 * bạn có thể sử dụng nó để lưu vào state hoặc gửi lên server tùy theo nhu cầu của bạn.
 * tuy nhiên không được cập nhập trực tiếp giá trị của trình soạn thảo bằng cách truyền prop defaultValue vào thành phần này,
 * @returns 
 */
export default function TinymceEditor({ onChangeValue, defaultValue, ...props }: InertiaConfig['sharedPageProps'] & { onChangeValue?: (value: string) => void, defaultValue?: string }) {
  const editorRef = useRef<any>(null);

  /**
   * Hàm này sẽ được gọi mỗi khi nội dung của trình soạn thảo thay đổi(khi nhấn enter, click ra ngoài, sau khi chọn hình ảnh...). 
   * Nó kiểm tra xem editorRef.current có tồn tại hay không (tức là trình soạn thảo đã được khởi tạo), 
   * và nếu có, nó sẽ lấy nội dung hiện tại của trình soạn thảo bằng cách gọi phương thức getContent() và in ra console.
   *  Bạn có thể thay thế console.log bằng bất kỳ hành động nào bạn muốn thực hiện với nội dung của trình soạn thảo, 
   * chẳng hạn như lưu vào state hoặc gửi lên server.
   */
  const onChange = useCallback(() => {
    const editor = editorRef.current;
    if (editor) {
      onChangeValue?.(editor.getContent());
    }
  }, [onChangeValue]);

  return (
    <Editor
      {...props}
      onChange={onChange}
      apiKey={env.VITE_TINYMCE_KEY}
      init={{
        plugins: ['file-manager', 'image',
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          'file-manager',
          // Your account includes a free trial of TinyMCE premium features, Try the most popular premium features until May 3, 2026:
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'tinymceai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'Flmngr | undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        external_plugins: {
          'file-manager': '/tinymce/plugins/file-manager/plugin.min.js',
        },
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        tinymceai_token_provider: async () => {
          await fetch(`https://demo.api.tiny.cloud/1/${env.VITE_TINYMCE_KEY}/auth/random`, { method: "POST", credentials: "include" });
          return { token: await fetch(`https://demo.api.tiny.cloud/1/${env.VITE_TINYMCE_KEY}/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
        },
        uploadcare_public_key: '2534ae83a14e00347147',
        Flmngr: {
          apiKey: env.VITE_FLMNGR_KEY, // API Key từ flmngr.com/dashboard
          urlFileManager: env.VITE_URL_FILE_MANAGER, // Link backend xử lý file
          urlFiles: env.VITE_URL_FILES // Đường dẫn chứa file thực tế
        }
      }}
      initialValue={defaultValue}
      onInit={(evt, editor) => editorRef.current = editor}
    />
  );
}