class ShowLoading {
    constructor() {
        this._loadingIndicator = document.getElementById('loading-indicator')
    }
    showLoading() {
        this._loadingIndicator.innerHTML = `<loading-overlay></loading-overlay>`
    }

    hideLoading() {
        this._loadingIndicator.innerHTML = ''
    }
}

export default ShowLoading
