import React from 'react'
import './token_assets.css'
import ReactWebComponent from 'react-web-component';

// export default function TokenAssets() {
//   return (
//     <div className='token'>Token Assets</div>
//   )
// }

export default class TokenAssets extends React.Component {
  render() {
    return (
      <div className='token'>Token Assets</div>
    )
  }
}

ReactWebComponent.create(<TokenAssets />, 'token-assets')