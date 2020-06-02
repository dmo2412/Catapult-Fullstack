import {connect} from 'react-redux';
import React from 'react';
//need some other imports but will come back to this

// const mapStateToProps = state => ({

// })

const mapDispatchToProps = dispatch => ({
    login: targetUser => dispatch(login(targetUser))
})

export default connect(undefined, mapDispatchToProps)(LoginForm);
