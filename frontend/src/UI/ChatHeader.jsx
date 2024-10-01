export default ({ channelName, messagesCount }) => (
  <div className="flex-column col-10 col-md-6 border border-dark w-100">
    <p>{`# ${channelName}`}</p>
    <span className="text-muted">
      {`${messagesCount} сообщений`}
    </span>
  </div>
);
