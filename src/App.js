import React from 'react'

import { DogiCoinSimple } from './components/DogiCoin/DogiCoin_simple';
import { DogiCoinGsap } from './components/DogiCoin/DogiCoin_gsap';
import { DogiCoinGsap2 } from './components/DogiCoin/DogiCoin_gsap_2';
import { DogiCoinGsap3 } from './components/DogiCoin/DogiCoin_gsap_3';
import { DogiCoinGsap4 } from './components/DogiCoin/DogiCoin_gsap_4';

import { iconSizes } from './sizes'

export function App() {

  return (
    <div style={{ padding: 10 }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: iconSizes.map((size) => `${size}px`).join(' '),
        gridTemplateRows: 'repeat(4, 200px)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: '30px',
        rowGap: '55px',
        background: '#fff'
      }}>
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v1`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <DogiCoinSimple size={size} />
          </React.Fragment>
        ))}
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v2`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <DogiCoinGsap size={size} />
          </React.Fragment>
        ))}
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v2`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <DogiCoinGsap2 size={size} />
          </React.Fragment>
        ))}
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v2`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <DogiCoinGsap3 size={size} />
          </React.Fragment>
        ))}
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v2`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <DogiCoinGsap4 size={size} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
