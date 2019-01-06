import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

class Orders extends Component {

  state = {
    orders: [],
    loading: true
  };


  componentDidMount() {
    console.log('[componentDidMount]');
    axios.get('orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({loading: false, orders: fetchedOrders});
      })
      .catch(res => {
        this.setState({loading: false});
      });
  }

  render() {
    console.log('[Orders]');
    return (
      <div>
        {this.state.orders.map(order => (
          <Order key={order.id}
                 ingredients={order.ingredients}
                 totalPrice={order.totalPrice} />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);