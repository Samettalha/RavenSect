/* eslint-disable no-console */

/**
 * A logger function that will only log in development
 * @param object - The object to log
 * @param comment - Optional comment
 */
export const logger = {
  log: (object, comment) => {
    console.log(
      "============== INFO LOG ==============  \n",
      `===== ${comment ?? ""}\n`,
      object
    );
  },
  error: (object, comment) => {
    console.error(
      "============== INFO ERROR ============== \n",
      `===== ${comment ?? ""}\n`,
      object
    );
  },
};
