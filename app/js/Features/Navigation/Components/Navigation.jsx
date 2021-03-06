import React from 'react';
import {Link} from 'react-router';

const Navigation = () => (
  <nav className="col-main mx-auto py3">
    <ul className="flex fex-row list-style-none p0 my3">
      <li className="mr3"><Link to='/'>{'Home'}</Link></li>
      <li className="mr3"><Link to='/notelist' activeClassName='color-primary'>{'NoteList App'}</Link></li>
      <li className="mr3"><Link to='/todolist' activeClassName='color-primary'>{'TodoList App'}</Link></li>
    </ul>
  </nav>
);

export default Navigation;
