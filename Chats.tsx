const Chats = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* YouTube Chat */}
        <div className="bg-card rounded-lg shadow p-2 flex flex-col">
          <h3 className="text-center font-semibold mb-2">YouTube Chat</h3>
          <iframe
            src="https://www.youtube.com/live_chat?v=YOUR_VIDEO_ID&embed_domain=yourdomain.com"
            width="100%"
            height="600"
            frameBorder="0"
            allow="autoplay"
            className="rounded-lg"
            title="YouTube Chat"
          />
        </div>

        {/* Twitch Chat */}
        <div className="bg-card rounded-lg shadow p-2 flex flex-col">
          <h3 className="text-center font-semibold mb-2">Twitch Chat</h3>
          <iframe
            src="https://www.twitch.tv/embed/YOUR_CHANNEL/chat?parent=yourdomain.com"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
            title="Twitch Chat"
          />
        </div>

        {/* TikTok Placeholder (Google) */}
        <div className="bg-card rounded-lg shadow p-2 flex flex-col">
          <h3 className="text-center font-semibold mb-2">TikTok Chat (Placeholder)</h3>
          <iframe
            src="https://www.google.com"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-lg"
            title="TikTok Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Chats;
