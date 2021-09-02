import React from 'react'
import './table.css'
const Table = (props) => {
    return (
        <div >
            <div className="table-style">
                <table>
                    <thead>
                        <tr>
                            {
                                props.headData.map((item, index) => props.renderHead(item, index))
                            }
                        </tr>

                    </thead>
                    <tbody>
                        {
                            props.bodyData.map((item, index) => props.renderBody(item, index))

                        }

                    </tbody>
                </table>
            </div >
        </div >
    )
}

export default Table
