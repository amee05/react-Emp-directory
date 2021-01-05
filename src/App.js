import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import people from './people.js'

const App = () => {

  const columns = [
    // {
    //   Header: 'ID',
    //   accessor: 'id'
    // },
    {
      Header: 'First Name',
      accessor: 'first_name',
      filterable: true
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
      filterable: true
    },
    {
      Header: 'Email',
      accessor: 'email',
      filterable: true
    },
    {
      Header: 'Title',
      accessor: 'title',
      filterable: true
    },
  ]

  return (
    <ReactTable
      data={people}
      columns={columns} />
  )
}

export default App
