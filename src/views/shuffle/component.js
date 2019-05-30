import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import { Row } from 'components/layout';
import { Title, P } from 'components/typography';

const Component = props => {
  const { onChangeView, previousView, nextView, selected } = props;

  return (
    <Fragment>
      <Title>Sorteando Ganador</Title>
      <P textAlign="center">{selected}</P>
      <Row>
        <Button
          secondary
          onClick={() => onChangeView(previousView)}
        >
          Cancelar
        </Button>
        <Button
          primary
          onClick={() => onChangeView(nextView)}
        >
          Finalizar
        </Button>
      </Row>
    </Fragment>
  );
};

Component.propTypes = {
  previousView: PropTypes.string,
  nextView: PropTypes.string,
};

Component.defaultProps = {
  previousView: 'confirmParticipants',
  nextView: 'winner',
};

export default Component;
