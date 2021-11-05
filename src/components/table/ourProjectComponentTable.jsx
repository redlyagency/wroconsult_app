import React from "react"
import { useTable } from 'react-table'

function OurProjectComponentTable() {
    const data = React.useMemo(
    () => [
        {
        col1: 'lorem',
        col2: 'opsum',
        },
        {
        col1: 'dolor',
        col2: 'sit',
        },
        {
        col1: 'amet',
        col2: 'lorem',
        },
    ],
    []
    )

    const columns = React.useMemo(
    () => [
        {
        Header: 'lorem',
        accessor: 'col1', // accessor is the "key" in the data
        },
        {
        Header: 'lorem',
        accessor: 'col2',
        },
    ],
    []
    )

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    } = useTable({ columns, data })

    return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
        {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
                <th
                {...column.getHeaderProps()}
                style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                }}
                >
                {column.render('Header')}
                </th>
            ))}
            </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
            prepareRow(row)
            return (
            <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                return (
                    <td
                    {...cell.getCellProps()}
                    style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                    }}
                    >
                    {cell.render('Cell')}
                    </td>
                )
                })}
            </tr>
            )
        })}
        </tbody>
    </table>
    )
}

    export default OurProjectComponentTable