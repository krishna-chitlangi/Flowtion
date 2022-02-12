import React from 'react';
import ReactFlowRenderer from '../react-flow-renderer';
import Layout from './Layout'
import { isAuthenticated } from '../auth'
import Showflow from '../user/Showflow'
import Home from './Home';
const Dashboard = (props) => {
    return (

        <div>
            {isAuthenticated() && isAuthenticated().user.role === 1 &&
                // < Layout
                //     title="Add a flowchart"
                //     description=""
                //     className="container col-md-8 offset-md-2"
                // >
                    <ReactFlowRenderer />

                // </Layout >


            }
              {isAuthenticated() && isAuthenticated().user.role === 0 && 
                //  < Layout
                //  title="See all flowcharts" 
                //     description=""
                //     className="container col-md-8 offset-md-2"
                // >
                <div> 
                    {/* {JSON.stringify(props.flow)} */}
                    <Showflow flow={props.flow}></Showflow>
                    {/* <Home></Home> */}
                
                 </div>
                //   </Layout > 
             }

        </div >
    );
};

export default Dashboard;