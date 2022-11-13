import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getProfile, getStatus, setUserProfile, updateStatus, UsersProfileType} from "../../Redux/profilePageReducer";
import {ReduxStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
/*type ProfileContainerType = {
    userProfile: UsersProfileType | null
    setUserProfile: (users: UsersProfileType) => void
}*/

type mapStateToPropsType = {
    userProfile: UsersProfileType | null
    profileId: number | null
    status: string | null
}

type mapDispatchToPropsType = {
    setUserProfile: (users: UsersProfileType) => void
    getProfile: (id: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void

}

type PathParamsType = {
    userid: string
}

type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {

        let userId: number = Number(this.props.match.params.userid)
        if (!userId) {
            userId = this.props.profileId ? this.props.profileId : -1
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <>
                <Profile userProfile={this.props.userProfile}
                         status={this.props.status} updateStatus={this.props.updateStatus}/>
            </>
        );
    }

};

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    userProfile: state.profilePageReducer.userProfile,
    profileId: state.authReducer.userId,
    status: state.profilePageReducer.status

})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect)(ProfileContainer)