import { PageTitle } from './components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from './json/upcoming-events.json';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
