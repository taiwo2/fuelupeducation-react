import React from 'react'
import PropTypes from 'prop-types'

import styles from './Course.module.scss'
import Button from '../../../../components/UI/Button/Button'
import hero from '../../images/hero-2.jpeg'

// eslint-disable-next-line no-empty-pattern
const Course = ({}) => {
  return (
    // <div className={styles[className]}>
    <div className={styles.Course}>
      <div>
        <h1>Welcome shela</h1>
        <p>Check whatup withyour schdule</p>
      </div>
      <div>
        <img src={hero} alt="lady" />
      </div>
    </div>
  )
}

Course.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  className: PropTypes.string.isRequired,
  // header: PropTypes.string.isRequired,
  // paragraph: PropTypes.string.isRequired,
}

export default Course
