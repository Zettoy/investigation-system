import services from "./services";

export default [
  {
    label: 'Home',
    pathname: '/'
  },
  {
    label: 'About Us',
    pathname: '/about'
  },
  {
    label: 'Our Services',
    pathname: '/services',
    menu: true,
    children: services
  },
  {
    label: 'Contact',
    pathname: '/contact'
  }
];