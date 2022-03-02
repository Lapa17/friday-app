import SuperButton from "../Components/SuperCommon/SuperButton/SuperButton"
import SuperCheckbox from "../Components/SuperCommon/SuperCheckbox/SuperCheckbox"
import SuperEditableSpan from "../Components/SuperCommon/SuperEditableSpan/SuperEditableSpan"
import SuperInputText from "../Components/SuperCommon/SuperInputText/SuperInputText"
import SuperRadio from "../Components/SuperCommon/SuperRadio/SuperRadio"
import SuperSelect from "../Components/SuperCommon/SuperSelect/SuperSelect"

export const TestPage = () => {
    return (
        <div>
            <SuperButton>Button</SuperButton>
            <SuperCheckbox > Checkbox</SuperCheckbox>
            <SuperEditableSpan />
            <SuperInputText />
            <SuperRadio />
            <SuperSelect options={['1','2','3']}/>
        </div>
    )
}