const excel = require("excel4node");

const data = [
  { id: 1, nombre: "Producto 1", cantidad: 10 },
  { id: 2, nombre: "Producto 2", cantidad: 5 },
  { id: 3, nombre: "Producto 3", cantidad: 8 },
];

const workbook = new excel.Workbook();

const worksheet = workbook.addWorksheet("Datos");

worksheet.cell(1, 1).string("ID");
worksheet.cell(1, 2).string("Nombre");
worksheet.cell(1, 3).string("Cantidad");

data.forEach((row, index) => {
  worksheet.cell(index + 2, 1).number(row.id);
  worksheet.cell(index + 2, 2).string(row.nombre);
  worksheet.cell(index + 2, 3).number(row.cantidad);
});

workbook.write("datos.xls");

console.log("Archivo .xls creado exitosamente.");
