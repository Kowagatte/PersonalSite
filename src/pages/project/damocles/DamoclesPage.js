import React from 'react';
import {projects} from "../common/Projects";
import CommitReader from "../common/commitreader/CommitReader";
import "./damoclespage.scss"
import banner from "../../../res/damocles-banner.png"
import ProjectPage from "../common/ProjectPage";
import News from "../common/news/News";

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
                <News href={'/testing'} title={'Beavers ate the content!'} date_posted={'April. 26 / 2021'} />
            </ProjectPage>
        );
    }
}

export default DamoclesPage;