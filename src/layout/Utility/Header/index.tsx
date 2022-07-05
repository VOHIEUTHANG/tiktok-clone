import React, { useState } from 'react';
import className from 'classnames/bind';
import images from 'assets/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Headless from '@tippyjs/react/headless';

const styles = require('./Header.module.scss');
const cx = className.bind(styles.default);

function Header() {
   const [isSearching, setIsSearching] = useState(false);
   return (
      <div className={cx('header-container')}>
         <div className={cx('header-main', 'container')}>
            <div className={cx('logo')}>
               <img src={images.logo.default} alt="" />
            </div>
            <Headless
               visible={isSearching}
               onClickOutside={() => {
                  setIsSearching(false);
               }}
               render={(attrs) => (
                  <div className="box" tabIndex={-1} {...attrs}>
                     <div
                        onClick={(e) => {
                           e.stopPropagation();
                           console.log('123');
                        }}
                        className="bg-white z-20 w-[500px] h-[200px] shadow-lg rounded-3xl"
                     >
                        Search content
                     </div>
                  </div>
               )}
            >
               <div
                  className={[
                     cx('search'),
                     'flex bg-gray-200 transition leading-[22px] pl-[16px] dark:bg-black rounded-full items-center justify-center h-[fit-content] ',
                  ].join(' ')}
               >
                  <div className="flex ">
                     <input
                        onClick={() => {
                           setIsSearching((v) => !v);
                        }}
                        className={cx('h-[22px] w-[252px] pl-1 outline-none bg-transparent', 'search-input')}
                        style={{ caretColor: 'var(--primary)' }}
                        placeholder="Search accounts and videos..."
                        spellCheck={false}
                        type="text"
                     />
                     <div className="w-[40px] flex justify-center items-center">
                        <i className="fa-solid fa-circle-xmark text-closeBtnColor"></i>
                        <i className="hidden animate-spin  fa-solid fa-spinner text-closeBtnColor"></i>
                     </div>
                  </div>
                  <div className="divider w-[1px] h-[28px]" style={{ backgroundColor: 'rgba(22, 24, 35, 0.12)' }}></div>
                  <Tippy content="Tìm Kiếm">
                     <div className="flex items-center justify-center w-[52px] h-[46px] hover:bg-bgHover transition cursor-pointer rounded-tr-[92px] rounded-br-[92px]">
                        <i
                           className="fa-solid fa-magnifying-glass"
                           style={{
                              fontSize: '20px',
                              color: 'rgba(22, 24, 35, 0.34)',
                           }}
                        ></i>
                     </div>
                  </Tippy>
               </div>
            </Headless>

            <div className={cx('nav')}>Nav</div>
         </div>
      </div>
   );
}

export default Header;
