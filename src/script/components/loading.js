class Loading extends HTMLElement {
    _shadowRoot = null
    _style = null

    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._style = document.createElement('style')
    }

    connectedCallback() {
        this.render()
    }

    _updateStyle() {
        this._style.textContent = `
        
#loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(66, 65, 65, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  border: 7px solid #f3f3f3; /* Light grey */
  border-top: 7px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg);}
}`
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = ''
    }

    render() {
        this._emptyContent()
        this._updateStyle()
        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `
        <div id="loading-overlay">
          <div class="loader"></div>
        </div>
      `
    }
}

customElements.define('loading-overlay', Loading)
