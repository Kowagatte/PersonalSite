import React from "react";
import ProjectPage from "../common/ProjectPage";
import CommitReader from "../common/commitreader/CommitReader";
import {projects} from "../common/Projects";

class RaymondPage extends React.Component{
    render() {
        return(
            <ProjectPage>
                <CommitReader url={projects["Raymond"].commit_api}/>
                <div>
                    TODO create this page and add information
                </div>
            </ProjectPage>
        );
    }
}

export default RaymondPage;