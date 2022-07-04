import React from 'react';
import Header from './Utility/Header';
import Sidebar from './Utility/Sidebar';
function DefaultLayout({ children }: { children: React.ReactNode }) {
   return (
      <div>
         <Header />
         <div>
            <Sidebar />
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
