import { read, utils, writeFile } from 'xlsx';

export const exportToExcel = async (downloadObject) => {
    const worksheet = utils.json_to_sheet(downloadObject);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    writeFile(workbook, 'data.xlsx');
}
