import _compact from 'lodash/compact';
import _trim from 'lodash/trim';
import _map from 'lodash/map';

export const parseTextAreaValue = value => {
    return value && _map(_compact(value.split('\n')), _trim);
};
