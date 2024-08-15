"use client"

import Templates from "@/app/(data)/Templates"
import { TEMPLATE } from "../../_components/TemplateListSection"

import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSection"

interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props: PROPS) => {

    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])

    const GenetateAiContent = (FormData: any) => {



    }

    return (
        <div className="p-5">
            {/* <Link href="/dashboard" >
                <Button ><ArrowLeft />Back</Button>
            </Link> */}

            <div className=" grid grid-cols-1  md:grid-cols-3 gap-5 p-5">
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenetateAiContent(v)} />
                <div className=" col-span-2 ">
                    <OutputSection />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent