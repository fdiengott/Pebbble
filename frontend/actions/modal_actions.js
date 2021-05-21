
export const OPEN_MODAL = "OPEN_MODAL"; 
export const CLOSE_MODAL = "CLOSE_MODAL"; 

const receiveOpenModal = (cardId) => ({
  type: OPEN_MODAL,
  modal: cardId, 
}); 
const receiveCloseModal = () => ({
  type: CLOSE_MODAL,
  modal: false, 
}); 

export const openModal = (cardId) => dispatch => (
  dispatch(receiveOpenModal(cardId))
); 
export const closeModal = () => dispatch => (
  dispatch(receiveCloseModal())
); 