import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import { Row, Container } from '../../components/layout';
import { Title, P } from '../../components/typography';
import ImgSVG from '../../components/svg';
import suffleSpinner from '../../components/svg/shuffle-spinner.svg';
import Config from '../../config';

const Component = props => {
    const { onChangeView, previousView, nextView, selected } = props;

    return (
        <Container>
            <Title>
                <ImgSVG
                    width="3rem"
                    src={suffleSpinner}
                    padding="0 1rem"
                />
                {Config.text.pickingWinnerTitle}
                <ImgSVG
                    width="3rem"
                    src={suffleSpinner}
                    padding="0 1rem"
                />
            </Title>
            <P textAlign="center">{selected}</P>
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
                >
                    {Config.text.finishButton}
                </Button>
            </Row>
        </Container>
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
