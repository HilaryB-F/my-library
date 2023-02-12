import './Delete.scss';

import React from 'react'

export default function Delete({setOpenDelete}) {
  return (
    <div className="delete__modal">
      <h2 className="delete__text">Yes</h2>
      <h2 className="delete__text delete__text-right" onClick={()=>{setOpenDelete(false)}}>Cancel</h2>
    </div>
  )
}
