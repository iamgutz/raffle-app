import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Confetti from 'react-confetti'
import Button from 'components/button';
import { SuperTitle, Headline, Title } from 'components/typography';
import AppLogo from 'components/app-logo';
import { clearStorage } from 'utils/localstorage';
import { Podium } from './styles';

class Winner extends PureComponent {
  handleFinish = () => {
    const { onClearState } = this.props;
    clearStorage();
    onClearState(this.handleStartOver);
  }
  handleStartOver = () => {
    const { onChangeView, nextView } = this.props;
    onChangeView(nextView);
  }
  render(){
    const { selectedWinner } = this.props;

    return (
      <Fragment>
        <Podium>
          <Title>Muchas Felicidades!</Title>
          <SuperTitle>Ganador</SuperTitle>
          <AppLogo small />
          <Headline>{selectedWinner}</Headline>
          <Button
            primary
            onClick={() => this.handleFinish()}
          >
            Empezar de Nuevo
          </Button>
        </Podium>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </Fragment>
    );
  }
}

Winner.propTypes = {
  previousView: PropTypes.string,
  nextView: PropTypes.string,
  selectedWinner: PropTypes.string.isRequired,
};

Winner.defaultProps = {
  previousView: 'shuffle',
  nextView: 'intro',
};

export default Winner;
