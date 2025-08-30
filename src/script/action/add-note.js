const form = document.querySelector('form')
const titleInput = form.elements.title
const bodyInput = form.elements.body
const output = document.getElementById('out')

import Note from '../api/Note.js'
import notesData from '../data/local/notes.js'

const note = new Note()

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const newNote = {
        id: `notes-${Math.random().toString(36).substr(2, 9)}`,
        title: titleInput.value,
        body: bodyInput.value,
        createdAt: new Date().toISOString(),
        archived: false,
    }

    note.postNotes({ title: newNote.title, body: newNote.body })
    titleInput.value = ''
    bodyInput.value = ''
})
