import {connect} from 'react-redux';
// import {} from '../actions/';					//actions
import CardIndexItem from './card_index_item';						//display component
import { selectUserByCard } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  // user: selectUserByCard(state, )
})

// LIKE ACTION CREATORS, COLLECTION ACTION CREATORS
const mapDispatchToProps = (dispatch) => ({
  // () => dispatch(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardIndexItem);