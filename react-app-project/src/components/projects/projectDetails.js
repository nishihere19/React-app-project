import React, { version } from 'react'

export default function projectDetails(props) {
    const id = props.match.params.id;
    return (
        
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Nishi</div>
                    <div>1st January</div>
                </div>
            </div>
        </div>
    )
}
