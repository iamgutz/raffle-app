import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import TextArea from 'components/text-area';
import Button from 'components/button';
import { Row, Container } from 'components/layout';
import { Title } from 'components/typography';
import Config from 'config';

const Component = props => {
  const {
    onChangeView,
    previousView,
    nextView,
    onTextareaChange,
    participants,
  } = props;

  return (
    <Container>
      <Title>
        {Config.text.addParticipantsTitle}
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
          {Config.text.cancelButton}
        </Button>
        <Button
          primary
          onClick={() => onChangeView(nextView)}
          disabled={_isEmpty(participants)}
        >
          {Config.text.continueButton}
        </Button>
      </Row>
    </Container>
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
