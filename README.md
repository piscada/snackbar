# piscada-snackbar

## Prerequisites

- Ensure you've added the localNexus/Sonartype .npmrc / .yarnrc settings pointing to the local nexus.piscada.tools/repository/npm-hosted
- Find docs of this

# install

    npm i @piscada/snackbar

# Usage

    import { snack }, snackbar from "@piscada/snackbar";
    ...
    snackbar("Info message", "info", 5000);
    ...
    snack.info("Info message");
    snack.error("Error message");
    snack.warning("Warning message");
    snack.success("Success message");

    // With timeout:
    snack.success("Success message", 10000);

# Update ts

`npx tsc`
