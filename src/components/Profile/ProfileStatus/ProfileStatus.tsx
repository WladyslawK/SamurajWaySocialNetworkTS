import React, {ChangeEvent, RefObject} from 'react';

type ProfileStatusType = {
    status: string | null
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType>{

    state = {
        editMode: false,
        statusText: this.props.status ? this.props.status : ""

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
        this.props.updateStatus(this.state.statusText)
    }

    componentDidUpdate(PrevProps: ProfileStatusType, CurrProps: ProfileStatusType) {


        let a = this.state
        let b = this.props
        if(PrevProps.status !== this.props.status){
            this.setState({
                statusText: this.props.status
            })
        }
    }

    render(){

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            this.setState({
                ...this.state,
                statusText: e.currentTarget.value
            })
        }


        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <input
                                onChange={onChangeHandler}
                                   onBlur={this.deactivateEditMode.bind(this)}
                                   autoFocus={true} type="text"
                                   value={this.state.statusText}/>
                        </div> :
                        <div>
                            <span onDoubleClick={this.activateEditMode}>status: {this.props.status}</span>
                        </div>
                }
            </div>


        );
    }

};