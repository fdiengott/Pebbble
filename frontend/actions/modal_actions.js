
export const OPEN_MODAL = "OPEN_MODAL"; 
export const CLOSE_MODAL = "CLOSE_MODAL"; 

const receiveOpenModal = () => ({
  type: OPEN_MODAL,
  modal: true, 
}); 
const receiveCloseModal = () => ({
  type: CLOSE_MODAL,
  modal: false, 
}); 

export const openModal = () => dispatch => (
  dispatch(receiveOpenModal())
); 
export const closeModal = () => dispatch => (
  dispatch(receiveCloseModal())
); 