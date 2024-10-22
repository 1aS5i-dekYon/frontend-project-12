export default ({
  authUserName,
  username,
  date,
  messageText,
}) => {
  // const time = (new Date(timestamp)).toLocaleTimeString(undefined, { timeStyle: 'short' });
  const bgColor = authUserName === username ? 'bg-dark-blue' : 'bg-blue';
  const position = authUserName === username ? 'end' : 'start';
  const reversePosition = authUserName !== username ? 'end' : 'start';
  
  return (
    <div className={`d-flex justify-content-${position}`}>
      <div>
        <div className={`text-${position} mb-1`}>
          <b className="pe-3">{username}</b>
          <em>{date}</em>
        </div>
        <span className={`d-inline-block text-break mb-2 rounded-${reversePosition}-4 rounded-bottom-4 p-2 ${bgColor}`}>
          {messageText}
        </span>
      </div>
    </div>
  );
};
