import type { Project } from '../types'

export const projects: Project[] = [

  {
    id: 'ecg-fpga',
    title: 'Hardware-Efficient ECG Detection on FPGA',
    description:
      'Designed a hardware-aware deep learning pipeline for real-time ECG anomaly detection using hls4ml. The project converts a Keras model into FPGA-ready hardware through fixed-point quantization, HLS synthesis, and full parallelization, enabling low-latency inference for edge AI applications.',

    tags: ['FPGA', 'Edge AI', 'Healthcare AI'],
    tech: ['TensorFlow', 'hls4ml', 'Vivado HLS', 'Python'],
    githubUrl: 'https://github.com/niteshg97/ecg-fpga-se-networks',
    featured: true,
  },


  {
    id: 'treeforge',
    title: 'TreeForge',
    description:
      'Developed a Decision Tree classifier completely from scratch in Python using the MAGIC Gamma Telescope dataset. The project follows an engineering-first workflow with testing, benchmarking, packaging, CI/CD, and detailed comparisons against scikit-learn to study implementation trade-offs and algorithmic behavior.',
    tags: ['Machine Learning', 'From Scratch', 'Decision Trees'],
    tech: ['Python', 'NumPy', 'Pytest', 'GitHub Actions'],
    githubUrl: 'https://github.com/niteshg97/treeforge',
    featured: false,
  },


  {
    id: 'edge-ai',
    title: 'Real-Time Edge AI',
    description:
      'Built an optimized real-time computer vision pipeline for resource-constrained edge devices. The project focuses on efficient inference, hardware acceleration, and deploying deep learning models with low latency for embedded AI applications.',

    tags: ['Computer Vision', 'Edge AI', 'Embedded ML'],
    tech: ['Python', 'OpenCV', 'YOLO', 'TensorFlow'],
    githubUrl: 'https://github.com/niteshg97/Real-time-edge-AI.',
    featured: false,
  },

  {
    id: 'anav',
    title: 'Autonomous Drone Landing System',
    description:
      'Developed an autonomous precision landing system for the ISRO Robotics Challenge (IRoC-U 2025). The system combines computer vision, sensor fusion, and autonomous navigation to enable safe and accurate UAV landing in GPS-denied environments.',

    tags: ['Robotics', 'Autonomous Systems', 'Computer Vision'],
    tech: ['ROS2', 'OpenCV', 'YOLOv8', 'Jetson', 'PX4'],
    githubUrl:
      'https://github.com/niteshg97/Autonomous-Navigation-Aerial-Vehicle-ANAV-ISRO-IRoC-U-2025',
    featured: false,
  },

  {
    id: 'kidneyvit',
    title: 'KidneyViT',
    description:
      'Implemented a Vision Transformer for automated kidney abnormality classification from CT images. The project explores transformer-based medical image analysis with attention mechanisms to improve diagnostic accuracy and interpretability.',

    tags: ['Vision Transformer', 'Medical AI', 'Deep Learning'],
    tech: ['PyTorch', 'Vision Transformer', 'Python'],
    githubUrl:
      'https://github.com/niteshg97/KidneyViT-A-Vision-Transformer-for-Classifying-Kidney-Abnormalities',
    featured: false,
  },
]
