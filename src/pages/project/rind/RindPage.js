import React from "react";
import ProjectPage from "../common/ProjectPage";
import CommitReader from "../common/commitreader/CommitReader";
import {projects} from "../common/Projects";

function RindPage(props){
    return(
        <ProjectPage>
            <CommitReader url={projects["Rind"].commit_api} />
            <p>
                TODO new project :)
            </p>
        </ProjectPage>
    )
}

export default RindPage;