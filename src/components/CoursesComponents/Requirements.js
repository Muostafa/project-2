import React from 'react'
import styles from '../../styles/CoursePage/Requirements.module.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Requirements({course}) {
  let requirements = "";
  if (course.requirements)
    requirements = course.requirements.map((requriement, index) => (
      <div key={index}>
        <FiberManualRecordIcon className={styles.icon} fontSize="small" />
        <p>{requriement}</p>
      </div>
    ));
  return (
    <div className={styles.container}>
      <h3>Requirements</h3>
      <div className={styles.requirements}>
        {requirements ||
          "We are currently working on adding this part to this course."}
      </div>
    </div>
  )
}

export default Requirements