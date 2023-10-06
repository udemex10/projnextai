import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useRouter } from 'next/router';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Roadmap = () => {
  const router = useRouter();

  const [events, setEvents] = useState([
    {
       start: new Date(),
      end: new Date(moment().add(1, "days").toDate()),
      title: 'Milestone 1',
      type: 'milestone',
      id: '1',
    },
    {
      start: new Date(moment().add(5, "days").toDate()),
      end: new Date(moment().add(7, "days").toDate()),
      title: 'Deadline 1',
      type: 'deadline',
      id: '2',
    },
  ]);

  const eventStyleGetter = (event) => {
    let style = {};
    if (event.type === 'milestone') {
      style.backgroundColor = '#FFD700';  // Gold color for Milestone
    } else if (event.type === 'deadline') {
      style.backgroundColor = '#FF6347';  // Tomato color for Deadline
    }
    return {
      style: style
    };
  };

  const handleEventClick = (event) => {
    console.log(`Clicked on ${event.title}`);
    // Handle click logic here, for example:
    // router.push(`/sprint/${event.id}`);
  };

  return (
    <div className="relative p-4">
      <button
        className="absolute top-0 right-0 bg-blue-500 text-white rounded px-4 py-2"
        onClick={() => console.log("Create Milestone")}
      >
        <i className="fas fa-plus mr-2"></i>
          Create Milestone
      </button>

      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '80vh' }}
        onSelectEvent={handleEventClick}
        eventPropGetter={eventStyleGetter}
        className="mt-6"
      />
    </div>
  );
};

export default Roadmap;
