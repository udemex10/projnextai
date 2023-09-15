// components/Roadmap.tsx
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useRouter } from 'next/router';

// Setup the localizer by providing the moment object to the localizer
const localizer = momentLocalizer(moment);

const Roadmap = () => {
  const router = useRouter();

  // Dummy events for demonstration purposes
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(moment().add(1, "days")),
      title: 'Sample Sprint 1',
      id: '1', // This can be the sprint ID
    },
    {
      start: new Date(moment().add(5, "days")),
      end: new Date(moment().add(7, "days")),
      title: 'Sample Sprint 2',
      id: '2',
    },
  ]);

  const handleEventClick = (event) => {
    router.push(`/sprint/${event.id}`);
  };

  return (
    <div className="relative p-4">
      <button
        className="absolute top-0 right-0 bg-blue-500 text-white rounded px-4 py-2"
        onClick={() => console.log("Create Sprint")}
      >
        <i className="fas fa-plus mr-2"></i>
        Create Sprint
      </button>

      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '80vh' }}
        onSelectEvent={handleEventClick}
        className="mt-6"
      />
    </div>
  );
};

export default Roadmap;
