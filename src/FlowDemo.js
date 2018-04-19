// @flow
import React from 'react';

const STEPS = {
  step1: 'Add flow-bin',
  step2: 'Run yarn flow init',
  step3: 'Run yarn flow',
};

const FlowDemo = ({
  step1,
  step2,
  step3,
}: {
  step1: string,
  step2: string,
  step3: string,
}) => (
  <ul>
    <li>{step1}</li>
    <li>{step2}</li>
    <li>{step3}</li>
  </ul>
);

export default FlowDemo;
