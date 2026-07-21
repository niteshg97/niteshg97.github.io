import type { StatItem, TimelineEntry } from '../types'

export const summary =
  "I'm a Dual Degree (B.Tech + M.Tech) student in Electrical Engineering at NIT Patna, passionate about building efficient machine learning systems for real-world applications. My work spans hardware-aware AI, FPGA acceleration, computer vision, robotics, and embedded intelligence, with a focus on designing high-performance models that bridge research and deployment."

export const stats: StatItem[] = [
  { label: 'Research Publications', value: '2+' },
  { label: 'Research Projects', value: '8+' },
  { label: 'DSA Problems', value: '550+' },
  { label: 'Open Source', value: 'CERN' },
]

export const timeline: TimelineEntry[] = [
  {
    id: 'edu-nitp',
    type: 'education',
    title: 'Dual Degree (B.Tech + M.Tech) in Electrical Engineering',
    organization: 'National Institute of Technology Patna',
    period: 'Jul 2023 – Jun 2028',
    description:
      'Pursuing a five-year integrated dual degree with research interests in machine learning, FPGA acceleration, embedded AI, and intelligent systems.',
  },

  {
    id: 'intern-iitj',
    type: 'experience',
    title: 'Project Intern',
    organization: 'TIH Drishti Foundation, IIT Jodhpur',
    period: 'May 2025 – Jul 2025',
    description:
      'Developed leader–follower UAV formation algorithms using ArUco marker-based visual perception, ROS 2, PX4, and Jetson Xavier NX, with results presented at the AIR 2025 international conference.',
  },

  {
    id: 'research-ml',
    type: 'experience',
    title: 'Machine Learning Researcher',
    organization: 'National Institute of Technology Patna',
    period: 'Jul 2025 – Present',
    description:
      'Designed lightweight hardware-aware neural networks for ECG anomaly detection and deployed optimized models on Xilinx PYNQ-Z2 FPGA using TensorFlow, hls4ml, quantization, and pruning.',
  },

  {
    id: 'opensource',
    type: 'experience',
    title: 'Open Source Contributor',
    organization: 'CERN hls4ml Collaboration',
    period: 'Jun 2026 – Present',
    description:
      'Contributing to the hls4ml framework used for low-latency FPGA inference by improving model conversion, documentation, and compatibility through open-source development and code reviews.',
  },
]
