import { FC } from "react";
import { classNames } from "../utils/classNames";

export type Text = Array<
  | {
      type: "text";
      text: {
        content: string;
        link: {
          url: string;
        } | null;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color:
          | "default"
          | "gray"
          | "brown"
          | "orange"
          | "yellow"
          | "green"
          | "blue"
          | "purple"
          | "pink"
          | "red"
          | "gray_background"
          | "brown_background"
          | "orange_background"
          | "yellow_background"
          | "green_background"
          | "blue_background"
          | "purple_background"
          | "pink_background"
          | "red_background";
      };
      plain_text: string;
      href: string | null;
    }
  | {
      type: "mention";
      mention:
        | {
            type: "user";
            user:
              | {
                  id: string;
                  object: "user";
                }
              | {
                  type: "person";
                  person: {
                    email: string;
                  };
                  name: string | null;
                  avatar_url: string | null;
                  id: string;
                  object: "user";
                }
              | {
                  type: "bot";
                  bot:
                    | Record<string, never>
                    | {
                        owner:
                          | {
                              type: "user";
                              user:
                                | {
                                    type: "person";
                                    person: {
                                      email: string;
                                    };
                                    name: string | null;
                                    avatar_url: string | null;
                                    id: string;
                                    object: "user";
                                  }
                                | {
                                    id: string;
                                    object: "user";
                                  };
                            }
                          | {
                              type: "workspace";
                              workspace: true;
                            };
                      };
                  name: string | null;
                  avatar_url: string | null;
                  id: string;
                  object: "user";
                };
          }
        | {
            type: "date";
            date: {
              start: string;
              end: string | null;
            };
          }
        | {
            type: "link_preview";
            link_preview: {
              url: string;
            };
          }
        | {
            type: "page";
            page: {
              id: string;
            };
          }
        | {
            type: "database";
            database: {
              id: string;
            };
          };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color:
          | "default"
          | "gray"
          | "brown"
          | "orange"
          | "yellow"
          | "green"
          | "blue"
          | "purple"
          | "pink"
          | "red"
          | "gray_background"
          | "brown_background"
          | "orange_background"
          | "yellow_background"
          | "green_background"
          | "blue_background"
          | "purple_background"
          | "pink_background"
          | "red_background";
      };
      plain_text: string;
      href: string | null;
    }
  | {
      type: "equation";
      equation: {
        expression: string;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color:
          | "default"
          | "gray"
          | "brown"
          | "orange"
          | "yellow"
          | "green"
          | "blue"
          | "purple"
          | "pink"
          | "red"
          | "gray_background"
          | "brown_background"
          | "orange_background"
          | "yellow_background"
          | "green_background"
          | "blue_background"
          | "purple_background"
          | "pink_background"
          | "red_background";
      };
      plain_text: string;
      href: string | null;
    }
>;

export const NotionText: FC<{ text: Text }> = ({ text }) => {
  return (
    <>
      {text.map((t) => {
        return (
          <span
            className={classNames(
              t.annotations.bold && "font-bold",
              t.annotations.italic && "italic",
              t.annotations.code && "font-mono bg-gray-300 rounded px-1",
              t.annotations.underline && "underline",
              t.annotations.strikethrough && "line-through",
              t.annotations.color && `text-${t.annotations.color}-500`
            )}
          >
            {t.href ? (
              <a
                href={t.href}
                className="whitespace-nowrap"
                target="_blank"
                rel="noreferrer"
              >
                {t.plain_text}
              </a>
            ) : (
              t.plain_text
            )}
          </span>
        );
      })}
    </>
  );
};
