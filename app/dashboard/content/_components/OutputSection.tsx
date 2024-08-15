import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface PROPS {
  aiOutput: string
}

const OutputSection = ({ aiOutput }: PROPS) => {

  const editorRef: any = useRef(null)

  useEffect(() => {
    // const editorInstance = editorRef.current.getInstance()
    // editorInstance.setMarkdown(aiOutput)

    // const editorInstance = editorRef.current?.getInstance();
    // if (editorInstance) {
    //   editorInstance.setMarkdown(aiOutput);
    // }


    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      try {
        editorInstance.setMarkdown(aiOutput);
      } catch (error) {
        console.error('Error setting markdown:', error);
      }
    }

    // editorRef.current.getInstance().setMarkdown(aiOutput)
  }, [aiOutput])


  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex flex-row justify-between items-center px-2'>
        <h2 className='font-bold'>Your Result</h2>
        <Button className=' flex gap-2'><Copy />Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will apear Here"
        height='600px'
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection