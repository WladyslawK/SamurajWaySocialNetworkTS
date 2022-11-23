import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../utils/vlidators/validators";
import {Input} from "../common/formsControls/FormsControls";

type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        type="text"
                        name={"login"}
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field
                        type="password"
                        name={"password"}
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember Me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>)
}
export const Login: React.FC = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log("FormData: ", formData)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
