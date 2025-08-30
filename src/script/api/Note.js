import Loading from '../action/showLoading.js'

const showLoading = new Loading()
showLoading.showLoading()

class Note {
    constructor() {}

    async getNotes() {
        const noteListElement = document.querySelector('note-list')

        try {
            const response = await fetch(
                'https://notes-api.dicoding.dev/v2/notes'
            )
            const data = await response.json()

            noteListElement.setAttribute(
                'notes-data',
                JSON.stringify(data.data)
            )
            console.log(data)
        } catch (error) {
            console.error(error)
            alert('Check your Internet!')
            showLoading.hideLoading()
        } finally {
            showLoading.hideLoading()
        }
    }
    async postNotes({ title, body }) {
        showLoading.showLoading()
        try {
            const response = await fetch(
                'https://notes-api.dicoding.dev/v2/notes',
                {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ title: title, body: body }),
                }
            )

            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
            showLoading.hideLoading
        } finally {
            this.getNotes()
        }
    }
    async deleteNotes(id) {
        showLoading.showLoading()
        try {
            const response = await fetch(
                `https://notes-api.dicoding.dev/v2/notes/${id}`,
                {
                    method: 'DELETE',
                }
            )
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
            showLoading.hideLoading()
        } finally {
            this.getNotes()
        }
    }

    async toogleArchive(id, archived) {
        showLoading.showLoading()
        if (archived) {
            try {
                const response = await fetch(
                    `https://notes-api.dicoding.dev/v2/notes/${id}/unarchive`,
                    {
                        method: 'POST',
                    }
                )
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.error(error)
                showLoading.hideLoading()
            } finally {
                this.getNoteByArchive(archived)
            }
        } else {
            try {
                const response = await fetch(
                    `https://notes-api.dicoding.dev/v2/notes/${id}/archive`,
                    {
                        method: 'POST',
                    }
                )
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.error(error)
                showLoading.hideLoading()
            } finally {
                this.getNotes()
            }
        }
    }
    async getNoteByArchive(archived) {
        const noteListElement = document.querySelector('note-list')
        showLoading.showLoading()

        if (archived) {
            try {
                const response = await fetch(
                    'https://notes-api.dicoding.dev/v2/notes/archived'
                )
                const data = await response.json()
                noteListElement.setAttribute(
                    'notes-data',
                    JSON.stringify(data.data)
                )
                console.log(data)
            } catch (error) {
                console.error(error)
                alert('Check your Internet!')
                showLoading.hideLoading()
            } finally {
                showLoading.hideLoading()
            }
        } else {
            this.getNotes()
        }
    }
}

export default Note
