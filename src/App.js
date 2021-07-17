import { FaqsContainer } from "./containers/faqs.js";
import { FooterContainer } from "./containers/footers.js";
import { JumbotronContainer } from "./containers/jumbotron.js";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

export default App;
