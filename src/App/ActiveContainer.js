import React from 'react';
import PropTypes from 'prop-types';
import { VIEWS } from '../views';
import { useAppContext } from './context';

const ActiveContainer = () => {
    const { activeView } = useAppContext();
    const Comp = VIEWS[activeView];
    return <Comp />;
};

ActiveContainer.propTypes = {
    activeView: PropTypes.string,
};

ActiveContainer.defaultProps = {
    activeView: 'intro',
};

export default ActiveContainer;
