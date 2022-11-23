import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/vlidators/validators";

const maxlength30 = maxLengthCreator(30)

export type AddMessageFormType = {
    newMessage: string
}
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field type="textarea"
                   name="newMessage"
                   component={Textarea}
                   placeholder="Enter your message"
                   validate={[requiredField, maxlength30]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>)
}

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: 'AddMessage'})(AddMessageForm)