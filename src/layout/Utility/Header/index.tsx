import React from 'react';
import className from 'classnames/bind';
import images from 'assets/image';
const styles = require('./Header.module.scss');
const cx = className.bind(styles.default);

function Header() {
   return (
      <div className={cx('header-container')}>
         <div className={cx('header-main', 'container')}>
            <div className={cx('logo')}>
               <img src={images.logo.default} alt="" />
            </div>
            <div className={[cx('search'), 'flex bg-white rounded-xl items-center justify-center '].join(' ')}>
               <div>
                  <input placeholder="Search accounts and videos..." spellCheck={false} type="text" />
                  <div>
                     <span>Clear</span>
                     <span>Loading</span>
                  </div>
               </div>
               <div className="divider w-[1px] bg-gray-400 h-3/4 mx-2"></div>
               <div>
                  <i className="fa-solid fa-magnifying-glass"></i>
               </div>
            </div>
            <div className={cx('nav')}>Nav</div>
         </div>
      </div>
   );
}

export default Header;
