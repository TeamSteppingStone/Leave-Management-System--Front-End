import React, { Component } from "react";
import MetricPill from "../../commons/metric-pill";
import Card from '../../commons/card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LieuLeave from '../leave-system/lieu-leave-request/leave-lieu';
import EmployeeLieuLeaveHistory from '../leave-system/lieu-leave-request/employee-lieu-leave-history';
import ApplyCarryforwardLeave from '../leave-system/components/apply-carryforward-leave';
import CarryForwardLeaveHistory from '../leave-system/components/carry-forward-leave-history';

// const leaveCounts = [
//   { title: "Casual", total: 10, count: 3 },
//   { title: "Annual", total: 8, count: 5 },
//   { title: "Medical", total: 15, count: 13 },
//   { title: "LieuLeave", total: 15, count: 7 }
// ];

class LieuCarryforward extends Component {
  render() {
    return (
      <section className="py-5">
       <div
          className="nav nav-pills flex-column flex-sm-row"
          id="nav-tab"
          role="tablist"
        >
          <a
            className="flex-row-reverse-fill text-sm-center nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            <i className="fas fa-user-clock" />  &nbsp;&nbsp; Lieu Leave
            
          </a>

          <a
            className="flex-row-reverse-fill text-sm-center nav-link "
            id="nav-cancelled-tab"
            data-toggle="tab"
            href="#nav-cancelled"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
            
          >
            <i className="fas fa-user-clock" /> &nbsp;&nbsp; Carry Forward
          </a>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <nav />

            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div classNameName="mt-3">
                <LieuLeave/>
                <EmployeeLieuLeaveHistory/>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-cancelled"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
               <div classNameName="mt-3">
                <ApplyCarryforwardLeave/>
                </div>
                <CarryForwardLeaveHistory/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
// const mapDispachToProps = dispatch => ({
//   getLeaveRequests:()=>dispatch(fetchLeaveRequests())
// });
// const mapStateToProps = state =>({
//   leaveRequests:state.leaveStore.leaveRequests
// });
// export default connect(mapStateToProps,mapDispachToProps)(LieuCarryforward);
export default LieuCarryforward;
