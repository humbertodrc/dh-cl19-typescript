export const formatUserName = (username: string): string => {
  return username.startsWith('@') ? username : '@' + username;
}