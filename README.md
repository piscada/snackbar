# @piscada/snackbar

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
