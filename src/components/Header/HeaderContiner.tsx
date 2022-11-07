import React, {Component} from 'react';
import Header from "./Header";
import {ReduxStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {authLogIn, AuthProfileType} from "../../Redux/auth-reducer";
import {setUserProfile, UsersProfileType} from "../../Redux/profilePageReducer";
import {API} from "../../api/api";


type HeaderContainerType = {
    authData: AuthProfileType
    authLogIn: () => void
    setUserProfile: (profile: UsersProfileType) => void
}

class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        this.props.authLogIn()
        /*API.authMe()
            .then(response => {
                const {id, login, email} = response.data.data
                this.props.setUsersData(id, login, email)
            })*/
    }

    render() {
        return (
            <>
                <Header authData={this.props.authData}/>
            </>
        );
    }
};

const mapStateToProps = (state: ReduxStateType) => ({
    authData: state.authReducer,
})

export default connect(mapStateToProps, {authLogIn, setUserProfile})(HeaderContainer);