import React from 'react';
import UserTableRecords from './UserTableRecords';

const AllUSERS = () => (
  <UserTableRecords defaultUrl="/admin-settlement/all" toggleStorageId="all_settlement-table-col" hasNameAndImage />
);
export default AllUSERS;