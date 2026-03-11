function runSQL(){

let sql =
document.getElementById("sql").value.toUpperCase()

let output=""

if(sql.includes("SELECT")){

output = "Query executed successfully (simulation)."

}else if(sql.includes("CREATE")){

output = "Table created (simulation)."

}else{

output = "Only basic SQL simulation supported."

}

document.getElementById("result").innerHTML = output

}
