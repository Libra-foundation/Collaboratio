export interface IMarkdownTitlesParams {
  thingToInsert: string;
  startPos: number | null | undefined;
  endPos: number | null | undefined;
  markdownState: string;
  SetMarkdownInput: () => string | undefined;
}
