type IGPostProps = {
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
  account: string;
};

const Comment: React.FC<IGPostProps> = ({
  likes,
  description,
  hashTags,
  createTime,
  account,
}) => {
  return (
    <div className="px-4">
      <div className="flex justify-between box-border mt-4 mb-4">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[28px] w-[28px] mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="h-[28px] w-[28px] mr-2"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" 
            />
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="h-[28px] w-[28px] -rotate-45"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="h-[28px] w-[28px]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </div>
      <p className="text-sm font-bold mb-2">{likes} likes</p>

      <p className="text-sm">
        <span className="text-sm font-bold inline-block mr-1">{account}</span>
        {description}
      </p>
      <p className="text-blue-900 text-sm">{hashTags}</p>
      <p className="text-gray-400 text-xs font-[500] mt-2">
        View all 999 comments
      </p>
      <p className="text-gray-400 text-[10px] mt-1">{createTime}</p>
    </div>
  );
};

export default Comment;