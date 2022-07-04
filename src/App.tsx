import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { publicRoute } from 'routes';
import DefaultLayout from 'layout/DefaultLayout';
import './App.css';

function App() {
   return (
      <Router>
         <div className="App">
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/following">Following</Link>
               </li>
               <li>
                  <Link to="/upload">Upload</Link>
               </li>
            </ul>
            <Routes>
               {publicRoute.map((route, i) => {
                  const Layout = route.layout ?? DefaultLayout;
                  const Page = route.element;
                  return (
                     <Route
                        key={i}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
