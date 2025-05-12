const { convertArrayToCSV } = require('convert-array-to-csv');
const fs = require('fs')

const date = new Date().toLocaleDateString()
const dataObjects = [
  {
    date: date,
    first: 'Mark',
    last: 'Otto',
    handle: '@mdo',
  }
];
 
const csvFromArrayOfObjects = convertArrayToCSV(dataObjects);

fs.appendFile('output.csv', csvFromArrayOfObjects, err =>{
    if(err){
        console.error(err)
    }
    console.log('successful')
})

//Code format for converting csv from https://www.npmjs.com/package/convert-array-to-csv