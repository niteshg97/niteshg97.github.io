import type { Publication } from '../types'

// Research publications, technical projects, and open-source contributions.
// Sections in the UI are generated automatically from the `category` field.

export const publications: Publication[] = [
  {
    id: 'ecg-fpga',
    category: 'journal',
    title: 'FPGA-Accelerated ECG Anomaly Detection with a Squeeze-and-Excitation Network',
    authors: ['Nitesh Kumar'],
    venue: 'Manuscript in Preparation',
    year: 2026,
    status: 'Ongoing',
    abstract:
      'Deployed Squeeze-and-Excitation  network for real-time ECG anomaly detection on FPGA using hls4ml. The work investigates quantization-aware optimization, low-latency inference, and hardware-efficient deep learning for biomedical edge AI.',
  },


    {
    id: 'hls4ml',
    category: 'oss-contribution',
    title: 'Contributor — fastmachinelearning/hls4ml',
    authors: ['Nitesh Kumar', 'hls4ml Community'],
    venue: 'GitHub Open Source',
    year: 2025,
    status: 'Published',
    abstract:
      'Active contributor to the hls4ml framework, contributing through pull requests, issue discussions, and code reviews. The framework enables deployment of machine learning models onto FPGA hardware for ultra-low-latency inference and is widely used in particle physics, edge AI, and scientific computing.',
    githubUrl: 'https://github.com/fastmachinelearning/hls4ml',
  },

  {
    id: 'treeforge',
    category: 'project',
    title: 'TreeForge — Decision Tree Classifier Built from Scratch',
    authors: ['Nitesh Kumar'],
    venue: 'GitHub Open Source',
    year: 2026,
    status: 'Published',
    abstract:
      'A fully engineered implementation of a Decision Tree classifier developed from scratch in Python using the MAGIC Gamma Telescope dataset. The project emphasizes algorithmic understanding through comprehensive testing, benchmarking against scikit-learn, CI/CD, packaging, and production-quality documentation.',
    githubUrl: 'https://github.com/niteshg97/treeforge',
  },
]
