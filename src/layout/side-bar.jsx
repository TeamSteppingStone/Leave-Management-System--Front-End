import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (

      <div id="sidebar" className="sidebar py-3">
        <ul className="sidebar-menu list-unstyled">
          <li className="sidebar-list-item"><a href="index.html" className="sidebar-link text-muted"><i className="fas fa-home mr-3 text-gray"></i><span>Dashboard</span></a></li>
          <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="fas fa-home mr-3 text-gray"></i><span>Profile</span></a></li>

          <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page1" aria-expanded="false" aria-controls="page1" className="sidebar-link text-muted"><i className="fas fa-th-large mr-3 text-gray"></i><span>Leave</span></a>
            <div id="page1" className="collapse">
              <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li className="sidebar-list-item"><Link to="/leave" className="sidebar-link text-muted pl-lg-5">Leave Dashboard</Link></li>
                <li className="sidebar-list-item"><Link to="/requestLeave" className="sidebar-link text-muted pl-lg-5">Request Leave</Link></li>
                <li className="sidebar-list-item"><Link to="/lieuCarriforward" className="sidebar-link text-muted pl-lg-5">Lieu/Carriforward</Link></li>
                <li className="sidebar-list-item"><Link to="/leaveHistory" className="sidebar-link text-muted pl-lg-5">Leave History</Link></li>
                


              </ul>
            </div>
          </li>
          
          <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page2" aria-expanded="false" aria-controls="page2" className="sidebar-link text-muted"><i className="fas fa-list mr-3 text-gray"></i><span>Manage Employee</span></a>
          <div id="page2" className="collapse">
              <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li className="sidebar-list-item"><Link to="/recuitmentType" className="sidebar-link text-muted pl-lg-5">Recuitment Type</Link></li>
                {/* <li className="sidebar-list-item"><Link to="/designation" className="sidebar-link text-muted pl-lg-5">Designation</Link></li> */}
              </ul>
              </div>
          </li>
          
          <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page3" aria-expanded="false" aria-controls="page3" className="sidebar-link text-muted"><i className="fas fa-list mr-3 text-gray"></i><span>Manage Leave</span></a>
            <div id="page3" className="collapse">
              <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li className="sidebar-list-item"><Link to="/manageLeaveDashboard" className="sidebar-link text-muted pl-lg-5">Leave Dashboard</Link></li>
                <li className="sidebar-list-item"><Link to="/configleave" className="sidebar-link text-muted pl-lg-5">Leave Types & Policies</Link></li>
                <li className="sidebar-list-item"><Link to="/leaveAllocation" className="sidebar-link text-muted pl-lg-5">Leave Allocation</Link></li>
                <li className="sidebar-list-item"><Link to="/manageLeaveRequests" className="sidebar-link text-muted pl-lg-5">Process Leave</Link></li>
                <li className="sidebar-list-item"><Link to="/manageLeaveLeiuLeave" className="sidebar-link text-muted pl-lg-5">Lieu Leave</Link></li>
                <li className="sidebar-list-item"><Link to="/manageCarryForward" className="sidebar-link text-muted pl-lg-5">Carry Forward</Link></li>
                
                
              </ul>
            </div>
          </li>
          <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page4" aria-expanded="false" aria-controls="page4" className="sidebar-link text-muted"><i className="fas fa-users-cog mr-3 text-gray"></i><span>Manage User</span></a>
            <div id="page4" className="collapse">
              <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li className="sidebar-list-item"><Link to="/manageRole" className="sidebar-link text-muted pl-lg-5">Role</Link></li>
                <li className="sidebar-list-item"><Link to="/manageUser" className="sidebar-link text-muted pl-lg-5">User List</Link></li>
              </ul>
            </div>
          </li>

          <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page5" aria-expanded="false" aria-controls="page5" className="sidebar-link text-muted"><i className="fas fa-cogs  mr-3 text-gray"></i><span>Settings</span></a>
            <div id="page5" className="collapse">
              <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li className="sidebar-list-item"><Link to="/configurecalendar" className="sidebar-link text-muted pl-lg-5">Configure Calendar</Link></li>
              </ul>
            </div>
          </li>
        </ul>

      </div>

    )
  }
}
export default SideBar;