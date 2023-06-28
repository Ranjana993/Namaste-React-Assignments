import React from 'react'


// https://api.github.com/users/Ranjana993

class ChildProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "",
                bio: "",
            }
        }
    }

    async componentDidMount() {
        const res = await fetch("https://api.github.com/users/Ranjana993");
        const json = await res.json();
        this.setState({
            userInfo: json,
        })

    }
    render() {
        return (
            <>
                <div className="card-about-me">
                    <div className='about-img'>
                        <img src={this.state.userInfo.avatar_url} alt="about me" />
                    </div>
                    <div className="detail-about">
                    <h3>Name : {this.state.userInfo.name}</h3>
                    <h4>Location :{this.state.userInfo.location}</h4>
                        <p>{this.state.userInfo.bio}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default ChildProfile