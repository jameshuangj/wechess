import Home from '../components/NotFound.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import { connect } from 'react-redux'

export const depsMapper = (context, actions) => ({
  context: () => context,
  store: context.Store,
});

const mapStateToProps = (state) => {
  return {
    i18n: state.i18n,
  }
};

export default composeAll(
  connect(mapStateToProps),
  useDeps(depsMapper)
)(Home);
