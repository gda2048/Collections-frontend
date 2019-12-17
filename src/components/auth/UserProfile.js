import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../actions/authActions";

class UserProfile extends Component {

    static propTypes = {
        getUserProfile: PropTypes.func.isRequired,
        user: PropTypes.object
    };

    componentWillMount() {
        this.props.getUserProfile();
    }

    renderUser() {
        const user = this.props.user;
        if (user) {
            let date = new Date(user.date_joined)
            return (
                <div className="mx-2">
                    <h4>Username: {user.username}</h4>
                    <h4>Email: {user.email}</h4>
                    <h4>First Name: {user.first_name}</h4>
                    <h4>Last Name: {user.last_name}</h4>
                    <hr />
                    <h4>Date joined: {date.toDateString()}</h4>
                    <h4>About: {user.about}</h4>

                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                {this.renderUser()}
                {" "}
                <hr />
                <Link className="btn btn-primary mr-2" to="/profile_edit">Update Profile</Link>
                <Link className="btn btn-primary" to="/change_password">Change Password</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { getUserProfile } )(UserProfile);