import FormSection from "../_components/Formsection"
import OutputSection from "../_components/OutputSection"

interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (params: PROPS) => {

    return (
        <div className=" grid grid-cols-1  md:grid-cols-2 gap-5 p-5">
            <FormSection />
            <OutputSection />
        </div>
    )
}

export default CreateNewContent