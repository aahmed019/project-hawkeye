export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const openModal = (modalType, id, folder) => ({
  type: OPEN_MODAL,
  data: {id, folder, modalType}
})

export const closeModal= () => ({
  type: CLOSE_MODAL
})

