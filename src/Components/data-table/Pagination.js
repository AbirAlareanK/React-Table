const Pagination = (props) => {
    const {rowsPerPage , rowCount} =props.Pagination
    return (
        <>
            <p>Showing {rowsPerPage} of {rowCount}</p>
        </>
    );
}

export default Pagination;