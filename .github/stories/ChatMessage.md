# ChatMessage



### Code Examples

#### Components Chat Chat Message

```jsx
import { ChatMessage } from '@innovaccer/design-system';

() => {
  const type = 'incoming';
  const statusType = 'sent';
  const isTyping = false;
  const message = 'Hello, there.';
  const typingText = 'Typing..';
  const failedMessage = 'Click to retry';
  const sendingMessage = 'Sending';

  const options = {
    type,
    isTyping,
    typingText,
    failedMessage,
    sendingMessage,
    text: message,
    statusOptions: { type: statusType, time: '10:11 AM' },
  };

  return (
    <div className="w-25">
      <ChatMessage {...options} />
    </div>
  );
}
```