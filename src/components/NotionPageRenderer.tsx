import { FC } from "react";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionText } from "../components/NotionText";

export const NotionPageRenderer: FC<{ page: ListBlockChildrenResponse }> = ({
  page,
}) => {
  return (
    <div>
      {page.results.map((block) => {
        switch (block.type) {
          case "paragraph": {
            return (
              <p key={block.id} className="break-words">
                <NotionText text={block.paragraph.text} />
              </p>
            );
          }

          case "heading_1": {
            return (
              <h1 key={block.id}>
                <NotionText text={block.heading_1.text} />
              </h1>
            );
          }

          case "heading_2": {
            return (
              <h2 key={block.id}>
                <NotionText text={block.heading_2.text} />
              </h2>
            );
          }

          case "heading_3": {
            return (
              <h3 key={block.id}>
                <NotionText text={block.heading_3.text} />
              </h3>
            );
          }

          case "bulleted_list_item": {
            return (
              <div key={block.id} className="break-words">
                - <NotionText text={block.bulleted_list_item.text} />
              </div>
            );
          }

          default: {
            console.log(block);
            return null;
          }
        }
      })}
    </div>
  );
};
