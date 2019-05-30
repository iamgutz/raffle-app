import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _shuffle from 'lodash/shuffle';
import _debounce from 'lodash/debounce';
import Component from './component';

class Shuffle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shuffledParticipants: _shuffle(props.participants),
      selected: null,
    }
    this.randomTimeout = null;
    this.shuffleInterval = null;
    this.showWinnerTimeout = null;
    this.debouncedOnSelectWinner = _debounce(props.onSelectedWinner, 100);
  }

  setSelected = (index) => {
    const { shuffledParticipants } = this.state;
    const selected = shuffledParticipants[index];

    this.setState({
      selected,
    }, () => {
      this.debouncedOnSelectWinner(selected);
    });
  }

  componentDidMount() {
    const { getRandomTimeout, forcedWinner, onChangeView, nextView } = this.props;
    const { shuffledParticipants } = this.state;
    const _this = this;
    const timeout = getRandomTimeout() * 1000;
    this.randomTimeout = setTimeout(function() {
      clearInterval(_this.shuffleInterval);
      if (forcedWinner) {
        const finalWinner = shuffledParticipants.indexOf(forcedWinner);
        if (finalWinner >= 0) {
          _this.setSelected(finalWinner);
        }
      }
      _this.showWinnerTimeout = setTimeout(function() {
        onChangeView(nextView);
      }, 500);
    }, timeout);
    this.shuffleInterval = setInterval(function() {
      const randomParticipant = Math.floor(Math.random() * shuffledParticipants.length);
      _this.setSelected(randomParticipant);
    }, 150);
  }

  componentWillUnmount() {
    this.clearState();
    clearTimeout(this.randomTimeout);
    clearTimeout(this.showWinnerTimeout);
    clearInterval(this.shuffleInterval);
  }

  clearState = () => {
    this.setState({});
  }

  render() {
    const { shuffledParticipants, selected } = this.state;
    return (
      <Component
        {...this.props}
        selected={selected}
        participants={shuffledParticipants}
      />
    );
  }
}

Shuffle.propTypes = {
  getRandomTimeout: PropTypes.func,
  forcedWinner: PropTypes.string,
  onChangeView: PropTypes.func.isRequired,
  nextView: PropTypes.string,
};

Shuffle.defaultProps = {
  forcedWinner: null,
  nextView: 'winner',
  getRandomTimeout() {
    return Math.floor(Math.random() * 10) + 5;
  },
};

export default Shuffle;
