import PropTypes from 'prop-types';
import { ButtonWrapp, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapp>
      {options.map(option => (
        <li key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>
      ))}
    </ButtonWrapp>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
