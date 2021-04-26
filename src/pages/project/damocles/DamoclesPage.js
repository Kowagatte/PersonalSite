import React from 'react';
import {projects} from "../common/Projects";
import CommitReader from "../common/commitreader/CommitReader";
import "./damoclespage.scss"
import banner from "../../../res/damocles-banner.png"
import ProjectPage from "../common/ProjectPage";
import banana from "../../../res/banana.jpg"

class DamoclesPage extends React.Component{
    render() {
        return(
            <ProjectPage>
                <img src={banner} alt={'BannerImage'} className={'banner-image'}/>
                <CommitReader url={projects["Damocles"].commit_api}/>
                <div>
                    Damocles is a (not so MMO) RPG, that exaggerates and depends on player to player interaction.
                    Quests, Character progression, Economy, World-building are all dependent
                </div>
                <img src={banana} alt={'banana'}/>
                <img src={banana} alt={'banana'}/>
                <img src={banana} alt={'banana'}/>
                <img src={banana} alt={'banana'}/>
                <img src={banana} alt={'banana'}/>
            </ProjectPage>
        );
    }
}

export default DamoclesPage;