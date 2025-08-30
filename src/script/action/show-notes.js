import Note from '../api/Note.js'
const note = new Note()

document.addEventListener('DOMContentLoaded', async function () {
    note.getNotes()
})

document.getElementById('show-archive').addEventListener('change', function () {
    const isChecked = this.checked
    note.getNoteByArchive(isChecked)
})
