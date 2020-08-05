import { GetStaticProps } from "next";

export type PropsWithLocale<P = {}> = P & {
  messages: { [key: string]: string };
};
