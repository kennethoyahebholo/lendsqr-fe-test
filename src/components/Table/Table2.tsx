import { useContext, useEffect, useRef, useState } from 'react';
// import { RenderSvg, Search } from '..';
// import {
// 	capitalizeFirstLetter,
// 	getStatusColor,
// 	moneyFormat,
// 	titleCase,
// 	toAbsoluteUrl,
// 	truncate,
// 	truncateCurrencyAddress,
// 	toDateFormat,
// } from '../../helpers/utils';
// import { IPageQuery } from '../../types/_model';
// import Button from '../button/Button';
// import Card from '../card/Card';
// import Filter from '../filter/Filter';
// import { TableContext } from './TableProvider';
// import { downloadExcel } from 'react-export-table-to-excel';
import { useLocation, useNavigate } from 'react-router-dom';
import { IPageQuery } from '../../services/users.services';
import { Card } from '@mui/material';
// import * as ROUTES from '../../constants/routes';
import { titleCase, capitalizeFirstLetter, truncate, toDateFormat } from '../../utils/helpers'

import { ReactComponent as TableHeadIcon } from "../../assets/svgs/tableHeadIcon.svg";
import { ReactComponent as DotsIcon } from "../../assets/svgs/dots.svg";

import './Table.scss'

type PropsType = {
	columns: Array<string>;
	tableData: any[];
	children?: any;
	enableButton: boolean;
	className?: string;
	options?: {
		enableSearch?: boolean;
		enableFilter?: boolean;
		enableExport?: boolean;
		enableCreate?: boolean;
		createButtonText?: string;
		searchPlaceholder?: string;
	};
	loading?: boolean;
	dispatchAction?: (pageQuery?: IPageQuery) => Promise<void>;
};

const Table2 = ({
	columns,
	tableData,
	children,
	enableButton,
	className,
	options = {
		enableSearch: true,
		enableFilter: true,
		enableExport: true,
		enableCreate: false,
		createButtonText: 'Create',
	},
	loading,
	dispatchAction,
}: PropsType) => {
	// const { handleSetModal, handleSetActiveTable } = useContext(TableContext);
	const handleOpenModalSetTable = (tableId: string) => {
		// handleSetModal();
		// handleSetActiveTable(tableId);
	};

	const tableRef = useRef(null);
	const location = useLocation();

	const showButton = enableButton ? enableButton : false;
	const columnData =
		columns && columns.length > 0
			? columns
			: tableData.length > 0
			? Object.keys(tableData[0])
			: [];
	const ThData = () => {
		return columnData.map((data) => {
			return (
				<th className="min-w-150px" key={data}>
					{titleCase(data)}
     <TableHeadIcon />
				</th>
			);
		});
	};

	const handleDownloadExcel = () => {
		// downloadExcel({
		// 	fileName: location.pathname,
		// 	sheet: `${location.pathname} export`,
		// 	tablePayload: {
		// 		header: columnData,
		// 		body: tableData,
		// 	},
		// });
	};
	const {
		enableSearch,
		enableFilter,
		enableExport,
		searchPlaceholder,
		enableCreate,
		createButtonText,
	} = options;

	const defaultListLength = 10;

	const [slicedTableData, setSlicedTableData] = useState<any>([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (tableData) {
			setSlicedTableData(tableData?.slice(0, defaultListLength));
		}
	}, [tableData]);

	const handleShowMore = () => {
		if (tableData) {
			// navigate(ROUTES.COLLECTIONS);
			return;
		}
	};

	const [isKey, setIsMyKey] = useState('')

	// useEffect(()=>{
	// 	console.log('<<<<<<<<<<<'+isKey+'>>>>>>>>>>>>>>>>>')
	// }, [])

	return (
		<Card>
			<div className="card-header border-0">
				<div className="card-toolbar">
				</div>
			</div>

			<div>
				<div className={`${className ? className : 'table-responsive'}`}>
					{/*begin::Table*/}
					<table
						className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9 table-container"
						ref={tableRef}
					>
						{/*begin::Table head*/}
						<thead className="thead">
							<tr className="table-head">
								{ThData() }
							</tr>
						</thead>
						{/*end::Table head*/}
						{/*begin::Table body*/}
						<tbody className="fw-6 fw-bold text-gray-600 tbody">
							{children && children}
							{Object.values(tableData).length > 0 ? (
								!children &&
								tableData.map((data: any, index: number) => {
									return (
										<tr key={index}>
											{Object.entries(data).map(
												([key, value]: any, indexData) => {
													
													if (indexData > columnData.length - 1) {
														return null;
													}
													// if (key === 'orgName') {
													// 	return (
													// 		<td key={key}>
													// 			<span
													// 				className={`badge badge-light-${getStatusColor(
													// 					value
													// 				)}`}
													// 			>
													// 				{capitalizeFirstLetter(value)}
													// 				<p>hi</p>
													// 			</span>
													// 		</td>
													// 	);
													// }

													// if (key === 'icon') {
													// 	return (
													// 		<td key={key}>
													// 			<span>
													// 				<img
													// 					src={toAbsoluteUrl(
													// 						`/media/${value}`
													// 					)}
													// 					height="50"
													// 					alt={value}
													// 				/>
													// 			</span>
													// 		</td>
													// 	);
													// }

													// if (key === 'amount') {
													// 	return (
													// 		<td key={key}>
													// 			<span className="text-dark d-block mb-1 fs-6">
													// 				{value}
													// 			</span>

													// 			<span className="text-muted fw-bold text-muted d-block fs-7">
													// 				{data.amount_payable_coin
													// 					? data.amount_payable_coin
													// 					: '-'}
													// 			</span>
													// 		</td>
													// 	);
													// }

													if (	key === 'dateJoined'	) {
														return (
															<td key={key}>
																<span className="table-details">
																	{toDateFormat(value)}
																</span>
															</td>
														);
													}
													// if (
													// 	key === 'from' ||
													// 	key === 'to' ||
													// 	key === 'address'
													// ) {
													// 	return (
													// 		<td
													// 			className="text-dark fs-6"
													// 			key={key}
													// 		>
													// 			{value &&
													// 				truncateCurrencyAddress(value)}
													// 		</td>
													// 	);
													// }
													console.log(key)
													return (
														<td
															className='table-details'
															title={value}
															key={key}
														>
														{value}
														</td>
													);
												}
											)}
											{showButton ? (
												<td className="text-dark fs-6 text-end">
													<button
														onClick={() =>
															handleOpenModalSetTable(
																data?.uuid || data?.id
															)
														}
														className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2"
													>
														<DotsIcon />
													</button>
												</td>
											) : (
												<></>
											)}
										</tr>
									);
								})
							) : (
								<tr>
									<td colSpan={7}>
										<div className="d-flex text-center w-100 align-content-center justify-content-center">
											{!loading ? (
												'No matching records found!'
											) : (
												<span
													className="indicator-progress"
													style={{ display: 'block' }}
												>
													Please wait...
													<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
												</span>
											)}
										</div>
									</td>
								</tr>
							)}

							{tableData.length > defaultListLength && (
								<div className="show-more-less">
										<div
											onClick={handleShowMore}
											className="show-cover"
										>
											<span className="show">Show more {tableData.length}</span>
										</div>
								</div>
							)}
						</tbody>
						{/*end::Table body*/}
					</table>
					{/*end::Table*/}
				</div>
			</div>
		</Card>
	);
};

export default Table2;
