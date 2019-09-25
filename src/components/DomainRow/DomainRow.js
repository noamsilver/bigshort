import React from 'react';

export default ({domainData}) => <div className='domain-row' key={domainData.id}>
  {`${domainData.legalName} (${domainData.domain})`}
</div>;