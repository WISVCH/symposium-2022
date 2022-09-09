import TBD_person from 'assets/speakers/TBD_person.png'
import Gabriella from 'assets/speakers/gabriella-ader.png'
import Ronald from 'assets/speakers/foto_ronald_prins.jpg'
import Klaas from 'assets/speakers/klaas-slooten.jpg'
import Zeno from 'assets/speakers/zenogeradts.jpg'


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
    meta: 'Gabriella Adèr - The Host',
    speaker: 'Gabriella Adèr',
    event: 'gabriella-ader',
    bgImage: Gabriella,
  },
  {
    revealed: true,
    start: parseTime( 11, 15),
    end:   parseTime(12, 0),
    title: 'The attribution of attackers in cyberspace',
    meta: 'Ronald Prins',
    speaker: 'Ronald Prins',
    event: 'ronald-prins',
    bgImage: Ronald,
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
    title: 'Interpretation of DNA mixtures',
    meta: 'Klaas Slooten',
    speaker: 'Klaas Slooten',
    event: 'klaas-slooten',
    bgImage: Klaas,
  }, 
  {
    revealed: false,
    start: parseTime(12, 15),
    end:   parseTime(13, 0),
    title: 'To be announced',
    meta: 'To be announced — To be announced',
    speaker: 'To be announced',
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
    revealed: false,
    start: parseTime(14, 0),
    end:   parseTime(14, 45),
    title: 'Evidence based on digital data',
    meta: 'Zeno Geradts',
    speaker: 'Zeno Geradts',
    event: 'zeno-geradts',
    bgImage: Zeno,
  },
  {
    revealed: false,
    start: parseTime(14, 0),
    end:   parseTime(14, 45),
    title: 'To be announced',
    meta: 'To be announced — To be announced',
    speaker: 'To be announced',
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
    revealed: false,
    start: parseTime(15, 0),
    end:   parseTime(16, 30),
    title: 'Workshops',
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
