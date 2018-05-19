/**
 * Created by nilkanthagurung on 3/5/18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getUserPosts} from '../../actions/index';
import {moment} from  'moment';
import {Link} from 'react-router-dom';

class  UserPosts  extends Component  {

    componentWillMount() {
        this.props.dispatch(getUserPosts(this.props.user.login.id))

    }

    showUserPosts = (user) => (

        user.userPosts ?
            user.userPosts.map(item => (
                <tr key={item.id}>
                    <td>
                        <Link to={`/user/edit-post/${item._id}`}>
                            {item.name}
                        </Link>
                    </td>
                    <td>{item.author}</td>
                    <td>{item.createAT}//moment(item.createAT).format("MM/DD/YY")}</td>
                </tr>

            ))
            : null
    )

    render() {
      //console.log(this.props);

        //console.log("moment"+ moment);
        let user = this.props.user;
      return (
        <div>
            <div className="user_posts">
                <h4>Your reviews:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.showUserPosts(user)}
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

export default connect(mapStateToProps)(UserPosts);