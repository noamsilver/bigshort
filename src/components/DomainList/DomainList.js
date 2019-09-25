import React, { useContext } from 'react';
import domainListContext from '../../context/domainListContext';
import DomainRow from '../DomainRow';

export default () => {
  const { domainList } = useContext(domainListContext);
  console.log({domainList});
  
  return (
    <div className='domain-list'>
      {domainList.map(domainData => <DomainRow domainData={domainData} />)}
    </div>
  );
}