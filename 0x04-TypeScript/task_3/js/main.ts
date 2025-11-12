/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row and store the new ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

