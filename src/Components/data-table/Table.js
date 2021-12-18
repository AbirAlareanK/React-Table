import React, { useState } from 'react';
import DataTable  from './DataTableBase';
import { Container } from '../styled/Container.style';

const Table = () => {
    
    const [ title ] = useState('header for the table')
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
  
    return (
        <Container>
            <DataTable 
                columns={columns}
                data={data}
                selectableRows
                title={title}
                highlightOnHover={true}
            />
        </Container>
    );
};

export default Table;