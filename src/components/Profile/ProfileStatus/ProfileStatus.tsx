import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType>{

    state = {
        editMode: false,

    }
    activateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: true
        })
    }
    deactivateEditMode(){
        this.setState({
            ...this.state,
            editMode: false
        })
    }



    render(){
        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} type="text" value={this.props.status}/>
                        </div> :
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        </div>
                }
            </div>


        );
    }

};