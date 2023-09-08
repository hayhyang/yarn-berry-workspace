import { Size } from "../../types";

interface AvatarProps {
  id: string;
  username: string;
  avatar: string;
  size: Size;
}

const Avatar = (props: AvatarProps) => {
  const { id, username, avatar, size } = props;

  const styles = {
    borderRadius: "100%",
  };

  return (
    <div style={styles}>
      <img src={avatar} alt={username + "의 프로필 사진"} />
    </div>
  );
};

export default Avatar;
