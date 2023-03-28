import React, {useState, useEffect} from "react";
import ProjectPage from "../common/ProjectPage";
import CommitReader from "../common/commitreader/CommitReader";
import {projects} from "../common/Projects";
import banner from "../../../res/banner.png"
import './topdownshooter.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function TopDownShooterPage(){
    const [players, setPlayers] = useState(0)

    return(
        <ProjectPage>
            {/* Banner */}
            <div className={'banner-container'}>
                <img alt={'banner'} draggable={false} className={'banner'} src={banner}></img>
                <h1 className={'banner-title'}>TopDownShooter</h1>
            </div>

            {/* Download & Player Counter */}
            <div className={'download-container'}>
                <button onClick={()=>window.location.href='https://github.com/Kowagatte/TDClient/releases'} className={'download'}>
                    <FontAwesomeIcon icon={faGithub} /> Download
                </button>
                <div className={'player-counter'}>There are currently {players} people playing!</div>
            </div>

            {/* Page Content */}
            <p>
                TODO add page content
            </p>

            {/* Commit readers */}
            <div className={'commit-container'}>
                <CommitReader title={'TDClient'} class={'tds-commits'} url={projects["TopDownShooter"].commit_client}/>
                <CommitReader title={'TDServer'} class={'tds-commits'} url={projects["TopDownShooter"].commit_server}/>
            </div>
        </ProjectPage>
    );
}

export default TopDownShooterPage;