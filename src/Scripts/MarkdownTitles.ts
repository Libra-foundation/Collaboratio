interface IMarkdownTitlesParams {
  thingToInsert: string;
  startPos: number | null | undefined;
  endPos: number | null | undefined;
  markdownState: string;
}

export default function MarkdownTitles(
  params: Readonly<IMarkdownTitlesParams>
): string | undefined {
  const {thingToInsert, startPos, endPos, markdownState} = params;

  if (startPos === endPos && startPos !== undefined && startPos !== null) {
    return (
      markdownState.slice(0, startPos) +
      thingToInsert +
      markdownState.slice(startPos, markdownState.length)
    );
  }
  return undefined;
}
