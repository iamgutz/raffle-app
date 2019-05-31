import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import TextArea from 'components/text-area';
import Button from 'components/button';
import { Row } from 'components/layout';
import { Title } from 'components/typography';

const Component = props => {
  const {
    onChangeView,
    previousView,
    nextView,
    onTextareaChange,
    participants,
  } = props;

  return (
    <Fragment>
      <Title>
        Agregar Participantes
      </Title>
      <TextArea
        onInput={({ target: { value } }) => onTextareaChange(value)}
        defaultValue={participants && participants.join('\n')}
      />
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
          disabled={_isEmpty(participants)}
        >
          Continuar
        </Button>
      </Row>
    </Fragment>
  );
};

Component.propTypes = {
  previousView: PropTypes.string,
  nextView: PropTypes.string,
  participants: PropTypes.string.isRequired,
  onTextareaChange: PropTypes.func.isRequired,
};

Component.defaultProps = {
  previousView: 'intro',
  nextView: 'confirmParticipants',
};

export default Component;
