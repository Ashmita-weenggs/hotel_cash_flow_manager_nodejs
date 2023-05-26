import { tbl_cash_manager } from '@prisma/client';
import { db } from '../../utils/db.utils';
import { manageCashBody } from './cash.schema';
import { error } from 'console';

export const manageCashService = async (data: manageCashBody, cash_id: number) => {
	let result: any = {};

	const cashExists = await db.tbl_cash_manager.findFirst({
		where: {
			cash_id,
		},
	});
	if (cashExists) {
		const cash_detail = await db.tbl_cash_manager.updateMany({
			data:{...data, date:new Date(data.date)},
			where: {
				cash_id
			},
		});
		if (cash_detail) {
			result.cash_detail = cash_detail;
		}
		return result as {
			cash_detail: tbl_cash_manager;
			isError: boolean;
			error: Error;
		};
	} else {
		const cash_detail = await db.tbl_cash_manager.create({
			data:{...data, date:new Date(data.date)},
		});
		if (cash_detail) {
			result.cash_detail = cash_detail;
		}
		return result as {
			cash_detail: tbl_cash_manager;
			isError: boolean;
			error: Error;
		};
	}
};
