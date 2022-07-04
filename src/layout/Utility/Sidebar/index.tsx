import React from 'react';
import className from 'classnames/bind';
const styles = require('./Sidebar.module.scss');

const cx = className.bind(styles.default);

function Sidebar() {
   return (
      <div className={cx('sidebar-container')}>
         <div className={cx('side-scroll')}>Sidebar</div>
      </div>
   );
}

export default Sidebar;
