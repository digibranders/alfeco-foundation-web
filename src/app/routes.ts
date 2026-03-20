import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pillars } from './pages/Pillars';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { GetInvolved } from './pages/GetInvolved';
import { Volunteer } from './pages/Volunteer';
import { Partnerships } from './pages/Partnerships';
import { Donate } from './pages/Donate';
import { Education } from './pages/pillars/Education';
import { FoodSecurity } from './pages/pillars/FoodSecurity';
import { Conservation } from './pages/pillars/Conservation';
import { BursaryProgramme } from './pages/pillars/BursaryProgramme';
import { SkillsDevelopment } from './pages/pillars/SkillsDevelopment';
import { ReviveThrive } from './pages/pillars/ReviveThrive';
import { NotFound } from './pages/NotFound';
import { WomenYouth } from './pages/pillars/WomenYouth';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'pillars', Component: Pillars },
      { path: 'pillars/education', Component: Education },
      { path: 'pillars/education/bursary', Component: BursaryProgramme },
      { path: 'pillars/education/skills', Component: SkillsDevelopment },
      { path: 'pillars/education/revive', Component: ReviveThrive },
      { path: 'pillars/food-security', Component: FoodSecurity },
      { path: 'pillars/women-youth', Component: WomenYouth },
      { path: 'pillars/conservation', Component: Conservation },
      { path: 'news', Component: News },
      { path: 'news/:id', Component: News },
      { path: 'get-involved', Component: GetInvolved },
      { path: 'volunteer', Component: Volunteer },
      { path: 'partnerships', Component: Partnerships },
      { path: 'donate', Component: Donate },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
