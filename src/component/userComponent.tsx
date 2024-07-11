import React, {Component} from 'react';

class UserComponent extends Component <{id:number},any>{


    componentDidMount() {
        console.log('mount')
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
            .then(value => value.json())
            .then(value => {
                this.setState()
            })
    }
    componentDidUpdate(prevProps: Readonly<{ id: number }>, prevState: Readonly<any>, snapshot?: any) {
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    render() {

        return (
            <div>
                user render
            </div>
        );
    }
}

export default UserComponent;