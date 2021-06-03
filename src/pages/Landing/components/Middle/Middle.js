import React from 'react'
import PropTypes from 'prop-types'

import styles from './Middle.module.scss'

const Middle = () => {
  return (
    <div className={styles.Head}>
      <ul className={styles.HeadItems}>
        <li className={styles.HeadItem}>Browser Courses</li>
        <li className={styles.HeadItem}>My Courses</li>
        <li className={styles.headItem}>Lectures</li>
        <li className={styles.HeadItem}>Exams</li>
        <li className={styles.HeadItem}>Assignments</li>
        <li className={styles.HeadItem}>Attendance </li>
        <li className={styles.HeadItem}>Certificate </li>
      </ul>
      <input type="radio" value="MALE" name="gender" />
      Dashboard
      <input type="radio" value="FEMALE" name="gender" />
      taken Exams
    </div>
  )
}
Middle.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  className: PropTypes.string.isRequired,
}

export default Middle
