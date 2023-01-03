import React, { createContext, useState } from 'react';

export interface ITable {
	showModal: boolean;
	setShowModal: () => void;
}

export const TableContext = createContext({
	showModal: false,
	handleSetModal: () => {},
	activeTableId: '1',
	handleSetActiveTable: (table: string) => {},
});

const TableProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [activeTableId, setActiveTable] = useState('1');

	const handleSetModal = () => {
  console.log(activeTableId)
  setShowModal((showModal) => !showModal);
 }

	const handleSetActiveTable = (table: string) => setActiveTable(table);

	return (
		<TableContext.Provider
			value={{ showModal, handleSetModal, activeTableId, handleSetActiveTable }}
		>
			{children}
		</TableContext.Provider>
	);
};

export { TableProvider };
