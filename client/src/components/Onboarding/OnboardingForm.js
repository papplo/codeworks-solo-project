import React from 'react';

export const OnboardingForm = (props) => {
  const { position } = props;
  return (
    <div>
      <p>Here is a form: </p>
      <pre>{position}</pre>
    </div>
  );
}
