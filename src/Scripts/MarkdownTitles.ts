interface IMarkdownTitlesParams {
  thingToInsert: string;
  startPos: number;
  endPos: number;
  markdownState: string;
}

export default function MarkdownTitles(
  params: Readonly<IMarkdownTitlesParams>
): string | undefined {
  const {thingToInsert, startPos, endPos, markdownState} = params;

  if (startPos === endPos) {
    return (
      markdownState.slice(0, startPos - 1) +
      thingToInsert +
      markdownState.slice(startPos, markdownState.length)
    );
  }
  return undefined;
}
