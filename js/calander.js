const events = [
  {
    summary: 'JS Conference',
    start: {
      date: Calendar.moment.format('DD/MM/YYYY'),
    },
    end: {
      date: Calendar.moment.format('DD/MM/YYYY'),
    },
    color: {
      background: '#1266F1',
      foreground: 'white',
    },
  },
  {
    summary: 'Vue Meetup',
    start: {
      date: Calendar.moment.add(1, 'day').format('DD/MM/YYYY'),
    },
    end: {
      date: Calendar.moment.add(5, 'day').format('DD/MM/YYYY'),
    },
    color: {
      background: '#00B74A',
      foreground: 'white',
    },
  },
  {
    summary: 'Angular Meetup',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
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
  {
    summary: 'React Meetup',
    start: {
      date: Calendar.moment.add(5, 'day').format('DD/MM/YYYY'),
    },
    end: {
      date: Calendar.moment.add(8, 'day').format('DD/MM/YYYY'),
    },
    color: {
      background: '#39C0ED',
      foreground: 'white',
    },
  },
  {
    summary: 'Meeting',
    start: {
      date: Calendar.moment.add(1, 'day').format('DD/MM/YYYY'),
      dateTime: Calendar.moment.add(1, 'day').format('DD/MM/YYYY') + ' 8:00',
    },
    end: {
      date: Calendar.moment.add(1, 'day').format('DD/MM/YYYY'),
      dateTime: Calendar.moment.add(1, 'day').format('DD/MM/YYYY') + ' 12:00',
    },
    color: {
      background: '#1266F1',
      foreground: 'white',
    },
  },
  {
    summary: 'Call',
    start: {
      date: Calendar.moment.add(2, 'day').format('DD/MM/YYYY'),
      dateTime: Calendar.moment.add(2, 'day').format('DD/MM/YYYY') + ' 11:00',
    },
    end: {
      date: Calendar.moment.add(2, 'day').format('DD/MM/YYYY'),
      dateTime: Calendar.moment.add(2, 'day').format('DD/MM/YYYY') + ' 14:00',
    },
    color: {
      background: '#FFA900',
    },
  }
];

const calendarElement = document.getElementById('calendar');
const calendarInstance = Calendar.getInstance(calendarElement);
calendarInstance.addEvents(events);// JavaScript Document