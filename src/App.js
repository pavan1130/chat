import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginFrom from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginFrom />;
  return (
    <ChatEngine
      height="100vh"
      projectID="de90dd85-8621-4631-aa22-ef6e9663584d"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
