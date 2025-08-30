import Note from '../api/Note.js'
const note = new Note()

function deleteNote(id) {
    note.deleteNotes(id)
}

function toggleArchive(id, archived) {
    note.toogleArchive(id, archived)
}

window.toggleArchive = toggleArchive
window.deleteNote = deleteNote
