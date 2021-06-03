import React from 'react'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import styles from './Landing.module.scss'
import Hero from './components/Hero/Hero'
import Course from './components/Course/Course'
import Places from './components/Places/Places'
import App from './components/App/App'
import SimpleSwiper from './components/Sliders/Sliders'
import Middle from './components/Middle/Middle'
// import BasicTable from './components/Table/BasicTable'
// import TableBar from './components/TableBar/TableBar'

const Landing = props => {
  //   const items = [
  //     {
  //       id: 1,
  //       className: 'Course',
  //       header: 'Interactive quizzess, tests & exams',
  //       paragraph:
  //         'Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!',
  //     },
  //     {
  //       id: 2,
  //       className: 'CourseRight',
  //       header: 'Interactive quizzess, tests & exams',
  //       paragraph:
  //         'Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!',
  //     },
  //     {
  //       id: 3,
  //       className: 'Course',
  //       header: 'Interactive quizzess, tests & exams',
  //       paragraph:
  //         'Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!',
  //     },
  //     {
  //       id: 4,
  //       className: 'CourseRight',
  //       header: 'Interactive quizzess, tests & exams',
  //       paragraph:
  //         'Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!',
  //     },
  //   ]
  //   const itemList = []
  //   items.forEach((item, index) => {
  //     const course = (
  //       <Course
  //         key={item.id}
  //         className={item.className}
  //         header={item.header}
  //         paragraph={item.paragraph}
  //       />
  //     )
  //     itemList.push(course)
  //   })
  return (
    <>
      <div className={styles.Landing}>
        <NavBar isAuth={false} />

        <Course className="CourseRight" />
        <Middle />
        <Hero />
        {/* <TableBar /> */}
        {/* <BasicTable /> */}
        <Footer />
      </div>
    </>
  )
}

Landing.propTypes = {}

export default Landing
