import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { setInStorage, getFromStorage } from 'utils/localstorage';
import Config from 'config';
import AppComponent from './app.js';
import { parseTextAreaValue } from './helpers';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.initialState = {
      activeView: 'intro',
      participants: null,
      selectedWinner: null,
    };
    this.state = {
      activeView: getFromStorage('activeView') || this.initialState.activeView,
      participants: parseTextAreaValue(getFromStorage('participants')) || this.initialState.participants,
      selectedWinner: getFromStorage('selectedWinner') || this.initialState.selectedWinner,
    };
  }
  changeActiveView = (viewName) => {
    this.setState({
      activeView: viewName,
    });
    setInStorage('activeView', viewName);
  }
  textareaChange = (value) => {
    this.setState({
      participants: parseTextAreaValue(value) || null,
    });
    setInStorage('participants', value || null);
  }
  selectedWinner = (value) => {
    this.setState({
      selectedWinner: value || null,
    });
    setInStorage('selectedWinner', value || null);
  }
  clearState = (callback) => {
    this.setState(this.initialState, () => {
      callback();
    });
  }
  render() {
    return(
      <AppComponent
      onChangeView={this.changeActiveView}
      onTextareaChange={this.textareaChange}
      onSelectedWinner={this.selectedWinner}
      onClearState={this.clearState}
      {...this.props}
      {...this.state}
      />
    );
  }
}

App.propTypes = {
  forcedWinner: PropTypes.string,
};

App.defaultProps = {
  forcedWinner: Config.forcedWinner || null,
}

export default App;
