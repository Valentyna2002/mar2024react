import React, {Component} from 'react';
import {IUser} from "../models/IUser";
import UsersComponent from "./usersComponent";

type PropType = {user:IUser, getPosts:(id:number) => void}

class UserComponent extends Component<PropType> {
    handleClick=()=>{
        this.props.getPosts(this.props.user.id)
    }
    render() {
        const {user}= this.props
        return (
            <div>
                <h2>{user.id} : {user.firstName} {user.lastName}</h2>

                <p><strong>Maiden Name:</strong> {user.maidenName}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Birth Date:</strong> {user.birthDate}</p>
                <img src={user.image} alt={`${user.firstName} ${user.lastName}`}/>
                <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
                <p><strong>Height:</strong> {user.height}</p>
                <p><strong>Weight:</strong> {user.weight}</p>
                <p><strong>Eye Color:</strong> {user.eyeColor}</p>
                <p><strong>Hair Color:</strong> {user.hair.color}</p>
                <p><strong>Hair Type:</strong> {user.hair.type}</p>
                <p><strong>IP Address:</strong> {user.ip}</p>
                <p>
                    <strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state}, {user.address.stateCode}, {user.address.postalCode}, {user.address.country}
                </p>
                <p><strong>Coordinates:</strong> lat: {user.address.coordinates.lat}, lng: {user.address.coordinates.lng}
                </p>
                <p><strong>Mac Address:</strong> {user.macAddress}</p>
                <p><strong>University:</strong> {user.university}</p>
                <p><strong>Bank:</strong> Card Number: {user.bank.cardNumber}, Card Expire: {user.bank.cardExpire}, Card
                    Type: {user.bank.cardType}, Currency: {user.bank.currency}, IBAN: {user.bank.iban}</p>
                <p><strong>Company:</strong> {user.company.name}, {user.company.title}, {user.company.department}</p>
                <p><strong>Company
                    Address:</strong> {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.stateCode}, {user.company.address.postalCode}, {user.company.address.country}
                </p>
                <p><strong>Company Coordinates:</strong> lat: {user.company.address.coordinates.lat},
                    lng: {user.company.address.coordinates.lng}</p>
                <p><strong>SSN:</strong> {user.ssn}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <button onClick={this.handleClick}>
                    show posts of this user
                </button>
            </div>
        );
    }
}

export default UserComponent;