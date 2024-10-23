import { useTranslation } from "react-i18next";

export default ({ channelName, messagesCount }) => {
  const { t } = useTranslation();

  return (
    <div className="flex-column rounded bg-blue p-3 m-3">
      <p>{`# ${channelName}`}</p>
      <span className="text-muted">
        {t('chat.messages', { count: messagesCount })}
      </span>
    </div>
  );
}
