class NoteItem extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    static get observedAttributes() {
        return ['id', 'title', 'body', 'created-at', 'archived']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = ''
        const id = this.getAttribute('id') || ''
        const title = this.getAttribute('title') || 'Tidak ada Judul'
        const body = this.getAttribute('body') || 'Tidak ada Isi'
        const createdAt = this.getAttribute('created-at') || ''
        const archived = this.getAttribute('archived') === 'true'

        this.shadowRoot.innerHTML = `
      <style>
        .note-item {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .note-title {
          font-size: 1.2em;
          font-weight: bold;
          color: #333;
        }
        .note-content {
          margin-top: 5px;
          color: #666;
        }
        small {
          color: #999;
        }
        #delete-button {
          margin-top: 10px;
          padding: 8px 12px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          left: 0;
        }

        #delete-button:hover {
          background-color: #c0392b;
        }
        #archive-button {
          margin-top: 10px;
          padding: 8px 12px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          left: 10px;
        }
        #archive-button:hover {
          background-color: #2980b9;
        }

      </style>
      <div class="note-item">
        <h3 class="note-title">${title}</h3>
        <p class="note-content">${body}</p>
        <small>Created at: ${new Date(createdAt).toLocaleString()}</small>
        <br>
        <small>Archived: ${archived}</small><br>
        <button id="delete-button" onclick="deleteNote('${id}')">Delete</button>
        <button id="archive-button" onclick="toggleArchive('${id}',${archived})">${archived ? 'Unarchive' : 'Archive'}</button>
      </div>
    `
    }
}

customElements.define('note-item', NoteItem)
