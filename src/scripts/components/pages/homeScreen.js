import renderToDom from '../../helpers/renderToDom';

// const userMessage = () => {
//   const userString = `<h1>Welcome, ${user.displayName}!</h1>`;
// };

const homeButtons = (user) => {
  const domString = `
  <h1>Welcome, ${user.displayName}!</h1>
  <button type="button" class="btn btn-success btn-lg btn-block" id="view-orders-dom-btn">View Orders</button>
  <button type="button" class="btn btn-primary btn-lg btn-block" id="create-order-dom-btn">Create an Order</button>
  <button type="button" class="btn btn-warning btn-lg btn-block" id="view-revenue-dom-btn">View Revenue</button>
  `;
  renderToDom('#main-container', domString);
};

export default homeButtons;