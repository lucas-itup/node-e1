import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNewGasto() {
    return await inquirer.prompt(newGastoPrompt);
}
  const newGastoPrompt = [
    {
        type: "input",
        name: "idGasto",
        message : "Id Gasto"
    },
    {
        type: "input",
        name: "nombreGasto",
        message : "Nombre del Gasto"
    },
    {
        type: "input",
        name: "sector",
        message : "Sector"
    },
    {
        type: "date",
        name: "fecha",
        message : "Fecha de ingreso"
    }
];