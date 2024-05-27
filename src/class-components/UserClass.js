import React from "react";
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            count: 0,
            name: "kasee",
            location: "dallas"
        }
    }


    render() {
        const {count } = this.state;

        return (
            <div>
                <h2>Count: {count} </h2>
                <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1,
                            count: this.state.count + 1,
                        })
                    }
                }>Increase + 1</button>
                <h1>Name: {this.props.name}</h1>
                <h1>Location: {this.props.location}</h1>
            </div>
        )
    }
}

export default UserClass;