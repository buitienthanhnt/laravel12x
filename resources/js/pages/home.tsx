
import type { InertiaConfig } from '@inertiajs/core';
import { Link } from '@inertiajs/react';
import { manage } from '@/routes/akho';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

export default function Home(props: InertiaConfig['sharedPageProps']) {
  const editorRef = useRef(null);

  console.log(props);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <h2>demo home page</h2>
      <h3>{props.demo as string}</h3>
      {/* <Link href={manage.url({id: 12})}>Manage</Link> */}
      <Link href={manage.url()}>Manage</Link>
      <Editor
        apiKey='tmwywfrtrqfd7o1hbh1e9hi5ymr5k1xw382gxnxwo058shf8'
        init={{
          plugins: [
            // Core editing features
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            // 'file-manager image link lists',
            // Your account includes a free trial of TinyMCE premium features
            // Try the most popular premium features until May 3, 2026:
            'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'tinymceai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
          ],
          toolbar: 'Flmngr Upload | undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          tinymceai_token_provider: async () => {
            await fetch(`https://demo.api.tiny.cloud/1/tmwywfrtrqfd7o1hbh1e9hi5ymr5k1xw382gxnxwo058shf8/auth/random`, { method: "POST", credentials: "include" });
            return { token: await fetch(`https://demo.api.tiny.cloud/1/tmwywfrtrqfd7o1hbh1e9hi5ymr5k1xw382gxnxwo058shf8/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
          },
          uploadcare_public_key: '2534ae83a14e00347147',
          Flmngr: {
            apiKey: "YOUR_FLMNGR_API_KEY", // API Key từ flmngr.com/dashboard
            urlFileManager: "http://laravel12x.local/flmngr", // Link backend xử lý file
            urlFiles: "http://laravel12x.local/storage/uploads" // Đường dẫn chứa file thực tế
          }
        }}
        initialValue="Welcome to TinyMCE!"
        onInit={(evt, editor) => editorRef.current = editor}
      />
    </div>
  );
}