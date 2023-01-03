import { useRef } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import { titleCase, toDateFormat } from '../../utils/helpers'
import { ReactComponent as TableHeadIcon } from "../../assets/svgs/tableHeadIcon.svg";
import { ReactComponent as DotsIcon } from "../../assets/svgs/dots.svg";

import './Table.scss'
import { IPageQuery } from '../../types/_model';

type PropsType = {
	columns: Array<string>;
	tableData: any[];
	children?: any;
	enableButton: boolean;
	className?: string;
	loading?: boolean;
	dispatchAction?: (pageQuery?: IPageQuery) => Promise<void>;
};

const Table = ({
	columns,
	tableData,
	children,
	enableButton,
	className,
	loading,
	dispatchAction,
}: PropsType) => {

	const navigate = useNavigate()
	const handleOpenModalSetTable = (tableId: string, tableData:any) => {
		navigate(`/user-details/${tableId}`, { state: tableData})
	};

	const tableRef = useRef(null);

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
     <TableHeadIcon className='table-icon pointer' />
				</th>
			);
		});
	};

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
										<tr 
										className="pointer"
										onClick={() =>
															handleOpenModalSetTable(	data?.uuid || data?.id, data	)
														} key={index}>
											{Object.entries(data).map(
												([key, value]: any, indexData) => {
													
													if (indexData > columnData.length - 1) {
														return null;
													}
													if (	key === 'dateJoined'	) {
														return (
															<td key={key}>
																<span className="table-details">
																	{toDateFormat(value)}
																</span>
															</td>
														);
													}
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
																data?.uuid || data?.id, data
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
						</tbody>
						{/*end::Table body*/}
					</table>
					{/*end::Table*/}
				</div>
			</div>
		</Card>
	);
};

export default Table;
