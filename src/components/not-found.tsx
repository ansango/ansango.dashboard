import { Header } from "./header";
import { ScrollArea } from "./scroll-area";

export const NotFound = () => {
  return (
    <ScrollArea className="flex flex-col">
      <Header scrollTitle="Not found" />
      <div className="content-wrapper">
        <div className="content">
          {/* <PageTitle title="Not found" /> */}
          <p>
            This link might be broken, deleted, or moved. Nevertheless, there’s
            nothing to see here...
          </p>
        </div>
      </div>
    </ScrollArea>
  );
};
