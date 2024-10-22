export default ({ channelName, messagesCount }) => (
  <div className="flex-column rounded bg-blue p-3 m-3">
    <p>{`# ${channelName}`}</p>
    <span className="text-muted">
      {`${messagesCount} сообщений`}
    </span>
  </div>
);
