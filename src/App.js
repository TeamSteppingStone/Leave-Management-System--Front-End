import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import SideBar from './layout/side-bar';
import Header from './layout/header';
import Footer from './layout/footer';
import LeaveDashboard from './views/leave-system/leave-dashboard';

import LeaveHistory from './views/leave-system/leave-history';
import LieuLeave from '../src/views/leave-system/lieu-leave-request/leave-lieu';
import ManageLeaveDashBoard from './views/leave-system/manage-leave-dashboard';
import ManageLeaveLieu from './views/leave-system/manage-lieu-leave';
import ManageCarryforward from './views/leave-system/manage-carryforward';

import ConfigureCalendar from './views/settings/configureCalendar';
import Role from './views/user/role';


import ManageIndivitualLeaveHistory from './views/leave-system/manage-indivitual-leave-history';
import CarryForwardLeaveHistory from './views/leave-system/components/carry-forward-leave-history';

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



function App() {
  return (
    <Provider store={store}>
    <div>
    
      <Header />
      <div className="d-flex align-items-stretch">
        
        
        <SideBar />
        <div className="page-holder w-100 d-flex flex-wrap">

        
          <div className="container-fluid px-xl-5">

            <Switch>
              
              <Route exact path="/test" component={LeaveDashboard} />
              <Route exact path="/requestLeave" component={RequestLeave} />
              <Route exact path="/leaveHistory" component={LeaveHistory} />
              <Route exact path="/lieuCarriforward" component={LieuLeave} />
              <Route exact path="/manageLeaveDashboard" component={ManageLeaveDashBoard} />
              <Route exact path="/manageLeaveRequests" component={ManageProcessLeave} />
              <Route exact path="/manageLeaveLeiuLeave" component={ManageLeaveLieu} />
              <Route exact path="/manageCarryForward" component={ManageCarryforward} />
              <Route exact path="/configurecalendar" component={ConfigureCalendar} />
              <Route exact path="/manageRole" component={Role}/>
              <Route exact path="/manageUser" component={Users}/>
              <Route exact path="/configleave" component={ManageLeaveTypesAndPolicies}/>
              <Route exact path="/indivitualLeaveHistory" component={ManageIndivitualLeaveHistory}/>
              <Route exact path="/leaveAllocation" component={ManageLeaveAllocation} />
              <Route exact path="/recuitmentType" component={RecuitmentType}/>
              <Route exact path="/designation" component={ManageDesignation}/>            
            </Switch>

          </div>
          <Footer />
        </div>
      </div>
      
      </div>
      
      </Provider>
      
  );
}

export default App;
