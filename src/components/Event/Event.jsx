import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants';
import css from './Event.module.css';
import { Card, EventName, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const startDateFormatted = formatEventStart(start);
  const eventDurationFormatted = formatEventDuration(start, end);

  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {startDateFormatted}
      </Info>
      <Info>
        <FaClock className={css.icon} size={iconSize.sm} />
        {eventDurationFormatted}
      </Info>
      <Chip type={type} a={5} b={10}>
        {type}
      </Chip>
    </Card>
  );
};

// className={`${css.chip} ${css[type]}`}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
