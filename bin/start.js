
import fs from 'fs'
import A from 'example'

console.log(fs.readFileSync, A);
const { readFileSync, ...other } = fs;
console.log(other);
