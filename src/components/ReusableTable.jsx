function ReusableTable({
    columns,
    data,
    getRowKey,
    className = "",
    emptyMessage = "No records found.",
}) {
    return (
        <div className="table-responsive">
            <table className={`table align-middle mb-0 ${className}`}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.header}>
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.length > 0 ? (
                        data.map((row, index) => (
                            <tr key={getRowKey(row, index)}>
                                {columns.map((column) => (
                                    <td key={column.header} className={column.className || ""}>
                                        {column.render
                                            ? column.render(row, index)
                                            : row[column.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="text-center text-muted py-4"
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ReusableTable;
