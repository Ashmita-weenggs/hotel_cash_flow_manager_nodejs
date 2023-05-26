import { FastifyRequest, FastifyReply } from "fastify";
import { ZodSchema, ZodIssue } from "zod";

export const requestValidator = async (
	request: FastifyRequest,
	reply: FastifyReply,
	opts: { schema: ZodSchema }
) => {
	// request body validation using zod safeParse
	const valid_ = opts.schema.safeParse(request.body);

	let message = '';
	let totalErrors = 0;
	let success = false;
	const messageStr = (issue: ZodIssue) =>
		`${issue.path.length > 0 ? `[${issue.path}]: ` : ''}${issue.message}`;

	if (!valid_.success) {
		console.log(valid_.error);
		message = valid_.error.issues.map(messageStr).join(' | ');
		totalErrors = valid_.error.issues.length;
		success = valid_.success;
		return reply.status(400).send({
			success,
			message,
			totalErrors,
		});
	}
};