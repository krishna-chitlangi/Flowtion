//user side flowchart playground to find correct flowchart
import React, { useState, useEffect } from "react";
import Menu from "../core/Menu";
import { getFlow } from './apiHelper'
const ShowLeader = (props) => {
    const [data,setData] = useState(false)
    useEffect(() => {
        showCurrentFlow(props.match.params.id)
    }, []);

    const showCurrentFlow = (id) => {
        getFlow(id)
            .then(data => {
                if (data.error) {

                } else {
                    data.leaderboard.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
                    setData(data.leaderboard)
                    console.log(data.leaderboard)
                }
            });
    }
    
    return (<div><Menu></Menu>
        <div style={{width: '100%',
            height: '87vh',backgroundColor:'rgba(5, 0, 255, 0.4)' ,display: 'flex',
            flexWrap: 'wrap'}}>
            
            <ul>
            Leaderboard
            <br></br>
            <br></br>
            {data && 
            data.map((a,i)=> 
                 (<li key={i}>Name:{a.name} | Time taken:{a.time}</li>)
                ) 
            }
            </ul>
        </div></div>
    );
};

export default ShowLeader;