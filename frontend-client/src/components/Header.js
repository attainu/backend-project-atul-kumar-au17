
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Home from './headercomponents/Home';
import Login from './headercomponents/Login';
import SignUp from './headercomponents/SignUp';
import Cart from './headercomponents/Cart';
import SplatRoute from './headercomponents/SplatRoute';

function Header() {
    return (
      <div>
        <header className="navbar navbar-expand-lg aks_header">
  
          <div className="part part1">
              <a className="navoptions home" href="/">
                  <img src="https://www.androidfreeware.net/img2/com-foodieskitchens-foodie.jpg" alt="logo" />
              </a>
          </div>
  
          <nav className="part part2">
            <Link to="/">Home</Link>
            <Link to="/login">Sign IN</Link>
            <Link to="/signup">Sign UP</Link>
            <Link to="/cart">Cart</Link>
          </nav>
  
        </header>
  
        <hr />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }

// export default Header;

function HeaderLayout () {
  return (
    <Routes>
    <Route path="/" element={<Header />}>
      <Route index         element={<Home />}      />
      <Route path="login"  element={<Login />}     />
      <Route path="signup" element={<SignUp />}    />
      <Route path="cart"   element={<Cart />}      />
      <Route path="*"      element={<SplatRoute />}/>
    </Route>
    </Routes>

  )
}

export default HeaderLayout