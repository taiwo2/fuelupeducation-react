import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import styles from './team.scss'

import arrowDown from '../../../../assets/images/man.jpg'

const Team = ({ prop }) => {
  return (
    <div id="team" className="">
      <div className="">
        <div className="team">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dudapibus
            leonec.
          </p>
        </div>
        <div className="Card">
          <img className="img" src={arrowDown} alt="Subjects" />
          <div className="Container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
          <div className="social">
            <ul>
              <li>
                <a href="/" className="fa-facebook">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/" className="fa-twitter">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
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
