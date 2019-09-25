import React, { useState, useContext, useEffect } from 'react';
import domainListContext from '../../context/domainListContext';
import './AddDomain.css';

export default () => {
  const { addToDomainList } = useContext(domainListContext);
  const [ domain, onDomainChange ] = useState('');
  const [ addDomainWasClicked, setAddDomainWasClicked ] = useState(false);
  useEffect(() => {
    const attemptAddDomain = async () => {
      if (addDomainWasClicked) {
        
        await addToDomainList(domain);
        setAddDomainWasClicked(false);
      };
    };
    attemptAddDomain();
  }, [addDomainWasClicked, addToDomainList, domain])
  return (
    <div id='add-domain'>
      <label>Add Domain</label>
      <input type='text' value={domain} onChange={e => onDomainChange(e.target.value)} />
      <button onClick={() => setAddDomainWasClicked(true)}>Add</button>
    </div>
  );
};