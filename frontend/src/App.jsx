import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import Active from './containers/Activate';
import Layout from './hocs/layout';
import Activate from "./containers/Activate";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";

const App = () => (
    <Router>

      <Routes>
          <Route element  = {<Layout/>}>
            {/* <Switch> */}
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<SignUp />}/>
                <Route path='/reset_password' element={<ResetPassword />}/>
                <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />}/>
                <Route path='/activate/:uid/:token' element={<Activate />}/>

            {/* </Switch> */}
        </Route>
        </Routes>
    </Router>

);
export default App