interface AvatarProps {
  id: string;
  username: string;
  avatar: string;
}

const Avatar = (props: AvatarProps) => {
  const user = {
    id: '1',
    username: 'johndoe',
    avatar: 'https://example.com/user/johndoe/avatar.jpg',
  };

  return <div>{}</div>;
};
