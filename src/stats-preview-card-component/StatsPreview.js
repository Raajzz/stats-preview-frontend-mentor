import React from 'react'
import Helmet from 'react-helmet'
import "./StatsPreview.css"

const StatsPreview = () => {
  return (
    <>
      <Helmet>
        <style>
          {
            `
              body{
                background-color: hsl(233, 47%, 7%);
              }
            `
          }
        </style>
      </Helmet>
    </>
  )
}

export default StatsPreview