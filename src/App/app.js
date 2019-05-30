import React from 'react';
import PropTypes from 'prop-types';
import { VIEWS } from 'views';
import AppWrapper from 'components/app-wrapper';
import { Main } from 'components/layout';

const App = props => {
  const { activeView, ...rest } = props;
  const ActiveContainer = VIEWS[activeView];
  return (
    <AppWrapper>
      <Main>
        <ActiveContainer
          {...rest}
        />
      </Main>
    </AppWrapper>
  );
};

App.propTypes = {
  activeView: PropTypes.string,
};

App.defaultProps = {
  activeView: 'intro',
};

export default App;
