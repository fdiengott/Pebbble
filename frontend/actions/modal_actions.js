
export const OPEN_MODAL = "OPEN_MODAL"; 
export const CLOSE_MODAL = "CLOSE_MODAL"; 

const receiveOpenModal = () => ({
  type: OPEN_MODAL,
}); 
const receiveCloseModal = () => ({
  type: CLOSE_MODAL,
}); 

export const openModal = () => dispatch => (
  dispatch(receiveOpenModal())
); 
export const closeModal = () => dispatch => (
  dispatch(receiveCloseModal())
); 