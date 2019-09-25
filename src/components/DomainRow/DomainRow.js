import React from 'react';
import './DomainRow.css';

export default ({domainData}) => <div className='domain-row'>
  <img className='logo' src={domainData.logo} />
  {`${domainData.legalName} (${domainData.domain}) [${domainData.type} company]`}
</div>;