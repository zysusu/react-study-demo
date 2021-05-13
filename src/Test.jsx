import React, { Component } from 'react';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            count: 0
        };
        this.addCount = this.addCount.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match);
        const params = this.props.match.params;
        console.log(params.id);
        this.setState(() => {
            return {
                id: params.id
            }
        })
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate: ${this.state.count}`);
    }

    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div>test-{this.state.id}</div>
                <p>You cliked { this.state.count } times</p>
                <button onClick={this.addCount}>click me</button>
            </div>
        )
    }
}

// module.exports = Test;
export default Test;