import TBD_person from 'assets/speakers/TBD_person.png'

const parseTime = (h, m) =>
  new Date(Date.UTC(2022, 10, 18, h, m, 0))

const events = [
  {
    revealed: true,
    start: parseTime( 10, 30),
    end:   parseTime( 11, 0),
    title: 'Registration',
  },
  {
    revealed: true,
    start: parseTime( 11, 0),
    end:   parseTime( 11, 15),
    title: 'Opening',
    meta: 'TBD - The Host',
    speaker: 'TBD',
    event: 'TBD',
    bgImage: TBD_person,
  },
  {
    revealed: false,
    start: parseTime( 11, 15),
    end:   parseTime(12, 0),
    title: 'TBD',
    meta: 'TBD — TBD',
    speaker: 'TBD',
    event: 'TBD',
    bgImage: TBD_person,
  }, {
    revealed: true,
    start: parseTime(12, 0),
    end:   parseTime(12, 15),
    title: 'Coffee break',
  },
  {
    revealed: false,
    start: parseTime(12, 15),
    end:   parseTime(13, 0),
    title: 'TBD',
    meta: 'TBD — TBD',
    speaker: 'TBD',
    event: 'TBD',
    bgImage: TBD_person,
  }, 
  {
    revealed: true,
    start: parseTime(13, 0),
    end:   parseTime(14, 0),
    title: 'Lunch',
  },
  {
    revealed: true,
    start: parseTime(14, 0),
    end:   parseTime(14, 45),
    title: 'TBD',
    meta: 'TBD — TBD',
    speaker: 'TBD',
    event: 'TBD',
    bgImage: TBD_person,
  },
  {
    revealed: true,
    start: parseTime(14, 45),
    end:   parseTime(15, 0),
    title: 'Coffee break',
  },
  {
    revealed: true,
    start: parseTime(15, 0),
    end:   parseTime(16, 30),
    title: 'Workshop',
    bgImage: TBD_person,
  },
  {
    revealed: true,
    start: parseTime(16, 30),
    end:   parseTime(17, 30),
    title: 'Drinks',
  },
]

const day = {
  start: events
    .map(event => event.start)
    .reduce((min, s) => s < min ? s : min, events[0].start),
  end: events
    .map(event => event.end)
    .reduce((max, e) => e > max ? e : max, events[0].end),
}
day.duration = day.end - day.start

const times = new Array(day.end.getHours() - day.start.getHours() + 1)
  .fill(0)
  .map((_, i) => day.start.getHours() + i)

export default events

export {
  events,
  day,
  times
}
