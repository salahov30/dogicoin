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
        gridTemplateColumns: iconSizes.map((size) => `${size + 25}px`).join(' '),
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
            <div style={{ display: 'flex', gap: 5, flexDirection: 'column', alignItems: 'center', padding: 10, }}>
              <DogiCoinSimple size={size} />
              <span style={{ fontSize: 7 }}>{size} x {size}</span>
            </div>
          </React.Fragment>
        ))}
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v2`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <div style={{ display: 'flex', gap: 5, flexDirection: 'column', alignItems: 'center', padding: 10, }}>
              <DogiCoinGsap size={size} />
              <span style={{ fontSize: 7 }}>{size} x {size}</span>
            </div>
          </React.Fragment>
        ))}
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v2`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <div style={{ display: 'flex', gap: 5, flexDirection: 'column', alignItems: 'center', padding: 10, }}>
              <DogiCoinGsap2 size={size} />
              <span style={{ fontSize: 7 }}>{size} x {size}</span>
            </div>
          </React.Fragment>
        ))}
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v2`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <div style={{ display: 'flex', gap: 5, flexDirection: 'column', alignItems: 'center', padding: 10, }}>
              <DogiCoinGsap3 size={size} />
              <span style={{ fontSize: 7 }}>{size} x {size}</span>
            </div>
          </React.Fragment>
        ))}
        {iconSizes.map((size) => (
          <React.Fragment key={`${size}_v2`}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <div style={{ display: 'flex', gap: 5, flexDirection: 'column', alignItems: 'center', padding: 10, }}>
              <DogiCoinGsap4 size={size} />
              <span style={{ fontSize: 7 }}>{size} x {size}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
