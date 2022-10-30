import React, {Component} from 'react';
import Header from "./Header";
import axios from "axios";
import {ReduxStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {AuthProfileType, setUsersData} from "../../Redux/auth-reducer";
import {profilePageReducer, setUserProfile, UsersProfileType} from "../../Redux/profilePageReducer";
import {API} from "../../api/api";


type HeaderContainerType = {
    authData: AuthProfileType
    setUsersData: (userId: number, login: string, email: string) => void
    setUserProfile: (profile: UsersProfileType) => void
}

class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        API.authMe()
            .then(response => {
                const {id, login, email} = response.data.data
                this.props.setUsersData(id, login, email)
            })
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

export default connect(mapStateToProps, {setUsersData, setUserProfile})(HeaderContainer);