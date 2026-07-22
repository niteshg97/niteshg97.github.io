import type { Skill } from '../types'

// Adjust proficiency values as your experience grows.
// Context is optional and appears on hover/focus.
export const skills: Skill[] = [
  // ==========================
  // Programming Languages
  // ==========================
  {
    id: 'python',
    category: 'languages',
    name: 'Python',
    proficiency: 95,
    context:
      'Primary language for machine learning research, scientific computing, automation, and projects including TreeForge.',
  },
  {
    id: 'cpp',
    category: 'languages',
    name: 'C / C++',
    proficiency: 82,
    context:
      'Used for embedded systems, performance-critical applications, and algorithm implementation.',
  },
  {
    id: 'matlab',
    category: 'languages',
    name: 'MATLAB',
    proficiency: 72,
    context:
      'Signal processing, numerical analysis, and rapid prototyping for engineering research.',
  },

  // ==========================
  // Machine Learning & FPGA
  // ==========================
  {
    id: 'pytorch',
    category: 'ml-fpga',
    name: 'PyTorch',
    proficiency: 88,
    context:
      'Primary deep learning framework for computer vision, biomedical AI, and FPGA-oriented research.',
  },
  {
    id: 'tensorflow',
    category: 'ml-fpga',
    name: 'TensorFlow / Keras',
    proficiency: 82,
    context:
      'Model training and deployment workflows compatible with FPGA toolchains.',
  },
  {
    id: 'sklearn',
    category: 'ml-fpga',
    name: 'scikit-learn',
    proficiency: 90,
    context:
      'Classical machine learning, benchmarking, preprocessing, and evaluation including TreeForge comparisons.',
  },
  {
    id: 'hls4ml',
    category: 'ml-fpga',
    name: 'hls4ml',
    proficiency: 88,
    context:
      'Converting trained neural networks into FPGA firmware; active contributor through pull requests, issue discussions, and code reviews.',
  },
  {
    id: 'onnx',
    category: 'ml-fpga',
    name: 'ONNX',
    proficiency: 65,
    context:
      'Model interoperability and deployment workflows across machine learning frameworks.',
  },

  // ==========================
  // FPGA & Embedded Systems
  // ==========================
  {
    id: 'vivado',
    category: 'embedded-instrumentation',
    name: 'Vivado',
    proficiency: 82,
    context:
      'FPGA synthesis, implementation, timing analysis, and hardware validation.',
  },
  {
    id: 'vitis',
    category: 'embedded-instrumentation',
    name: 'Vitis HLS',
    proficiency: 80,
    context:
      'High-Level Synthesis for deploying machine learning inference on FPGA hardware.',
  },
  {
    id: 'fpga-design',
    category: 'embedded-instrumentation',
    name: 'FPGA Design',
    proficiency: 82,
    context:
      'Designing efficient hardware accelerators for machine learning and signal processing.',
  },
  {
    id: 'rtl',
    category: 'embedded-instrumentation',
    name: 'RTL Design',
    proficiency: 74,
    context:
      'RTL implementation, verification, and optimization for digital systems.',
  },
  {
    id: 'signal-processing',
    category: 'embedded-instrumentation',
    name: 'Signal Processing',
    proficiency: 78,
    context:
      'Processing physiological and detector signals for biomedical and particle physics applications.',
  },
  {
    id: 'instrumentation',
    category: 'embedded-instrumentation',
    name: 'Detector Instrumentation',
    proficiency: 76,
    context:
      'SiPM readout, scintillator detectors, and FPGA-based data acquisition for particle physics instrumentation.',
  },

  // ==========================
  // Research & Development Tools
  // ==========================
  {
    id: 'git',
    category: 'tools',
    name: 'Git',
    proficiency: 92,
    context:
      'Version control, collaborative development, branching strategies, and open-source contributions.',
  },
  {
    id: 'github',
    category: 'tools',
    name: 'GitHub',
    proficiency: 92,
    context:
      'Open-source collaboration, pull requests, issue tracking, and repository management.',
  },
  {
    id: 'github-actions',
    category: 'tools',
    name: 'GitHub Actions',
    proficiency: 84,
    context:
      'Automated testing, CI/CD pipelines, package validation, and deployment workflows.',
  },
  {
    id: 'linux',
    category: 'tools',
    name: 'Linux',
    proficiency: 86,
    context:
      'Command-line development, scripting, remote systems, and research computing environments.',
  },
  {
    id: 'latex',
    category: 'tools',
    name: 'LaTeX / Overleaf',
    proficiency: 88,
    context:
      'Preparation of research papers, technical reports, and IEEE-style manuscripts.',
  },
  {
    id: 'jupyter',
    category: 'tools',
    name: 'Jupyter Notebook',
    proficiency: 90,
    context:
      'Rapid experimentation, visualization, and reproducible machine learning research.',
  },
]
