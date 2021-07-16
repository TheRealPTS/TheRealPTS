
import Calendar from 'mdb-calendar';
const events = [
  {
    summary: 'Work on Site',
    description:
      'Get this Calendar to work, idk why it isnt really',
    start: {
      date: Calendar.moment.subtract(3, 'day').format('DD/MM/YYYY'),
      dateTime: Calendar.moment.subtract(3, 'day').format('DD/MM/YYYY') + ' 10:00',
    },
    end: {
      date: Calendar.moment.add(3, 'day').format('DD/MM/YYYY'),
      dateTime: Calendar.moment.add(3, 'day').format('DD/MM/YYYY') + ' 14:00',
    },
    color: {
      background: '#F93154',
      foreground: 'white',
    },
  },
];

const calendarElement = document.getElementById('calendar-7');
const calendarInstance = Calendar.getInstance(calendarElement);
calendarInstance.addEvents(events);