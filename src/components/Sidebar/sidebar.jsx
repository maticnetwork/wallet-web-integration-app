import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import tokenassets from '../../assets/icons/token-gray.svg'
import bridge from '../../assets/icons/bridge-gray.svg'
import transaction from '../../assets/icons/transaction-gray.svg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/token-assets" className='tab'>
        <div className='content' > <img src={tokenassets} /> Assets on Polygon</div>
      </Link>
      <Link to="/bridge" className='tab'>
        <div className='content' > <img src={bridge} />Bridge</div>
      </Link>
      <Link to="/transactions" className='tab'>
        <div className='content' ><img src={transaction} />Transactions</div>
      </Link>
    </div>
  )
}
