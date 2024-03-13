import React from 'react';
import PropTypes from 'prop-types';
import Confetti from 'react-confetti';
import Button from 'components/button';
import { SuperTitle, Headline, Title } from 'components/typography';
import AppLogo from 'components/app-logo';
import { clearStorage } from 'utils/localstorage';
import { Podium } from './styles';
import Config from 'config';
import { useAppContext } from '../../App/context';

const Winner = ({ nextView }) => {
    const { selectedWinner, onClearState, onChangeView } = useAppContext();

    const handleStartOver = () => {
        onChangeView(nextView);
    };

    const handleFinish = () => {
        clearStorage();
        onClearState(handleStartOver);
    };

    return (
        <>
            <AppLogo small />
            <Podium>
                <Title>{Config.text.congratulationsTitle}</Title>
                <Headline>{selectedWinner}</Headline>
                <SuperTitle>{Config.text.congratulationsSuperTitle}</SuperTitle>
                <Button
                    primary
                    onClick={handleFinish}
                >
                    {Config.text.startOverButton}
                </Button>
            </Podium>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
            />
        </>
    );
};

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
