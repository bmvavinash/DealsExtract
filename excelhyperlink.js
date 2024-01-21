const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();

workbook.xlsx.readFile('F:/Website/Excel/Book2.xlsx')
// workbook.xlsx.readFile('C:/Users/avina/Downloads/Telegram Desktop/Top deals and launch announcements.xlsx')
    .then(function () {
        const worksheet = workbook.getWorksheet(1);

        if (worksheet) {
            worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
                // Skip the first row (header)
                if (rowNumber > 1) {
                    // Assuming hyperlinks are in the last two columns
                    const hyperlinkFormula1 = row.getCell(row.actualCellCount - 1).formula;
                    const hyperlinkFormula2 = row.getCell(row.actualCellCount).formula;
            
                    // Extract the hyperlink address from the formula
                    const hyperlinkAddress1 = extractHyperlinkAddress(hyperlinkFormula1);
                    const hyperlinkAddress2 = extractHyperlinkAddress(hyperlinkFormula2);
            
                    // Log or manipulate hyperlinks as needed
                    console.log(`Hyperlink 1: ${hyperlinkAddress1}, Hyperlink 2: ${hyperlinkAddress2}`);
                }
            });
            
        } else {
            console.error('Worksheet not found');
        }
    })
    .catch(function (error) {
        console.error(error.message);
    });


    function extractHyperlinkAddress(formula) {
        // Example formula: '=HYPERLINK("http://www.example.com")'
        const match = formula.match(/"([^"]+)"/);
        return match ? match[1] : '';
    }



    // worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
    //     // Skip the first row (header)
    //     if (rowNumber > 1) {
    //         // Assuming hyperlinks are in the last two columns
    //         const hyperlink1 = row.getCell(row.actualCellCount - 1).text;
    //         const hyperlink2 = row.getCell(row.actualCellCount).text;
    
    //         // Log or manipulate hyperlinks as needed
    //         console.log(`Hyperlink 1: ${hyperlink1}, Hyperlink 2: ${hyperlink2}`);
    //     }
    // });
    
