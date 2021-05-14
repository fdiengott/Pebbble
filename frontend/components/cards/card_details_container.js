import {connect} from 'react-redux';
import { fetchCard } from '../../actions/card_actions';					//actions
import CardDetails from './card_details';						//display component

const mapStateToProps = (state, ownProps) => ({
  card: 
})

const mapDispatchToProps = (dispatch) => ({
  fetchCard: (cardId) => dispatch(fetchCard(cardId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetails);