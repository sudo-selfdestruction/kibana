/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React from 'react';
import { euiThemeVars } from '@kbn/ui-theme';
import { EuiTitle, EuiSpacer } from '@elastic/eui';
import { DistributionBar as DistributionBarComponent } from '..';

const mockDataFindings = [
  {
    key: 'passed',
    count: 90,
    color: euiThemeVars.euiColorVis0,
  },
  {
    key: 'failed',
    count: 10,
    color: euiThemeVars.euiColorVis9,
  },
];

const mockDataAlerts = [
  {
    key: 'low',
    count: 30,
    color: euiThemeVars.euiColorVis0,
  },
  {
    key: 'medium',
    count: 30,
    color: euiThemeVars.euiColorVis5,
  },
  {
    key: 'high',
    count: 10,
    color: euiThemeVars.euiColorVis7,
  },
  {
    key: 'critical',
    count: 10,
    color: euiThemeVars.euiColorVis9,
  },
];

export default {
  title: 'DistributionBar',
  description: 'Distribution Bar',
};

export const DistributionBar = () => {
  return [
    <EuiTitle size={'xs'}>
      <h4>{'Findings'}</h4>
    </EuiTitle>,
    <EuiSpacer size={'s'} />,
    <DistributionBarComponent data={mockDataFindings} />,
    <EuiSpacer size={'m'} />,
    <EuiTitle size={'xs'}>
      <h4>{'Alerts'}</h4>
    </EuiTitle>,
    <EuiSpacer size={'s'} />,
    <DistributionBarComponent data={mockDataAlerts} />,
  ];
};
