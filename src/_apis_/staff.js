import { random } from 'lodash';
// utils
import mock from './mock';
import mockData from '../utils/mock-data';
import { v4 as uuidv4 } from 'uuid';

const staff = [
  { id: 0, name: 'Abby Anders', role: 'Driver', phoneNumber: '123-456-7890', email: 'abby@gmail.com', isVerified: true, status: 'active'},
  { id: 1, name: 'Bob Birkin', role: 'Driver', phoneNumber: '240-521-1256', email: 'bob@gmail.com', isVerified: true, status: 'banned'},
  { id: 2, name: 'Casey Clyde', role: 'Dispatch', phoneNumber: '301-674-2421', email: 'casey@gmail.com', isVerified: true, status: 'active'},
  { id: 3, name: 'David Durn',  role: 'Support', phoneNumber: '765-412-9864', email: 'david@gmail.com', isVerified: true, status: 'active'},
  { id: 4, name: 'Eric Engels', role: 'Driver', phoneNumber: '703-231-9750', email: 'eric@gmail.com', isVerified: false, status: 'active'},
  { id: 5, name: 'Frank Fernandez', role: 'Driver', phoneNumber: '651-421-1164', email: 'frank@gmail.com', isVerified: true, status: 'banned'},
  { id: 6, name: 'Greg Gregson', role: 'Driver', phoneNumber: '651-942-7124', email: 'greg@gmail.com', isVerified: true, status: 'active'},
  { id: 7, name: 'Harry Hemm', role: 'Dispatch', phoneNumber: '240-529-4195', email: 'harry@gmail.com', isVerified: true, status: 'active'},
  { id: 8, name: 'Ingrid Ilk', role: 'Manager', phoneNumber: '651-622-9892', email: 'ingrid@gmail.com', isVerified: true, status: 'active'},
]

// ----------------------------------------------------------------------

mock.onGet('/api/staff/profile').reply(() => {
  const profile = {
    id: mockData.id(1),
    cover: mockData.image.cover(1),
    position: 'UI Designer',
    follower: random(99999),
    following: random(99999),
    quote: 'Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..',
    country: mockData.address.country(1),
    email: mockData.email(1),
    company: mockData.company(1),
    school: mockData.company(2),
    role: 'Manager',
    facebookLink: `https://www.facebook.com/caitlyn.kerluke`,
    instagramLink: `https://www.instagram.com/caitlyn.kerluke`,
    linkedinLink: `https://www.linkedin.com/in/caitlyn.kerluke`,
    twitterLink: `https://www.twitter.com/caitlyn.kerluke`
  };

  return [200, { profile }];
});

// ----------------------------------------------------------------------

mock.onGet('/staff').reply(() => {
  return [200, { staff }];
});

// ----------------------------------------------------------------------

mock.onPost('/api/staff').reply((request) => {
  
  const { 
    name, email, phoneNumber, address, country, company, state, city, role, avatarUrl 
  } = JSON.parse(request.data);

  const newStaff = {
    id: uuidv4, name, email, phoneNumber, address, country, company, state, city, role, avatarUrl
  };

  staff = [...staff, newStaff]

  return [200, { staff }];
});