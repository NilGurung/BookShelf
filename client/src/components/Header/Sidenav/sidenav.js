/**
 * Created by nilkanthagurung on 3/5/18.
 */
import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenav-items';

const Nav = (props) => {
    return (
        <SideNav
            showNav= {props.showNav}
            onHideNav= {props.onHideNav}
            navStyle={{
                background:'#242424',
                maxWidth:'220px',
                cursor: 'pointer'
            }}
        >
            <SidenavItems />
        </SideNav>
    )
};

export default Nav;
