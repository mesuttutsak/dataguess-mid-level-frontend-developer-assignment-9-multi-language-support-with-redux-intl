// src/components/Greeting.tsx
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

function Content() {

  return (
    <div>
      <p><FormattedMessage id= 'welcome' /></p>
    </div>
  );
}

export default Content;
