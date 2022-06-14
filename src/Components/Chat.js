import "../CSS/Components/Chat.scss";

function Chat() {
	return (
		<div className="chat-wrapper">
			<div className="chat-parent">
				<div className="chat-title">What are you working on?</div>
				<div className="chat-body">
					Let's have a conversation! I'd love to hear about what you're working
					on and find a way to work together.
				</div>
				<div className="chat-button-parent">
					<div
						className="chat-button"
						onClick={() => (document.location = "/contact")}
					>
						Chat
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chat;
