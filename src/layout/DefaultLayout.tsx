import React from 'react';
import Header from './Utility/Header';
import Sidebar from './Utility/Sidebar';

function DefaultLayout({ children }: { children: React.ReactNode }) {
   return (
      <div>
         <Header />
         <div style={{ display: 'flex' }} className="container">
            <Sidebar />
            <div style={{ height: '3000px' }} className="content">
               {children}
            </div>
         </div>
      </div>
   );
}

export default DefaultLayout;
