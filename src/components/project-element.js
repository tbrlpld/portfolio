import React from 'react'

import style from './project-element.module.css'
import ProjectImage from './project-image'

const ProjectElement = ({ projectName, description, url, image, imageIsMacWindowScreenshot }) => {
  return (
    <div className={style.projectElement}>
      <a href={url} className={style.projectLink} />
      <ProjectImage imageName={image} projectName={projectName} isMacWindowScreenshot={imageIsMacWindowScreenshot} />
      <div className={style.projectData}>
        <h3 className={style.projectName}>{projectName}</h3>
        <p className={style.projectDescription}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectElement