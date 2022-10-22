<?php
  
if(isset($_REQUEST['submit'])){
    $data = '';

    $directory = "./jsonFiles/";
    $str2 = ".json";
    $i = $_REQUEST['idPerro'];    
    
    $nuevostr = $i.$str2;
    $filename = $nuevostr;

 
if(is_file($filename)){
    $data = file_get_contents($filename);
}

$json_arr = json_decode($data,true);

$url = ("https:\\ipfs.io\\ipfs\\QmPdYtJk7NA9JoJLszJNeGq9N82THuCXFRQGkXSmHxmxs7\\".$_REQUEST['nombre']."\\");

$json_arr[] = array('nombre' => $_REQUEST['nombre'], 'edad' => $_REQUEST['edad'], 'raza' => $_REQUEST['raza'], 'genero' => $_REQUEST['genero'], 
'fechaEntrada' => $_REQUEST['fechaEntrada'], 'imagen' => $url.$_REQUEST['nombre'].".png");

file_put_contents($directory.$filename, json_encode($json_arr));
}


?>