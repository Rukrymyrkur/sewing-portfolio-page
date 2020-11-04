import React from 'react';
import { projectOne, projectTwo, projectThree, projectFour } from './Data'
import { ProjectSection } from '../../components';

const Projects = () => {
    return (
        <>
            <ProjectSection {...projectOne} />
            <ProjectSection {...projectTwo} />
            <ProjectSection {...projectThree} />
            <ProjectSection {...projectFour} />
        </>
    )
}

export default Projects;
