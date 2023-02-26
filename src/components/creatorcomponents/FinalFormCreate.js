import React from 'react'
import Table from './subcreatecomponents/EditSetPoints'
import Table2 from './subcreatecomponents/ReportColumnEdit'


const FinalFormCreate = () => {
  return (
    <div>
        <h1>Final Form Creation</h1>
        <h2>Edit Set Points</h2>
      <div className='app'>
        <Table/>
      </div>
      <h2>Edit Column Order</h2>
      <div className='app'>
        <Table2/>
      </div>
    </div>
  )
}

export default FinalFormCreate
