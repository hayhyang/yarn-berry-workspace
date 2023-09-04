const Comment = () => {
  const comments = [
    {
      id: 1,
      author: 'John Doe',
      content: '이것은 댓글입니다.',
      createdAt: new Date(),
      updatedAt: new Date(),
      likes: [{ id: 1, username: 'johndoe', avatar: 'https://example.com/user/johndoe/avatar.jpg' }], // 댓글 좋아요 수 (옵션)
      children: [],
    },
  ];
  const actions = ['delete', 'edit', 'like', 'reply'];

  const getTimeStamp = (createdAt: Date, updatedAt: Date) => {
    if (!updatedAt) {
      return createdAt;
    }
    return updatedAt;
  };
  return null;
};

export default Comment;
