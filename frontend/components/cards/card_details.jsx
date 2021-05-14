import React from 'react'


class CardDetails extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchCard(this.props.card.id)
  }

  


  render() {
    <div>card details</div>
  }
}


export default CardDetails; 