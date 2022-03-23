import React from 'react';
// import ReactWebComponent from 'react-web-component';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/index.scss'
import App from './App';

// const el = ReactWebComponent.create(<App />, 'demo-app-solution', true);
// console.log("appStyle", appStyle);

class DemoAppSolution extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const { shadowRoot } = this;
        // const container = document.createElement('div');
        // shadowRoot.appendChild(container);
        ReactDOM.render(<App />, shadowRoot);

        // const styleTag = document.createElement('style');
        // styleTag.innerHTML = appStyle;
        // shadowRoot.appendChild(styleTag);
    }
}

window.customElements.define('demo-app-solution', DemoAppSolution);