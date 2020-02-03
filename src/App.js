import React, { Component }  from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import SideBar from './layout/side-bar';
import Header from './layout/header';
import Footer from './layout/footer';
import LeaveDashboard from './views/leave-system/leave-dashboard';

import LeaveHistory from './views/leave-system/leave-history';
// import EmployeeLieuLeaveHistory from '../src/views/leave-system/lieu-leave-request/employee-lieu-leave-history';
// import LieuLeave from '../src/views/leave-system/lieu-leave-request/leave-lieu'
import LieuCarryforward from '../src/views/leave-system/lieuCarryforward';
import ManageLeaveDashBoard from './views/leave-system/manage-leave-dashboard';
import ManageLeaveLieu from './views/leave-system/manage-lieu-leave';
import ManageCarryforward from './views/leave-system/manage-carryforward';

import ConfigureCalendar from './views/settings/configureCalendar';
import Role from './views/user/role';


import ManageIndivitualLeaveHistory from './views/leave-system/manage-indivitual-leave-history';
// import CarryForwardLeaveHistory from './views/leave-system/components/carry-forward-leave-history';

import {Provider} from 'react-redux';
import store from './store';
import Users from './views/user/users';
import ManageLeaveAllocation from './views/leave-system/manage-leave-allocation';
import ManageProcessLeave from './views/leave-system/manage-process-leave';
import ManageLeaveTypesAndPolicies from './views/leave-system/manage-leave-type-policy';
import RecuitmentType from './views/employee/recuitment-type';
import ManageDesignation from './views/leave-system/manage-Designation';
import RequestLeave from './views/leave-system/leave-request/index';
import Login from'./layout/login';
import Home from './layout/home';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: true};
  }
  render() {

    const isLoggedIn = this.state.isLoggedIn;
    let view;
    if (isLoggedIn) {
        view =  <Home/>
    } else {
       view = <Login/>
    }
  return (

    
    <Provider store={store}>
    <div>
    
      {view}
      

        
      </div>
      
      </Provider>
      
  );
}
}
