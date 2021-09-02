import React from 'react'
import Table from '../components/table/Table'
import customers from '../assets/JsonData/customers-list.json'

const customtableHead = [
    'id',
    'name',
    'email',
    'location',
    'phone', 'total_spend', 'total_orders'
]

const renderHead = (item, index) => (
    <th key={index}>
        {item}
    </th>
)
const renderBody = (item) => (
    <tr >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.location}</td>
        <td>{item.phone}</td>
        <td>{item.total_spend}</td>
        <td>{item.total_orders}</td>
    </tr>

)
const Customers = () => {
    return (
        <div>
            <h2>Customers</h2>
            <div className="table">
                <Table
                    headData={customtableHead}
                    renderHead={renderHead}
                    bodyData={customers}
                    renderBody={renderBody}
                />
            </div>
        </div>
    )
}

export default Customers
