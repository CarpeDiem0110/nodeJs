var fs = require('fs');


 /* Create the file */ 
fs.writeFileSync("new.txt","new.txt file was created ", "utf-8",(err) =>{
      if(err)
         throw err;
           console.log("new file was created");
     });

/* Read the file */ 
fs.readFile('employes.json',"utf-8", function (err, data) {
    if (err) 
        throw err;

    console.log(data);
});
 
/* Delete the file */ 
fs.unlink('TestFile.txt', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  });  


/* Update the file */ 
fs.appendFile('file.txt', "Yeni veri eklendi" , "utf-8", (err) => {
    if(err)
        throw err;

        console.log("File is updated");
})