import { Component, createSignal } from "solid-js";
import Microphone from "./icons/microphone";
import Expand from "./icons/expand"
import Clipboard from "./icons/clipboard"
import Vol from "./icons/volume";
import Theme from "./icons/theme"
import Menu from "./icons/menu"
import Lock from "./icons/lock";
import LogIn from "./icons/logIn";
import Play from "./icons/play"
import Up from "./icons/Up"

const App: Component = () => {
  const [state,setState] = createSignal(false);
	return (
		<section class="min-h-screen bg-white w-full">
      <Microphone state={state} setState={setState} />
      <Clipboard state={state} setState={setState} />
      <Expand state={state} setState={setState} />      
      <Vol state={state} setState={setState} />
      <Theme state={state} setState={setState} />
      <Menu state={state} setState={setState} />
      <Lock  state={state} setState={setState} />
      <Up state={state} setState={setState} />
      <LogIn state={state} setState={setState} />
      <Play state={state} setState={setState} />
		</section>
	);
};

export default App;
