import React from 'react';
import axios from "axios";
import {ProfilePageType} from "../../consts vs types/types";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {setUserProfile, UsersProfileType} from "../../Redux/profilePageReducer";
import {ReduxStateType} from "../../Redux/redux-store";
type ProfileContainerType = {
    userProfile: UsersProfileType | null
    setUserProfile: (users: UsersProfileType) => void
}


export class ProfileContainerAPI extends React.Component<ProfileContainerType, {}>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0//profile/2")
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render(){
        return (
            <>
                <Profile userProfile={this.props.userProfile}/>
            </>
        );
    }

};

let mapStateToProps = (state: ReduxStateType) => ({
    userProfile: state.profilePageReducer.userProfile
})

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerAPI)