"use client"

import Templates from "@/app/(data)/Templates"
import { TEMPLATE } from "../../_components/TemplateListSection"

import { chatSession } from "@/utils/AiModel"
import { useState } from "react"
import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSection"

interface PROPS {
    params: {
        'template-slug': string
    }
}
function CreateNewContent(props: PROPS) {

    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])
    const [loading,setLoading]=useState(false)
    const GenetateAiContent = async (FormData: any) => {


        try {
            setLoading(true)
            const SelectrdPrompt = selectedTemplate?.aiPrompt
            const FinalAiPrompt = JSON.stringify(FormData)+", "+ SelectrdPrompt
    
            const result = await chatSession.sendMessage(FinalAiPrompt);
            console.log(result.response.text());
            setLoading(false)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
      

    }

    return (
        <div className="p-5">
            {/* <Link href="/dashboard" >
                <Button ><ArrowLeft />Back</Button>
            </Link> */}

            <div className=" grid grid-cols-1  md:grid-cols-3 gap-5 p-5">
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenetateAiContent(v)} loading={loading} />
                <div className=" col-span-2 ">
                    <OutputSection />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent