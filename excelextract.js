Office.onReady(function (info) {
    // Office is ready
    if (info.host === Office.HostType.Excel) {
        // Assign event handler when the document is loaded
        document.getElementById("sideload-msg").style.display = "none";
        document.getElementById("app-body").style.display = "flex";

        // Assign event handler for the button click
        document.getElementById("run").onclick = run;
    }
});

async function run() {
    try {
        // Get the selected range
        await Excel.run(async (context) => {
            const currentWorksheet = context.workbook.worksheets.getActiveWorksheet();
            const selectedRange = context.workbook.getSelectedRange();
            selectedRange.load("values");

            await context.sync();

            // Iterate through the selected range and extract links
            for (let i = 0; i < selectedRange.values.length; i++) {
                const cellValue = selectedRange.values[i][0];
                if (cellValue && typeof cellValue === 'string') {
                    console.log(`Extracted Link: ${cellValue}`);
                }
            }
        });
    } catch (error) {
        // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
        console.error(error);
    }
}
