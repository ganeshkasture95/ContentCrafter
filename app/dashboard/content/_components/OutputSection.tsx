import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';

const OutputSection = () => {
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex flex-row justify-between items-center px-2'>
        <h2 className='font-bold'>Your Result</h2>
        <Button className=' flex gap-2'><Copy />Copy</Button>
      </div>
      <Editor
        initialValue="Your Result will apear Here"
        height='600px'
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  )
}

export default OutputSection