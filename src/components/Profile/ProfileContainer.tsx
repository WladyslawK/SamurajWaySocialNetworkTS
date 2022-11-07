import React from 'react';
import axios from "axios";
import {ProfilePageType} from "../../consts vs types/types";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getProfile, setUserProfile, UsersProfileType} from "../../Redux/profilePageReducer";
import {ReduxStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {API} from "../../api/api";
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
    getProfile: (id: number, adminId: number) => void
}

type PathParamsType = {
    userid: string
}

type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        /*let userId = this.props.match.params.userid
        if(!userId){
            userId = String(this.props.userId)
        }
        API.getProfile(Number(userId))
            .then(response => {
                this.props.setUserProfile(response.data)
            })*/
        if(this.props.userId)
        this.props.getProfile(Number(this.props.match.params.userid), this.props.userId)
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

export default connect(mapStateToProps, {setUserProfile, getProfile})(ProfileContainerWithRouter)