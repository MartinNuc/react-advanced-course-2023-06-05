import { UserInfoPane } from "./current-user/user-info-pane";
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return <>
    <ul>
      <li><Link to="/joke">Joke</Link></li>
      <li><Link to="/voting">Voting</Link></li>
    </ul>

    <UserInfoPane />
    <Outlet />
  </>
}