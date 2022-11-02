import TBD_person from '../../assets/speakers/TBD_person.png'
import Gabriella from '../../assets/speakers/gabriella-ader.png'
import Ronald from '../../assets/speakers/foto_ronald_prins.jpg'
import Klaas from '../../assets/speakers/klaas-slooten.jpg'
import Zeno from '../../assets/speakers/zenogeradts.jpg'
import Stefanie from '../../assets/speakers/stefanie.jpg'
import Workshops from '../../assets/partners/workshop_partners.png'
import MaryPaul from '../../assets/speakers/Mary_Paul.jpg'


export default [
  {
    revealed: false,
    links: [],
    img: Gabriella,
    name: 'Gabriella Adèr',
    title: 'The Host',
    abstract: 'Gabriella Adèr is a journalist and also works on producing and researching for documentaries and podcasts. Currently, she works for the NRC in the editorial team for podcasts as well as hosting the daily podcast ‘Vandaag’. She collaborated in documentaries such as ‘De Villamoord’, a documentary about the villa murder in 1998 and what mistakes were made trying to solve this crime. Other projects are ‘Misdaaddokters’ (‘Crime Doctors’), ‘Cocainekoorts’ (‘Cocaine Fever’) and ‘Leven met de Maffia’ (‘Live with the Mafia’). She is also still working on releasing more exciting documentaries. In her work Gabriella is searching for stories representing our society and she is especially interested in the paradoxes that are present in these. This makes crime and justice a particular interest of hers. This interest and her enthusiasm makes her a fantastic host for our symposium.',
    event: 'gabriella-ader',
  }, {
    revealed: true,
    links: [],
    img: Ronald,
    name: 'Ronald Prins',
    company: '',
    bio: ``,
    title: `The attribution of attackers in cyberspace`,
    abstract: `Cyberspace is more and more the playfield of nation states. They try to steal information or disrupt computer systems. The big question here is, how can we be sure what country was responsible for an attack. Do false flag attacks also exist and how hard are they to uncover? And if forensic analysts are able to trace an attack back to a country, how can we be sure that the leaders of the country are actually responsible? Ronald Prins, head of Fox-IT from 1999-2017 and internet security expert will explain how they can identify the hackers that are responsible for these attacks.`,
    event: 'ronald-prins',
  }, {
    revealed: true,
    links: [],
    img: Klaas,
    name: 'Klaas Slooten',
    company: '',
    bio: ``,
    title: `Interpretation of DNA mixtures`,
    abstract: `Dr. Klaas Slooten will talk about the interpretation of DNA mixtures, traces to which several people have contributed, found at crime scenes. He will explain the mathematical models used to calculate the likelihood of a certain person being present at the scene of the crime. Furthermore, he will talk about the communication between the forensic department and the judicial system.`,
    event: 'klaas-slooten',
  }, {
    revealed: true,
    links: [],
    img: Stefanie,
    name: 'Stefanie Vonk',
    company: '',
    bio: ``,
    title: `Detection of Financial crime`,
    abstract: `Financial crime has increasingly become of concern over the past years to governments throughout the world. In the Netherlands alone, an estimated 16 billion euros is laundered annually, tied to predicate offences ranging from human trafficking, and narcotics trafficking to terrorist financing. Financial institutions are committed to detecting these money flows, as part of their 'gatekeeper' role to protect the integrity of the financial system. This fight against money laundering involves a huge amount of data crunching and the application of more advanced analytics in detection. Stefanie Vonk, manager in forensic and financial crime analytics, helps financial institutions in the detection of money laundering and by this plays a role in fighting criminals. She will explain what a complete case study looks like and gives some examples of how to use advanced analytics to keep the financial infrastructure safe.`,
    event: 'stefanie-vonk',
  }, {
    revealed: true,
    links: [],
    img: Zeno,
    name: 'Zeno Geradts',
    company: '',
    bio: ``,
    title: `Evidence based on digital data`,
    abstract: `Crimes leave trails and these trails can also be digital. Think about the texts sent from phones or data from smartwatches. Many conclusions can be made from this information also using likelihood ratios.  For example from heart beat rate, language and voice, financial research and undermining. Zeno Geradts is a professor by special appointment of forensic data science at the UvA and works with the AI4Forensics lab. There they do research on the statements that can be made based on data from phones and smartwatches and also on deep fakes. In his talk he will introduce you to their research and give real life examples.`,
    event: 'zeno-geradts',
  }, {
    revealed: true,
    links: [],
    img: MaryPaul,
    name: 'Mary Adams and Paul Fockens',
    company: '',
    bio: ``,
    title: `The privacy challenge of human trafficking data`,
    abstract: `Human trafficking it is a serious human rights violation. Technology is making a difference in disrupting the criminal business model. But can we do more than create toolsets and databases? Privacy laws make it difficult for organizations to share sensitive data and collaborate in anti-trafficking. Mary Adams and Paul Fockens of Sustainable Rescue Foundation, have identified opportunities to meet the privacy challenge in data sharing. During their session, they will explain how they overcame privacy barriers in projects to connect technology to operational value for both data providers and beneficiaries.`,
    event: 'mary-paul',
  }, {
    revealed: false,
    links: [],
    img: Workshops,
    name: 'Workshops',
    company: '',
    bio: ``,
    title: ``,
    abstract: `Detecting criminals in banking data: a labour exploitation case - ING\n\nHow do you catch a criminal? Through their victims! ING Bank invites you to join them down the rabbit hole of a large-scale labor exploitation investigation. Banks invest substantial effort in detecting criminal behavior in their accounts. Can you find criminal deeds in transaction data? Can you identify a victim based on their client profile? In this workshop, we will take you on a journey through an investigation that has spanned a year, included several hundred possible victims, heaps of cash, some proper bad guys, smelly mattresses, and a box of chocolates, to name a few. We will brainstorm together about next steps and you will get the chance to spot the red flags yourself, in the data we will provide for you. Turn on your inner Sherlock and jump into the world of Financial Economic Crime!\n\nThales workshop:\n\nTime to get some action! During this workshop, led by two experienced Red Teamers from Thales you will learn the basics of penetration testing. During the workshop you will learn how to enumerate and exploit four different machines. However exploitation is not everything, as a red teamer we need to cover our tracks and stay under the radar. Therefore we will discuss on high level what marks are left behind when attacking the machines. Hope you are not afraid of using some kali linux and hope to see you with a laptop.\n\nABN Amro workshop:\n\nAnnually, hundreds of billions of euros are laundered worldwide, of which an estimated 16 billion in the Netherlands. A major challenge is posed by the fact that criminals often use successive transactions through multiple banks. Each bank therefore sees just one piece of the puzzle and has to investigate and report on suspicion of money laundering activities to financial investigation services on the basis of incomplete information. For money laundering detection purposes, it is interesting to follow risky flows of money, such as cash deposits. Via different bank accounts risky money flows to its intended destination, often obfuscated by complex constructs and transaction patterns. During this case study students are challenged to think of possible solutions that can support financial institutions in identifying risks within financial networks, across multiple organizations, while respecting basic privacy and competition challenges. Successful solutions may include aspects of multiparty risk computations, data sharing and encryption methods.\n\nRiskQuest Financial Crime Case\n\n Today you're about to discover how a typical day looks like within the Data Science team at RiskQuest. You're tasked with helping a credit card company with identifying potential fraudsters. To this end, your team will combine all their analytical and programming skills to build a machine-learning model. The company has provided you with access to their historical transaction data (i.e. features), as well as the outcome of the manual review performed by their compliance department (i.e. the target variables). To give you a head-start, we have already structured the below notebooks in various parts, ranging from exploratory data analysis to hyper-parameter tuning. We look forward to seeing your results, and of course there will be a prize for the best performing team!\n\n\n`,
    event: 'workshops',
  }
  
]
