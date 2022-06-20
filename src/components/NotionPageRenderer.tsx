import { FC } from "react";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionText } from "../components/NotionText";

export const NotionPageRenderer: FC<{ page: ListBlockChildrenResponse }> = ({
  page,
}) => {
  return (
    <div>
      {page.results.map((block: any) => {
        switch (block.type) {
          case "paragraph": {
            return (
              <p key={block.id} className="break-words">
                <NotionText text={block.paragraph.rich_text} />
              </p>
            );
          }

          case "heading_1": {
            return (
              <h1 key={block.id}>
                <NotionText text={block.heading_1.rich_text} />
              </h1>
            );
          }

          case "heading_2": {
            return (
              <h2 key={block.id}>
                <NotionText text={block.heading_2.rich_text} />
              </h2>
            );
          }

          case "heading_3": {
            return (
              <h3 key={block.id}>
                <NotionText text={block.heading_3.rich_text} />
              </h3>
            );
          }

          case "bulleted_list_item": {
            return (
              <div key={block.id} className="break-words">
                - <NotionText text={block.bulleted_list_item.rich_text} />
              </div>
            );
          }

          default: {
            return null;
          }
        }
      })}
    </div>
  );
};
