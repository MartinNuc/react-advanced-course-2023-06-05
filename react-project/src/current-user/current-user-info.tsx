import { useUser } from "./UserContextProvider"

export function CurrentUserInfo() {
  const { user, logout } = useUser();

  if (!user) {
    throw new Error('This is only for logged user');
  }

  return <div>
    <div>Current user: {user.username}</div>
    <div>Email: {user.email}</div>
    <button onClick={logout}>Logout</button>
  </div>
}