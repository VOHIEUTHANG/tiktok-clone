import React from 'react';
import Header from './Utility/Header';
function HeaderOnly({ children }: { children: React.ReactNode }) {
   return (
      <div>
         <Header />
         <div>
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default HeaderOnly;
