import React from "react";


class ProfileClassBsed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }






    render() {
        const {count} = this.state;
        return (
            <>
                <h2>This is class based Component of profile .....</h2>
                <h1>My name is : {this.props.name }</h1>
                <h3>This is count : {count} </h3>
                <button onClick={this.setState({count : 1})}>add</button>
            </>
        )
    }
}
export default ProfileClassBsed