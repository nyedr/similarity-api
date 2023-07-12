import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "./ui/Code";
import { nodejs } from "@/helpers/documentation-code";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        {/* <SimpleBar></SimpleBar> */}
        <Code code={nodejs} language="nodejs" show={true} />
      </TabsContent>
      <TabsContent value="python"></TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
