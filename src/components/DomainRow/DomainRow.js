import React from 'react';

export default ({domainData}) => <div className='domain-row'>
  {`${domainData.legalName} (${domainData.domain})`}
</div>;