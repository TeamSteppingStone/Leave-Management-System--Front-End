import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Route, Switch } from 'react-router-dom';
import ManageLeaveAllocation from '../views/leave-system/manage-leave-allocation';
import ManageIndivitualLeaveHistory from '../views/leave-system/manage-indivitual-leave-history';
import ManageLeaveTypesAndPolicies from '../views/leave-system/manage-leave-type-policy';
import RecuitmentType from '../views/employee/recuitment-type';
import ManageDesignation from '../views/leave-system/manage-Designation';

import ConfigureCalendar from '../views/settings/configureCalendar';
import Role from '../views/user/role';
import ManageLeaveDashBoard from '../views/leave-system/manage-leave-dashboard';
import ManageLeaveLieu from '../views/leave-system/manage-lieu-leave';
import ManageCarryforward from '../views/leave-system/manage-carryforward';
import ManageProcessLeave from '../views/leave-system/manage-process-leave';
import LeaveHistory from '../views/leave-system/leave-history';
import RequestLeave from '../views/leave-system/leave-request/index';
import LieuCarryforward from '../views/leave-system/lieuCarryforward';

import Footer from './footer';
import SideBar from './side-bar';
import Header from './header';

import store from '../store';
import Users from '../views/user/users';

import LeaveDashboard from '../views/leave-system/leave-dashboard';

export default class home extends Component {
    render() {
        return (
            <Provider store={store}>
    <div>
    
      <Header />
      <div className="d-flex align-items-stretch">
        
        
        <SideBar />
        <div className="page-holder w-100 d-flex flex-wrap">

        
          <div className="container-fluid px-xl-5">

            <Switch>
              <Route exact path="/leave" component={LeaveDashboard} />
              <Route exact path="/requestLeave" component={RequestLeave} />
              <Route exact path="/leaveHistory" component={LeaveHistory} />
              <Route exact path="/lieuCarriforward" component={LieuCarryforward} />
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
        )
    }
}
