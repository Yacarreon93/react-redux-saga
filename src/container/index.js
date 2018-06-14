import { connect } from 'react-redux';

import App from '../components/App';
import { 
  fetchStarWarsRequest,
  fetchStarWarsPlanetsRequest,
  confirmFetchRequest,
  queueChannelRequest,
} from '../actions';

const mapStateToProps = ({ starWars }) => ({ starWars });

const bindActionsToDispatch = dispatch => (
  {
    fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
    fetchStarWarsPlanetsRequest: () => dispatch(fetchStarWarsPlanetsRequest()),
    confirmFetchRequest: () => dispatch(confirmFetchRequest()),
    queueChannelRequest: () => dispatch(queueChannelRequest()),
  }
);

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App);

export default AppContainer;
