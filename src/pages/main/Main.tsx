import { Page } from "../../data/pageData";
import Logos from './components/Logos'

interface Main {
    page: Page;
}

const Main = ({page}: Main) => {

  return (
    <main> 
          {page.component}
          <Logos/>
    </main>
  )
}

export default Main
