
import {get , save} from "./filesMethods.js";
import {promptNewGasto} from "./gastosPrompts.js"
const main = async() =>{
    const newGastoData = await promptNewGasto();
    const currentGastos = await get('gastos');
   //validar que no exista el documento

    currentGastos.push(newGastoData);
    await save( "gastos" ,currentGastos);
};
main();