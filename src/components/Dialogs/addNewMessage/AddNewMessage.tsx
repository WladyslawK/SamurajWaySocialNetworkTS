import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormType = {
    newMessage: string
}
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field type="textarea" name="newMessage" component={"textarea"} placeholder="Enter your message"/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>)
}

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: 'AddMessage'})(AddMessageForm)