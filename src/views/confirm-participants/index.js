import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import { List, Item } from 'components/list';
import { Row } from 'components/layout';
import { Title } from 'components/typography';

const Component = props => {
  const { onChangeView, previousView, nextView, participants } = props;

  return (
    <Fragment>
      <Title>
        {participants &&
          `Confirmar ${participants.length} Participante${participants.length > 1 ? 's' : ''}`
        }
      </Title>
      <List>
        {participants && participants.map(p => (
          <Item key={JSON.stringify(p)}>{p}</Item>
        ))
        }
      </List>
      <Row>
        <Button
          secondary
          onClick={() => onChangeView(previousView)}
        >
          Atras
        </Button>
        <Button
          primary
          onClick={() => onChangeView(nextView)}
        >
          Confirmar
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
  previousView: 'setParticipants',
  nextView: 'shuffle',
};

export default Component;
