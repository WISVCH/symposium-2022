import TBD_person from 'assets/speakers/TBD_person.png'
import Gabriella from 'assets/speakers/gabriella-ader.png'
import Ronald from 'assets/speakers/foto_ronald_prins.jpg'
import Klaas from 'assets/speakers/klaas-slooten.jpg'
import Zeno from 'assets/speakers/zenogeradts.jpg'
import Stefanie from 'assets/speakers/stefanie.jpg'
import Workshops from 'assets/partners/workshop_partners.png'
import MaryPaul from 'assets/speakers/Mary_Paul.jpg'

import MaryPaulSlides from 'assets/speakers/slides/MaryPaul.pdf'
import KlaasSlootenSlides from 'assets/speakers/slides/KlaasSlooten.pdf'
import RonaldPrinsSlides from 'assets/speakers/slides/RonaldPrins.pdf'
import ZenoGeradtsSlides from 'assets/speakers/slides/ZenoGeradts.pdf'
import StefanieVonkSlides from 'assets/speakers/slides/StefanieVonk.pdf'



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
    meta: 'Gabriella Adèr - The Host - Auditorium',
    speaker: 'Gabriella Adèr',
    event: 'gabriella-ader',
    bgImage: Gabriella,
  },
  {
    revealed: true,
    start: parseTime( 11, 15),
    end:   parseTime(12, 0),
    title: 'The attribution of attackers in cyberspace',
    meta: 'Ronald Prins - Auditorium',
    speaker: 'Ronald Prins',
    bio: `Ronald Prins studied applied mathematics at TU Delft and is an expert in cybersecurity. As a student, he was always fascinated by the then up and coming internet. He often listened to police radios with his own scanner. After graduation he worked for NFI before founding the company Fox-IT, an cybersecurity company that worked with different governments and secret services such as the FBI.`,
    event: 'ronald-prins',
    bgImage: Ronald,
    slides: RonaldPrinsSlides
  }, {
    revealed: true,
    start: parseTime(12, 0),
    end:   parseTime(12, 15),
    title: 'Coffee break',
  },
  {
    revealed: true,
    start: parseTime(12, 15),
    end:   parseTime(13, 0),
    title: 'Interpretation of DNA mixtures',
    meta: 'Klaas Slooten - Senaatszaal',
    speaker: 'Klaas Slooten',
    bio: `Dr. Klaas Slooten focuses on the application of mathematics and statistics in DNA investigation, with family relations tests as the point of departure. These tests are used in criminal investigations (familial searching) and in identification procedures in, for example, major disasters. In cooperation with VU Amsterdam Klaas Slooten focuses on maximising search strategies in forensic DNA databases, including on establishing the most efficient method for familial searching. He also gives lectures on ‘The use of statistics in legal court cases’ for the VU Honours programme.`,
    event: 'klaas-slooten',
    bgImage: Klaas,
    slides: KlaasSlootenSlides,
  }, {
    revealed: true,
    start: parseTime(12, 15),
    end:   parseTime(13, 0),
    title: 'The privacy challenge of human trafficking data',
    meta: 'Mary Adams and Paul Fockens - Auditorium',
    speaker: 'Mary Adams and Paul Fockens',
    bio: `Mary Adams is originally from Texas, United States. After 25 years of working in management consulting with Capgemini, one charitable human rights event opened her eyes and acted as a catalyst for a career change. As Founder and Director of Sustainable Rescue Foundation, she is now using her consulting skills, business knowledge, thought leadership, and determination to help organizations disrupt the human trafficking business model.\n\n All his life, Paul Fockens’ passion has been to use technology for the improvement of business results. Now he is focused on using technology to eradicate human trafficking from our planet. Paul is committed to make the invisible crime of human trafficking visible using all Human Intelligence available.`,
    event: 'mary-paul',
    bgImage: MaryPaul,
    slides: MaryPaulSlides,
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
    title: 'Evidence based on digital data',
    meta: 'Zeno Geradts - Senaatszaal',
    speaker: 'Zeno Geradts',
    bio: `Zeno Geradts is a senior forensic scientist at the Dutch Forensic Institute of the Ministry of Security and Justice at the Forensic Digital Biometrics Traces departement. He is an expert witness in the area of forensic (video) image processing and biometrics such as manipulation detection on deepfakes. Within the team Forensic Big Data Analysis he works in research on artificial intelligence on text, images and video. He is one of the founders of the new ICAI lab AI4Forensics that is being established with UvA and NFI.`,
    event: 'zeno-geradts',
    bgImage: Zeno,
    slides: ZenoGeradtsSlides,
  },
  {
    revealed: false,
    start: parseTime(14, 0),
    end:   parseTime(14, 45),
    title: 'Detection of Financial crime',
    meta: 'Stefanie Vonk - Auditorium',
    speaker: 'Stefanie Vonk',
    bio: `Stefanie Vonk is a Manager Forensic and Financial Crime Analytics at Deloitte. After graduating Applied Mathematics at the TU Delft in 2016, she looked for a place where she could apply her skills for a good cause. An important threat that we experience is criminals trying to influence our society in all possible ways. One key method is the abuse of our financial system by criminals, to hide ("launder") money earned with illegal activities such as drug trafficking. In the detection of this kind of abuse, the application of advanced technologies like outlier detection and network analytics has proven to be very successful. It was therefore an easy choice for her to start working in the field of detecting Financial Crime. The best of both worlds.`,
    event: 'stefanie-vonk',
    bgImage: Stefanie,
    slides: StefanieVonkSlides,
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
    title: 'Workshops',
    meta: '',
    speaker: 'Workshops',
    event: 'worskhops',
    bgImage: Workshops,
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
