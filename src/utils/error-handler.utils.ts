import { createError } from '@fastify/error';
import { Log } from './console_log.utils';

export const CF_Error = (opts?: {
	errorCode?: string;
	message?: string;
	statusCode?: number;
	Base?: Error | undefined;
}) => {
	const errorCode = opts?.errorCode ?? opts?.Base?.name ?? 'CF_ERROR';
	const message =
		opts?.message ?? opts?.Base?.message ?? 'Internal Server Error';
	const statusCode = opts?.statusCode ?? 500;

	const CustomError = createError(errorCode, message, statusCode);

	Log.print('CF_Error', {
		errorCode,
		message,
		statusCode,
	});

	Log.print('CF_Error.stack', opts?.Base?.stack ?? CustomError().stack);

	return new CustomError();
};
