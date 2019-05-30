import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import AppLogo from 'components/app-logo';
import { SubTitle } from 'components/typography';

const Component = props => {
  const { onChangeView } = props;
  return (
    <Fragment>
      <AppLogo/>
      <SubTitle>Premium Vape Shop Costa Rica</SubTitle>
      <Button
        primary
        onClick={() => onChangeView('setParticipants')}
      >
        Giveaway
      </Button>
    </Fragment>
  );
};

Component.propTypes = {
  onChangeView: PropTypes.func.isRequired,
}

export default Component;
