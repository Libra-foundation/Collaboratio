import {type IMarkdownTitlesParams} from "./MarkdownScriptsInterfaces";

export default function MarkdownTitles(
  params: Readonly<IMarkdownTitlesParams>
): void {
  const {thingToInsert, startPos, endPos, markdownState, SetMarkdownInput} =
    params;

  if (startPos === endPos && startPos !== undefined && startPos !== null) {
    return SetMarkdownInput((prev_state: string): string =>
      prev_state
        .slice(0, startPos)
        .concat(thingToInsert)
        .concat(prev_state.slice(startPos, markdownState.length))
    );
  }
  return undefined;
}
