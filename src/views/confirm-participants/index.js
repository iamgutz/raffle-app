import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import { List, Item } from 'components/list';
import { Row, Container } from 'components/layout';
import { Title } from 'components/typography';
import Config from 'config';
import { useAppContext } from '../../App/context';

const ConfirmParticipants = props => {
    const { previousView, nextView } = props;
    const { onChangeView, participants } = useAppContext();

    return (
        <Container>
            {participants && (
                <>
                    <Title>{Config.text.confirmTitle}</Title>
                </>
            )}
            <List>
                {participants && participants.map(p => <Item key={JSON.stringify(p)}>{p}</Item>)}
            </List>
            <Row>
                <Button
                    secondary
                    onClick={() => onChangeView(previousView)}
                >
                    {Config.text.backButton}
                </Button>
                <Button
                    primary
                    onClick={() => onChangeView(nextView)}
                >
                    {Config.text.confirmButton}
                </Button>
            </Row>
        </Container>
    );
};

ConfirmParticipants.propTypes = {
    previousView: PropTypes.string,
    nextView: PropTypes.string,
};

ConfirmParticipants.defaultProps = {
    previousView: 'setParticipants',
    nextView: 'shuffle',
};

export default ConfirmParticipants;
