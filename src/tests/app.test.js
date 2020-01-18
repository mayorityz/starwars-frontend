import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Button from "../components/button";

test("test the some of our states are objects", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Button />);
  console.log(renderer.getRenderOutput());
});
