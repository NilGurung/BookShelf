/**
 * Created by nilkanthagurung on 4/5/18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, registerUser} from '../../actions';


class  Register  extends Component  {

  state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      error: '',
  }

  componentWillMount() {
      this.props.dispatch(getUsers());
  }

  handleInputeEmail = (event) => {
      this.setState({email:event.target.value})
  }

  handleInputePassword = (event) => {
      this.setState({password:event.target.value})
  }

  handleInputeName = (event) => {
      this.setState({name:event.target.value})
  }

  handleInputeLastname = (event) => {
      this.setState({lastname:event.target.value})
  }

    componentWillReceiveProps(nextProps) {
      if(nextProps.user.register === false ) {
          this.setState({error: 'Error, Try again'});
      } else {
          this.setState({
              name: '',
              lastname: '',
              email: '',
              password: '',
          })
      }
  }

  submitForm = (e) => {
      e.preventDefault();
      this.setState({errror: ''});

      this.props.dispatch(registerUser({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          lastname: this.state.lastname,
      }), this.props.user.users)
  }

  showUsers = (user) => (
      user.users?
          user.users.map( item => (
              <tr key={item._id}>
                  <td >{item.name}</td>
                  <td >{item.lastname}</td>
                  <td >{item.email}</td>
              </tr>
          ))
          : null
  )

  render() {
      let user = this.props.user;
      return (
        <div className="rl_container">
            <form onSubmit={this.submitForm}>
                <h2>Add User</h2>
                <div className="form_element">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value= {this.state.name}
                        onChange={this.handleInputeName}
                    />
                </div>
                <div className="form_element">
                    <input
                        type="text"
                        placeholder="Enter Lastname"
                        value= {this.state.lastname}
                        onChange={this.handleInputeLastname}
                    />
                </div>
                <div className="form_element">
                    <input
                        type="text"
                        placeholder="Enter Email"
                        value= {this.state.email}
                        onChange={this.handleInputeEmail}
                    />
                </div>
                <div className="form_element">
                    <input
                        type="text"
                        placeholder="Enter Password"
                        value= {this.state.password}
                        onChange={this.handleInputePassword}
                    />
                </div>
                <button type="submit" onClick={this.submitForm}>Add User</button>
                <div className="error">
                    {this.state.error}
                </div>
            </form>

            <div className="current_users">
                <h4>Current Users</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUsers(user)}
                    </tbody>
                </table>
            </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Register);