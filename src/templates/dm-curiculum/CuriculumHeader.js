import React from 'react'
import Link from 'gatsby-link'
import StaticLogo from '../../components/StaticLogo';
import ScrollToDetail from '../../components/ScrollToDetailButton';

const CurriculumHeader = props => {
  return (
    <div className="staff-header">
      <img
        src={require('../../images/banner/Curriculum.png')}
        className="staff-header-image"
      />
      <img
        src={require('../../images/OpacityHeader.png')}
        className="staff-header-image"
      />
      <img
      src={require('../../images/banner/graphics/Hist-Curri-Ad-G.png')}
      className="staff-header-image"
    />
      <div>
        <div className="section-item-text-centered" style={{width:"100%"}}>
          <div className="text-header-title">DM CURRICULUM</div>
          <div className="text-header-sub">
            Prince of Songkla University International College
          </div>
          <div className="text-header-sub">
            <div className="row center" style={{margin:0}} >
            <div className="link-container">
              <Link
                className="default-link"
                to="/program/dm_curiculum/"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-bold" > DM Curriculum </span>
              </Link>
              <div className="link-selecting"></div>
            </div>
              
              <div
                style={{ marginLeft: '2vw', marginRight: '2vw' }}
              >
                {' | '}
              </div>

              <div className="link-container">
                <Link
                className="default-link"
                to="/program/co_operative/"
                style={{ textDecoration: 'none' }}
              >
                <span>  Cooperative Education </span>
              </Link>
                <div className="link-underline"></div>
              </div>
              
              <div style={{ marginLeft: '2vw', marginRight: '2vw' }}>
                {' | '}
              </div>
              <div className="link-container">

              <Link
                className="default-link"
                to="/program/students_showcase/1st-year-student/"
                style={{ textDecoration: 'none' }}
              >
                <span> Student Showcase </span>
              </Link>
                <div className="link-underline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StaticLogo />
      <ScrollToDetail />

    </div>
  )
}

export default CurriculumHeader
