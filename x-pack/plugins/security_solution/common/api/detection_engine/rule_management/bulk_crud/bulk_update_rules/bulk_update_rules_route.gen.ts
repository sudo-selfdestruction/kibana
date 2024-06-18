/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Bulk Update API endpoint
 *   version: 2023-10-31
 */

import { z } from 'zod';

import { RuleUpdateProps } from '../../../model/rule_schema/rule_schemas.gen';
import { BulkCrudRulesResponse } from '../response_schema.gen';

export type BulkUpdateRulesRequestBody = z.infer<typeof BulkUpdateRulesRequestBody>;
export const BulkUpdateRulesRequestBody = z.array(RuleUpdateProps);
export type BulkUpdateRulesRequestBodyInput = z.input<typeof BulkUpdateRulesRequestBody>;

export type BulkUpdateRulesResponse = z.infer<typeof BulkUpdateRulesResponse>;
export const BulkUpdateRulesResponse = BulkCrudRulesResponse;
