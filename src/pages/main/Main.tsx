import { Page } from "../../data/pageData";
import { headingHeight } from "../../styles/styleVariables";
import Logos from './components/Logos'

interface Main {
    page: Page;
}

const Main = ({page}: Main) => {

  return (
    <main className={`flex m-3 p-2 h-full`}>
      <section className="flex-grow">{page.component}</section>
      <Logos />
    </main>
  );
}

export default Main
