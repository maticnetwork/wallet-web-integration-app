import React from 'react'
import ReactWebComponent from 'react-web-component';
import './bridge.css'
// export default function Bridge() {
//   return (
//     <div className='bridge'>Bridge</div>
//   )
// }

export default class Bridge extends React.Component {
  render() {
    return (
      <div className='bridge'>Bridge</div>
    )
  }
}

ReactWebComponent.create(<Bridge />, 'bridge-page')