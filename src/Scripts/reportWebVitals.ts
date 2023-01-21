import type {ReportHandler} from "web-vitals";

type Handler = (
  onReport: ReportHandler,
  reportAllChanges?: boolean | undefined
) => void;

function ReportWebVitals(on_perf_entry?: ReportHandler): void {
  if (on_perf_entry && on_perf_entry instanceof Function) {
    /* eslint-disable @typescript-eslint/naming-convention -- the names cannot be redefined */
    const A: Promise<{
      default: unknown;
      getCLS: Handler;
      getFCP: Handler;
      getFID: Handler;
      getLCP: Handler;
      getTTFB: Handler;
    }> = import("web-vitals");
    A.then(
      ({
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB,
      }: Readonly<{
        getCLS: Handler;
        getFCP: Handler;
        getFID: Handler;
        getLCP: Handler;
        getTTFB: Handler;
        /* eslint-enable @typescript-eslint/naming-convention */
      }>) => {
        getCLS(on_perf_entry);
        getFID(on_perf_entry);
        getFCP(on_perf_entry);
        getLCP(on_perf_entry);
        getTTFB(on_perf_entry);
      },
      (reason) => {
        console.error(reason);
      }
    );
  }
}

export default ReportWebVitals;
