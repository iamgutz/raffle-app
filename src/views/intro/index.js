import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import AppLogo from 'components/app-logo';
import { SubTitle } from 'components/typography';
import Config from 'config';
import { useAppContext } from '../../App/context';

const Intro = props => {
    const { onChangeView } = useAppContext();
    return (
        <Fragment>
            <AppLogo />
            <SubTitle>
                <strong>{Config.text.slogan}</strong>
            </SubTitle>
            <Button onClick={() => onChangeView('setParticipants')}>
                {Config.text.enterButton}
            </Button>
        </Fragment>
    );
};

Intro.propTypes = {
    onChangeView: PropTypes.func.isRequired,
};

export default Intro;
