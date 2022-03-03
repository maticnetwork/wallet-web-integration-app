import React from 'react'
import ReactWebComponent from 'react-web-component';
import './transactions.css'
// export default function Transactions() {
//   return (
//     <div className='transactions'>Transactions</div>
//   )
// }

export default class Transactions extends React.Component {
  render() {
    return (
      <div className='transactions'>Transactions</div>
    )
  }
}

ReactWebComponent.create(<Transactions />, 'transactions-page')
