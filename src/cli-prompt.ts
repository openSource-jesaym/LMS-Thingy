import { createSpinner } from "nanospinner";
import portfinder from "portfinder";
import inquirer from "inquirer";

// Starting the server
const startExpressServer = (port: number, app: any) => {
  try {
    // Start the server
    let serverSpinner = createSpinner(
      `Starting server on port: ${port}`
    ).start();
    app
      .listen(port, () => {
        serverSpinner.success({
          text: `  ** MDBS.TN ${process.env.ENVIRONMENT} Server is listening on localhost:${port}, open your browser on http://localhost:${port}/ **
        `
        });
      })
      .on("error", (err: Error) => {
        const errorCode = err.message.split(" ")[1].slice(0, -1);

        if (errorCode === "EADDRINUSE") {
          serverSpinner.clear().stop();
          // finds a free port in the range of <Port>-65535, returns the first free port found
          portfinder.getPort({ port }, (err, newPort) => {
            inquirer
              .prompt({
                type: "confirm",
                name: "portUnavailable",
                message: `Port ${port} is already in use, Would you like to use a different port? (found: ${newPort})`,
                default: false
              })
              .then((answers) => {
                // Use user feedback for... whatever!!
                console.log(answers.portUnavailable);
                if (answers.portUnavailable) {
                  startExpressServer(newPort, app);
                  return;
                }
                serverSpinner.error({
                  text: "Could not start server on port: " + port
                });
                process.exit(1);
              })
              .catch((error) => {
                if (error.isTtyError) {
                  // Prompt couldn't be rendered in the current environment
                  console.log(
                    "Prompt couldn't be rendered in the current environment, incompatible terminal?"
                  );
                } else {
                  // Something else went wrong
                  console.log(
                    "Prompt couldn't be rendered, something went wrong"
                  );
                }
              });
          });
        } else {
          serverSpinner.error({ text: `  Server Error: ${err.message}` });
          process.exit(1);
        }
      });
  } catch (err) {}
};
export { startExpressServer };
