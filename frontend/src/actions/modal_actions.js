export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const openModal = modalType => ({
  type: OPEN_MODAL,
  modalType
})

export const closeModal= () => ({
  type: CLOSE_MODAL
})

