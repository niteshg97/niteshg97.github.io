import type { Achievement } from '../types'

// Edit freely. Order here is render order (grid reads left-to-right, top-to-bottom).
export const achievements: Achievement[] = [
    {
  id: 'tinkering-lab-president',
  title: 'President',
  organization: 'Tinkering Lab, NIT Patna',
  year: 2025, // Update if different
  category: 'leadership',
  description:
    'Leading the Tinkering Lab at NIT Patna by mentoring student teams, organizing technical workshops, fostering innovation, and promoting hands-on learning in embedded systems, robotics, AI, and hardware design.',
  highlight:
    'Driving a collaborative maker culture and interdisciplinary engineering projects across the institute.',
},

  {
    id: 'samsung-fellowship',
    title: 'Samsung Fellowship Award',
    organization: 'Samsung Innovation Award Program (ISWDP)',
    year: 2025,
    category: 'award',
    description:
      'Awarded under the Samsung Innovation Award Program (ISWDP), an industry-sponsored ' +
      'fellowship supporting graduate research.',
    highlight:
      'Recipient of the Samsung Fellowship Award 2025 for research in hardware-aware machine learning',
  },
  {
    id: 'isro-iroc-u',
    title: 'ISRO Robotics Challenge (IRoC-U 2025)',
    organization: 'Indian Space Research Organisation (ISRO)',
    year: 2025,
    category: 'competition',
    description:
      'Selected among 1,100+ teams nationwide for the ISRO Robotics Challenge (IRoC-U 2025), contributing to autonomous UAV navigation, computer vision, and precision landing.',
  },
  {
    id: 'jee-main-2023',
    title: 'JEE Main 2023',
    organization: 'National Testing Agency',
    year: 2023,
    category: 'recognition',
    description:
        'Ranked among the top 3% of approximately 1.5 million candidates in the Joint Entrance Examination (JEE Main 2023).'
  },
  {
    id: 'techfest-agritech',
    title: 'Tech Fest — AgriTech Innovation',
    organization: 'NIT Patna',
    year: 2024, // confirm exact year
    category: 'competition',
    description:
      'Won second prize in an AgriTech innovation challenge, competing against 100+ teams.',
  },
  {
    id: 'hls4ml-contributor',
    title: 'Open-Source Contributor, hls4ml',
    organization: 'Fast Machine Learning Collective',
    year: 2025, // ongoing — update as needed
    category: 'open-source',
    description:
      'Contributing to the open-source hls4ml framework through pull requests, issue discussions, and code reviews, supporting FPGA deployment of machine learning models used in scientific computing and edge AI.',
    link: 'https://github.com/fastmachinelearning/hls4ml',
  },
]
