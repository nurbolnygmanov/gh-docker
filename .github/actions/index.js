import core from "@actions/core";
import github from "@actions/github";

try {
  core.debug("Debugging is enabled");
  core.error("This is an error message");
  core.warning("This is a warning message");

  const name = core.getInput("who-to-greet");

  core.info(`Hello ${name}!`);

  const time = new Date().toTimeString();
  core.setOutput("time", time);

  core.exportVariable("HELLO_TIME", time);

  core.startGroup("Logging GitHub context");
  core.info(JSON.stringify(github.context, null, 2));
  core.endGroup();
} catch (error) {
  core.setFailed(error.message);
}
