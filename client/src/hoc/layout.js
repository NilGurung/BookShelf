/**
 * Created by nilkanthagurung on 3/5/18.
 */

import React from 'react';
import Header from '../components/Header/header';

 const Layout = (props) => {
  return (
    <div>
        <Header />
        <div>
            {props.children}
        </div>
    
    </div>
  )
};

export default Layout;