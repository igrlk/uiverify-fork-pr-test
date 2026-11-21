import { page } from "@vitest/browser/context";
import { takeSnapshot } from "@uiverify/vitest";
import { expect, test } from "vitest";
import { renderScene } from "@/test/harness";
import "./swatches.css";

// One screen per flow, so a change to one swatch's colour shows on exactly one screen.
for (const flow of ["f1", "f2", "f3", "f4", "f5", "f6"]) {
  test(`Swatch ${flow}`, async () => {
    renderScene(<div className={`sw sw-${flow}`}>{flow}</div>);
    await expect.element(page.getByText(flow, { exact: true })).toBeVisible();
    await takeSnapshot();
  });
}
