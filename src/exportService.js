const xlsx = require('xlsx');
const path = require('path');

const exportExcel = (data, workSheetColumnNames, WorkSheetName, filePath) => {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [
        workSheetColumnNames,
        ...data
    ];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, WorkSheetName);
    xlsx.writeFile(workBook, path.resolve(filePath));
}

const exportUsersToExcel = (users, workSheetColumnNames, WorkSheetName, filePath) => {
    const data = users.map(user => {
        return [user.nom, user.n_carte, user.code_postal, user.ville, user.telephone, user.telephone, user.email, user.date_creation, user.ne_le];
    });
    exportExcel(data, workSheetColumnNames, WorkSheetName, filePath);
}

module.exports = exportUsersToExcel;