import React from 'react';

interface DataTableProps {
    data: any[];
    searchField: string;
    targetValue: string;
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
    if (data.length === 0) {
        return <p>No results found.</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email & Company</th>
                    <th>Phone</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>
                            {item.email} {item.company_name && `(${item.company_name})`}
                        </td>
                        <td>{item.phone}</td>
                        <td>{item.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;