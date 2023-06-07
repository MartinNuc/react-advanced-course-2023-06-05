import { UserInfoPane } from "./current-user/user-info-pane";
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return <>
    <ul>
      <li><Link to="/joke/random">Random joke</Link></li>
      <li><Link to="/joke/categories">Joke categories</Link></li>
      <li><Link to="/voting">Voting</Link></li>
      <li><Link to="/error">Error</Link></li>
    </ul>

    <UserInfoPane />
    <Outlet />
  </>
}