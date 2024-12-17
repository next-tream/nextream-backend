/** @format */

import * as Joi from 'joi';

export const validationSchema = Joi.object({
	ENV: Joi.string().valid('test', 'dev', 'prod').required(),
	POSTGRESQL_TYPE: Joi.string().valid('postgres').required(),
	POSTGRESQL_HOST: Joi.string().required(),
	POSTGRESQL_PORT: Joi.number().required(),
	POSTGRESQL_USERNAME: Joi.string().required(),
	POSTGRESQL_PASSWORD: Joi.string().required(),
	POSTGRESQL_DATABASE: Joi.string().required(),
	HASH_ROUND: Joi.number().required(),
	ACCESS_TOKEN_SECRET: Joi.string().required(),
	REFRESH_TOKEN_SECRET: Joi.string().required(),
});
