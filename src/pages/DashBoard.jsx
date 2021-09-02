import React from 'react'
import statuscard from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/statuscard/StatusCard'
import Chart from 'react-apexcharts'
import Table from '../components/table/Table'

const chartOptions = {
    series: [{
        name: 'Online customers',
        data: [40, 70, 20, 90, 35, 80, 30, 91, 60]
    },
    {
        name: 'Store customers',
        data: [40, 39, 30, 70, 80, 40, 16, 40, 20, 51, 20]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enalbled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep']
        },
        legend: {
            position: 'top'
        },

    }
}
const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}
const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}
const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}
const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>{item.status}</td>

    </tr>
)
const DashBoard = () => {
    return (
        <div>
            <h2>DashBoard</h2>
            <div className="container-dashboard">
                <div className="container-cards">
                    <div className="container-card">
                        {
                            statuscard.map((item, index) => (
                                <StatusCard
                                    icon={item.icon}
                                    title={item.title}
                                    count={item.count}
                                    key={index}
                                />

                            ))
                        }
                    </div>
                    <div className="container-card-right right-card">
                        <div className="card full-height">
                            <Chart
                                options={chartOptions.options}
                                series={chartOptions.series}
                                type='line'
                                height='100%'
                            />
                        </div>
                    </div>
                </div>
                <div className="container-table">
                    <div className="table">
                        <div className="table-header">
                            <h3>Top customers</h3>
                        </div>
                        <div className="table-customers-customer">
                            <Table
                                headData={topCustomers.head}
                                bodyData={topCustomers.body}
                                renderHead={renderCustomerHead}
                                renderBody={renderCustomerBody}
                            />
                        </div>
                    </div>
                    <div className="table table-2">
                        <div className="table-header">
                            <h3>Latest Orders</h3>
                        </div>
                        <div className="table-orders-order">
                            <Table
                                headData={latestOrders.header}
                                bodyData={latestOrders.body}
                                renderHead={renderOrderHead}
                                renderBody={renderOrderBody}
                            />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default DashBoard
