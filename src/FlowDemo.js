// @flow
import React from 'react';

const FlowDemo = ({
  step1,
  step2,
  step3,
  summary,
}: {
  step1: string,
  step2: string,
  step3: string,
  summary: string,
}) => (
  <ul>
    <li>{step1}</li>
    <li>{step2}</li>
    <li>{step3}</li>
    <li>{summary}</li>
  </ul>
);

const enhance = Component => ({
  step1,
  step2,
  step3,
}: {
  step1: string,
  step2: string,
  step3: string,
}) => {
  const newProps = {
    summary: step1 + step2 + step3,
    step1,
    step2,
    step3,
  };
  return <Component {...newProps} />;
};

export default enhance(FlowDemo);
