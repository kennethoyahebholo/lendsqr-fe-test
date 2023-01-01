import { useState } from 'react';
import { cleanColumnArray, parseJSON } from '../../utils/helpers';

const getInitialState = (name:string, allColumns:any) => {
  try {
    const oldColumns = parseJSON(localStorage.tableMetaData) || [];
    const result = oldColumns?.[name];
    if (Array.isArray(result) && result.length) {
      const expected = allColumns.filter((column:any) => result.includes(column));
      return expected;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const saveColumnInLocalStorage = (name:string, selectedColumns:any) => {
  const oldColumns = parseJSON(localStorage.tableMetaData) || [];
  const newColumns = { ...oldColumns, [name]: selectedColumns };
  localStorage.setItem('tableMetaData', JSON.stringify(newColumns));
};

const useTableColumn = (raw: any, name: string) => {
  const initialState = getInitialState(name, cleanColumnArray(raw)) || raw;
  const defaultValue = cleanColumnArray(initialState);
  const [selectedColumns, setSelectedColumns] = useState(cleanColumnArray(initialState));
  const applyChanges = (selectedColumns: any) => {
    setSelectedColumns(selectedColumns);
    saveColumnInLocalStorage(name, selectedColumns);
  };

  const getColumns = (splitColumnName = false) => {
    // filter out columns that are not selected from default Columns
    const filteredColumns: any = [];
    defaultValue?.forEach?.((column: string | string[]) => {
      const columnName = Array.isArray(column) ? column[0] : column;
      if (selectedColumns.includes(columnName)) {
        if (splitColumnName) {
          // split column name that was concatenated by cleanColumnArray method
          const newColumnName = columnName.includes('__') ? columnName?.split('__') : column;
          filteredColumns.push(newColumnName);
        } else filteredColumns.push(column);
      }
    });
    return filteredColumns;
  };

  return {
    applyChanges,
    getColumns,
    selectedColumns,
  };
};

export default useTableColumn;
