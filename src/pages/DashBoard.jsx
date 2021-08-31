import React from 'react'
import statuscard from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/statuscard/StatusCard'
import Chart from 'react-apexcharts'

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

const DashBoard = () => {
    return (
        <div>
            <h2>DashBoard</h2>
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
        </div>
    )
}

export default DashBoard
