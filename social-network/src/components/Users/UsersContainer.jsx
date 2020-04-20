import React from 'react';
import s from './UsersContainer.module.css'
import {follow, unFollow} from '../../redux/actions';
import {connect} from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollow(userId))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);