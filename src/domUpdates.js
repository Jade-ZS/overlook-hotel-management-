import {
  roleChoiceView,
  loginView,
  customerDashboard,
  myBookingsView,
  makeBookingView,
  roomDetailView,
  usernameInput,
  passwordInput,
} from './scripts'

const changeView = (views, action, classToToggle) => {
  views.forEach(view => view.classList[action](classToToggle));
};

const clearView = views => {
  views.forEach(view => view.innerHTML = '');
};

const renderRoleChoice = () => {

};

const renderLogIn = () => {

};

const renderCustomerDashboard = () => {

  
};

const renderMyBookings = () => {

};

const renderMakeBookings = () => {
 
};

const renderRoomDetail = () => {
 

};

 // displays
 const displayRoleChoice = () => {
  const itemsToHide = [loginView, customerDashboard, myBookingsView, makeBookingView, roomDetailView];
  const itemsToShow = [roleChoiceView];
  changeView(itemsToHide, 'add', 'hidden');
  changeView(itemsToShow, 'remove', 'hidden');
};

const displayLogIn = () => {
  const itemsToHide = [roleChoiceView, customerDashboard, myBookingsView, makeBookingView, roomDetailView];
  const itemsToShow = [loginView];
  changeView(itemsToHide, 'add', 'hidden');
  changeView(itemsToShow, 'remove', 'hidden');
};

const displayCustomerDashboard = () => {
  const itemsToHide = [roleChoiceView, loginView, myBookingsView, makeBookingView, roomDetailView];
  const itemsToShow = [customerDashboard];
  changeView(itemsToHide, 'add', 'hidden');
  changeView(itemsToShow, 'remove', 'hidden');
  
};

const displayMyBookings = () => {
  const itemsToHide = [roleChoiceView, loginView, customerDashboard, makeBookingView, roomDetailView];
  const itemsToShow = [myBookingsView];
  changeView(itemsToHide, 'add', 'hidden');
  changeView(itemsToShow, 'remove', 'hidden');
};

const displayMakeBookings = () => {
  const itemsToHide = [roleChoiceView, loginView, myBookingsView, customerDashboard, roomDetailView];
  const itemsToShow = [makeBookingView];
  changeView(itemsToHide, 'add', 'hidden');
  changeView(itemsToShow, 'remove', 'hidden');
};

const displayRoomDetail = () => {
  const itemsToHide = [roleChoiceView, loginView, myBookingsView, makeBookingView, customerDashboard];
  const itemsToShow = [roomDetailView];
  changeView(itemsToHide, 'add', 'hidden');
  changeView(itemsToShow, 'remove', 'hidden');
};

export {
  displayRoleChoice,
  displayLogIn,
  displayCustomerDashboard,
  displayMyBookings,
  displayMakeBookings,
  displayRoomDetail
};
