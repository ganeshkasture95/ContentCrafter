"use client"

// how to show all the informmation of a selected 
// form in this section 

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2Icon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { TEMPLATE } from "../../_components/TemplateListSection"

interface PROPS {
  selectedTemplate?: TEMPLATE,
  userFormInput: any,
  loading:boolean
}




const FormSection = ({ selectedTemplate ,userFormInput,loading}: PROPS) => {


  const [formData, setFormData] = useState<any>()
  const handelInputChange = (event: any) => {

    const {name,value} = event.target;
    setFormData({...formData,[name]:value})
  }



  const onSubmit = (e: any) => {
    e.preventDefault()

    userFormInput(formData)
  }


  return (
    <div className="p-5 shadow-md border rounded-lg bg-white ">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={100} height={100} />
      <h1 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h1>
      <p className=" text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className=" my-2 flex flex-col gap-2 mb-7">
            <label className=" font-bold">{item.label}</label>
            {item.field == 'input' ?
              <Input name={item.name} required={item?.required}
                onChange={handelInputChange}
              /> : item.field == 'textarea' ?
                <Textarea
                  onChange={handelInputChange}
                /> : null}
          </div>
        ))}

        <Button type="submit" className="w-full py-6" disabled={loading} >{loading&& <Loader2Icon className=" animate-spin"/>}Genetate Content</Button>
      </form>
    </div>
  )
}

export default FormSection