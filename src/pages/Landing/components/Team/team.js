import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTwitter, FaBeer } from 'react-icons/fa'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import styles from './team.scss'

import arrowDown from '../../../../assets/images/arrow-down.png'

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
        <div className="Card">
          <img src={arrowDown} alt="Subjects" />
          <div className="Container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
          <div className="social">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <FontAwesomeIcon icon={['fal', 'home']} fixedWidth />
            <FontAwesomeIcon icon={['fal', 'file-alt']} fixedWidth />
            <FontAwesomeIcon icon={['fal', 'money-bill']} fixedWidth />
            <FontAwesomeIcon icon={['fal', 'cog']} fixedWidth />
            <FontAwesomeIcon icon={['fal', 'usd-square']} fixedWidth />
            <FontAwesomeIcon icon={['fal', 'play-circle']} fixedWidth />
            <FontAwesomeIcon icon={['fal', 'chess-king']} fixedWidth />
            <FontAwesomeIcon icon={['fal', 'sign-out-alt']} fixedWidth />
            <h3>
              Lets go for a
              <FaBeer />
            </h3>
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
