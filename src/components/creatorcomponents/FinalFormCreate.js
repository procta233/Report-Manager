import React from 'react'
import EditSetPoints from './subcreatecomponents/EditSetPoints'
import ReportColumnEdit from './subcreatecomponents/ReportColumnEdit'

const FinalFormCreate = () => {
  return (
    <div>
        <h1>Final Form Creation</h1>
        <h2>Edit Set Points</h2>
      <div className='app'>
        <EditSetPoints/>
      </div>
      <h2>Edit Column Order</h2>
      <div className='app'>
        <ReportColumnEdit/>
      </div>
    </div>
  )
}

export default FinalFormCreate
