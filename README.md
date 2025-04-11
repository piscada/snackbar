# @piscada/snackbar

## Prerequisites

- Ensure you've set NEXUS_AUTH and pointed your project towards nexus.piscada.tools as your repository path:
- See https://piscada.atlassian.net/wiki/spaces/PISCADA/pages/943783941/Using+Nexus+Sonartype+Repo+Manager+for+your+project for details

# Install

    npm i @piscada/snackbar

# Usage

    1. Import CSS in root of app:
    import "@piscada/snackbar/snackbar.css"

    2. Use the snackbar
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
