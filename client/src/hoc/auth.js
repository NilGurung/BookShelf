/**
 * Created by nilkanthagurung on 3/5/18.
 */
import React, {Component} from 'react';
import { auth } from '../actions';
import {connect} from 'react-redux';

export default function(ComposedClass, reload) {

    class AuthenticationCheck extends Component {
        state = {
            loading: true
        }

        // Checking user authenticate or not
        componentWillMount() {
            this.props.dispatch(auth());
        }

        componentWillReceiveProps(nextProps) {
            //console.log(nextProps);
            this.setState({loading: false});

            if(!nextProps.user.login.isAuth) {
                if(reload ) {
                    this.props.history.push('/login');
                }
            } else {
                if(reload === false ){
                    this.props.history.push('/user');
                }
            }

        }

        render() {
            //console.log(this.props);
            if(this.state.loading) {
                return  <div className="loader">Loading...</div>
            } else {
                return (
                   <ComposedClass {...this.props} user= {this.props.user} />
                )
            }

        }
    }


    function mapStateToProps(state) {
        return {
            user:state.user
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck)
}