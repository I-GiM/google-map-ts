import React from 'react'

interface IconsShow {
  icon: any
}

const Icons: React.FC<IconsShow> = ({icon}) => {
  return (
    <div>
      <img src={icon} alt=""/>
    </div>
  )
}

export default Icons
