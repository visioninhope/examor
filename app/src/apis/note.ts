import _axios from '@/plugins/axios'

export const NOTE_API = {
  getNotes() {
    return _axios({
      method: 'GET',
      url: '/api/note/notes',
    })
  },

  updateNoteIcon(data: any) {
    return _axios({
      method: 'PATCH',
      url: '/api/note/icon',
      data: data,
    })
  },
}