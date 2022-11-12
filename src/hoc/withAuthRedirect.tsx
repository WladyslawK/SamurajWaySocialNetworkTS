import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ReduxStateType} from "../Redux/redux-store";
import {ComponentType} from "react";

type MapStateToPropsType = {
    isAuth: boolean
}

const MapStateToProps = (store: ReduxStateType): MapStateToPropsType => ({
    isAuth: store.authReducer.isAuth
})


export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        const {isAuth, ...restProps} = props

        if(!isAuth) return <Redirect to={"/login"}/>

        return <Component {...restProps as T}/>
    }

    const connectedWithAuthComponent = connect(MapStateToProps)(RedirectComponent)

    return connectedWithAuthComponent
}