import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import _shuffle from 'lodash/shuffle';
import _debounce from 'lodash/debounce';
import _trim from 'lodash/trim';
import Config from 'config';
import { Row, Container } from 'components/layout';
import Button from 'components/button';
import { Title, P } from 'components/typography';
import ImgSVG from 'components/svg';
import shuffleSpinner from '../../components/svg/shuffle-spinner.svg';
import { useAppContext } from '../../App/context';
import { getRandomTimeout } from './helpers';

const forcedWinner = _trim(Config.forcedWinner) || null;
const pickingWinnerDuration = getRandomTimeout() * 1000;

const Shuffle = ({ nextView, previousView }) => {
    const { participants, onSelectedWinner, onChangeView } = useAppContext();
    const [winnerName, setWinnerName] = useState(null);
    const debouncedOnSelectWinner = _debounce(onSelectedWinner, 100);
    const shuffledParticipants = useMemo(() => _shuffle(participants), [participants]);
    const randomTimeout = useRef(null);
    const shuffleInterval = useRef(null);
    const winnerTimeout = useRef(null);
    const setSelected = useCallback(
        index => {
            const selected = shuffledParticipants[index];
            setWinnerName(selected);
        },
        [shuffledParticipants],
    );

    useEffect(() => {
        if (!randomTimeout.current) {
            randomTimeout.current = setTimeout(() => {
                clearInterval(shuffleInterval.current);
                if (forcedWinner) {
                    const finalWinner = shuffledParticipants.indexOf(forcedWinner);
                    if (finalWinner >= 0) {
                        setSelected(finalWinner);
                    }
                }
                winnerTimeout.current = setTimeout(function () {
                    onChangeView(nextView);
                }, 500);
            }, pickingWinnerDuration);

            shuffleInterval.current = setInterval(function () {
                const randomParticipant = Math.floor(Math.random() * shuffledParticipants.length);
                setSelected(randomParticipant);
            }, 150);
        }

        return () => {
            clearTimeout(randomTimeout.current);
            clearTimeout(winnerTimeout.current);
            clearInterval(shuffleInterval.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (winnerName) {
            debouncedOnSelectWinner(winnerName);
        }
    }, [winnerName, debouncedOnSelectWinner]);

    return (
        <Container>
            <Title>
                <ImgSVG
                    width="3rem"
                    src={shuffleSpinner}
                    padding="0 1rem"
                />
                {Config.text.pickingWinnerTitle}
                <ImgSVG
                    width="3rem"
                    src={shuffleSpinner}
                    padding="0 1rem"
                />
            </Title>
            <P textAlign="center">{winnerName}</P>
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

Shuffle.propTypes = {
    getRandomTimeout: PropTypes.func,
    forcedWinner: PropTypes.string,
    onChangeView: PropTypes.func.isRequired,
    nextView: PropTypes.string,
};

Shuffle.defaultProps = {
    forcedWinner: null,
    previousView: 'setParticipants',
    nextView: 'winner',
};

export default Shuffle;
