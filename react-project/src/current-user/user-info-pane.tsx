import { useUser } from "./UserContextProvider";
import { CurrentUserInfo } from "./current-user-info";
import { LoginForm } from "./login-form";

export function UserInfoPane() {
  const { user } = useUser();

  return <div>
    {user ? <CurrentUserInfo /> : <LoginForm />}
  </div>
}