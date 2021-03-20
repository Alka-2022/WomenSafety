import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Redirect, Route} from 'react-router-dom';
import { signout } from './actions/userActions';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const userSignin=useSelector(state=>state.userSignin);
  const {userInfo}=userSignin;
  
  const dispatch=useDispatch();
  const signoutHandler=()=>{
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">SOS DEVSPACE-2K21</Link>
        </div>
        <div>
          {
            userInfo ? (
              <div className="dropdown">
                 <Link to="#">
                   {userInfo.name} {' '}
                   <i className="fa fa-caret-down"></i>
                   </Link>
                   <ul className="dropdown-content">
                   <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                   </ul>
              </div>
            ):
           <Redirect to="/signin" />
          }
        </div>
      </header>
      <main>
      
      <PrivateRoute path="/profile" component={ProfileScreen}/>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} /> 
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
   </BrowserRouter>
  );
}

export default App;
