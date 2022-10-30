import React from 'react';
import axios from "axios";
import {ProfilePageType} from "../../consts vs types/types";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {setUserProfile, UsersProfileType} from "../../Redux/profilePageReducer";
import {ReduxStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
/*type ProfileContainerType = {
    userProfile: UsersProfileType | null
    setUserProfile: (users: UsersProfileType) => void
}*/

type mapStateToPropsType = {
    userProfile: UsersProfileType | null
    userId: number | null
}

type mapDispatchToPropsType = {
    setUserProfile: (users: UsersProfileType) => void
}

type PathParamsType = {
    userid: string
}

type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        let userId = this.props.match.params.userid
        if(!userId){
            userId = String(this.props.userId)
        }
        axios.get("https://social-network.samuraijs.com/api/1.0//profile/"+userId)
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

let mapStateToProps = (state: ReduxStateType) : mapStateToPropsType => ({
    userProfile: state.profilePageReducer.userProfile,
    userId: state.authReducer.userId
})

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)