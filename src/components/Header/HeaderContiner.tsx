import React, {Component} from 'react';
import Header from "./Header";
import {ReduxStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData, AuthProfileType, logout} from "../../Redux/auth-reducer";
import {setUserProfile, UsersProfileType} from "../../Redux/profilePageReducer";
import {usersAPI} from "../../api/usersAPI";


type HeaderContainerType = {
    authData: AuthProfileType
    authLogIn: () => void
    setUserProfile: (profile: UsersProfileType) => void
    logout: () => void
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
                <Header authData={this.props.authData} logout={this.props.logout}/>
            </>
        );
    }
};

const mapStateToProps = (state: ReduxStateType) => ({
    authData: state.authReducer,
})

export default connect(mapStateToProps, {
    authLogIn: getAuthUserData,
    setUserProfile,
    logout
})(HeaderContainer);