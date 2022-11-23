import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../utils/vlidators/validators";
import {Input} from "../common/formsControls/FormsControls";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {ReduxStateType, StoreType} from "../../Redux/redux-store";

type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
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

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
const Login: React.FC<LoginType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        console.log("FormData: ", formData)
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


const mapStateToProps = (store: ReduxStateType) =>({
    isAuth: store.authReducer.isAuth
})

export default connect(mapStateToProps, {login})(Login)