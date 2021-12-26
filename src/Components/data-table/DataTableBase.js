import DataTable from 'react-data-table-component';


function DataTableBase(props) {
    return (
        <DataTable
            pagination
            dense
            title
            {...props}
        />
    );
}

export default DataTableBase;

