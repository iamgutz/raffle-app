import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import AppLogo from 'components/app-logo';
import { SubTitle } from 'components/typography';
import Config from 'config';

const Component = props => {
  const { onChangeView } = props;
  return (
    <Fragment>
      <AppLogo/>
      <SubTitle><strong>{Config.text.slogan}</strong></SubTitle>
      <Button
        onClick={() => onChangeView('setParticipants')}
      >
        {Config.text.enterButton}
      </Button>
    </Fragment>
  );
};

Component.propTypes = {
  onChangeView: PropTypes.func.isRequired,
}

export default Component;
