import { getColor } from './palette'


export default {
  body: {
    backgroundColor: getColor('Light Blue'),
    margin: 0,
    padding: 0,
  },
  a: {
    color: getColor('Light Blue', 700),
    textDecoration: 'none',
  },
  'a:hover': {
    color: getColor('Light Blue', 900),
  },
}
