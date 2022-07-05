const Account = ({ img, name, realName, href }: { img: string; name: string; realName: string; href?: string }) => {
   return (
      <a href={href} className="user-item">
         <div className="user-avatar">
            <img src={img} alt="" />
         </div>
         <div className="user-infos">
            <div className="user-title">
               <h4>{name}</h4>
               <i className="fas fa-check-circle"></i>
            </div>
            <p className="user-des">{realName}</p>
         </div>
      </a>
   );
};
export default Account;
