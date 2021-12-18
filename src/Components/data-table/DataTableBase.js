import DataTable from 'react-data-table-component';
import Checkbox from '@material-ui/core/Checkbox';

const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

function DataTableBase(props) {
    return (
        <DataTable
            pagination
            selectableRowsComponent={Checkbox}
            selectableRowsComponentProps={selectProps}
            dense
            title
            highlightOnHover
            {...props}
        />
    );
}

export default DataTableBase;

