import { u as useServerSideQuery, W } from "./virtual_rakkasjs_node-handler-entry.223a8f24.js";
import { useState } from "react";
import fs from "fs/promises";
import { jsxs, jsx } from "react/jsx-runtime";
import "rakkasjs/node-adapter";
function UseSSQDemoPage() {
  const [file, setFile] = useState("package.json");
  const {
    data,
    refetch
  } = useServerSideQuery(["0", 0, [file], $runServerSide$[0]]);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(W, {
      title: "useServerSideQuery demo"
    }), /* @__PURE__ */ jsx("h1", {
      children: "useServerSideQuery demo"
    }), /* @__PURE__ */ jsxs("select", {
      value: file,
      onChange: (e) => setFile(e.target.value),
      children: [/* @__PURE__ */ jsx("option", {
        value: "package.json",
        children: "package.json"
      }), /* @__PURE__ */ jsx("option", {
        value: "tsconfig.json",
        children: "tsconfig.json"
      })]
    }), /* @__PURE__ */ jsxs("p", {
      children: ["Last fetched at ", data.date.toLocaleTimeString()]
    }), /* @__PURE__ */ jsx("p", {
      children: /* @__PURE__ */ jsx("button", {
        type: "button",
        onClick: () => refetch(),
        children: "Refetch"
      })
    }), /* @__PURE__ */ jsx("pre", {
      children: data.contents
    })]
  });
}
const $runServerSide$ = [async ($runServerSideClosure$) => {
  let [file] = $runServerSideClosure$;
  if (!["package.json", "tsconfig.json"].includes(file)) {
    throw new Error("No kitty!");
  }
  const contents = await fs.readFile(file, "utf-8");
  return {
    contents,
    date: new Date()
  };
}];
export { $runServerSide$, UseSSQDemoPage as default };
