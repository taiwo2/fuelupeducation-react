import React from 'react'
import PropTypes from 'prop-types'
import arrowDown from '../../../../assets/images/arrow-down.png'
import styles from './team.scss'

const Team = ({ prop }) => {
  return (
    <div id="team" className="">
      <div className="">
        <div className="">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dudapibus
            leonec.
          </p>
        </div>
        <div className={styles.Card}>
          <img src={arrowDown} alt="Subjects" />
          <div className={styles.Container}>
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Team.propTypes = {
  prop: PropTypes.bool.isRequired,
}

export default Team
