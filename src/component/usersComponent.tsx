import React, {Component} from 'react';
import {IUser} from "../models/IUser";
import {usersService} from "../services/api.service";
import UserComponent from "./userComponent";
import {IPosts} from "../models/IPosts";
import PostComponent from "./postComponent";

type StateType={
    users:IUser[];
    posts:IPosts[]
};
class UsersComponent extends Component<{},StateType> {
     state:StateType ={
         users:[],
         posts:[]}


    componentDidMount() {
        usersService.getAll().then((users:IUser[]) => {this.setState({users})});
    }

     getPosts = (id:number) =>{
        usersService.getPostsOfUserById(id).then((posts:IPosts[]) => {this.setState({posts})}
        );}

    render() {
        return (
            <div className='mainDiv'>
                 <div className='usersDiv'>
                    {
                    this.state.users.map((user:IUser) => (<UserComponent key={user.id} user={user} getPosts={this.getPosts}/>))
                    }
                 </div>
                <div className='postsDiv'>
                    {
                    <PostComponent posts={this.state.posts} />}
                </div>

            </div>
        );
    }
}

export default UsersComponent;