import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filtersSlice';
import { getFilterValue } from 'redux/selectors';

// import PropTypes from 'prop-types';
import { Label } from './Filter.stuled';

const Filter = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onFilterName = ({ target: { value } }) => {
    dispatch(setFilterValue(value));
  };

  return (
    <Label>
      Find contacts by name:
      <input type="text" value={value} onChange={onFilterName} />
    </Label>
  );
};

export { Filter };

// Filter.propTypes = {
//   value: PropTypes.string,
// };
