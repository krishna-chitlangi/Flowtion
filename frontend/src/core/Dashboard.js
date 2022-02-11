import React from 'react';
import ReactFlowRenderer from '../react-flow-renderer';
import Layout from './Layout'
import { isAuthenticated } from '../auth'
import Showflow from '../user/Showflow'
const Dashboard = () => {
    return (

        <div>
            {isAuthenticated() && isAuthenticated().user.role === 1 &&
                < Layout
                    title="Add a flowchart"
                    description=""
                    className="container col-md-8 offset-md-2"
                >
                    <ReactFlowRenderer />

                </Layout >


            }
            {isAuthenticated() && isAuthenticated().user.role === 0 &&
                < Layout
                    title="See all flowcharts"
                    description=""
                    className="container col-md-8 offset-md-2"
                >
                    <Showflow></Showflow>

                </Layout >
            }

        </div >
    );
};

export default Dashboard;