import security from "../assets/security.jpg";
import healthSafety from "../assets/health_safety.jpg";
import crime from "../assets/crime.png";
import training from "../assets/training.gif";

export default [
  {
    label: 'Security',
    pathname: '/security',
    content: [
      'Security is about the protection of assets. What asset class is under threat in your organisation or have you already suffered a loss?'
    ],
    img: security,
    showHome: true
  },
  {
    label: 'Health & Safety',
    pathname: '/health-safety',
    content: [
      'If security is about the protection of assets, health and safety legislation identifies people as the primary workplace asset. Do you need to do more to protect your people?'
    ],
    img: healthSafety,
    showHome: true
  },
  {
    label: 'Crime',
    pathname: '/crime',
    content: [
      'Criminals conduct risk assessments.',
      'Do you? A simple formula that can explain many criminal acts is (Perceived) Soft Target + (Perceived) Reward = Criminal Opportunity. Is your business systems target hardened?'
    ],
    img: crime,

  },
  {
    label: 'Training',
    pathname: '/training',
    content: [
      'We can tailor our training to suit your needs. Topics that have proven popular include:',
      'RADAR SYSTEMS™ (Basics):',
      'A workshop suited to those trying to find solutions to their workplace health and safety issues.',
      'Dealing with Conflict – ‘Us’ & ‘Them’ (Basics)',
      'Practical tools for reducing workplace violence across the conflict continuum.'
    ],
    img: training
  }
];