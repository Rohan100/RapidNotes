import {Router} from "express";
import multer from 'multer';
import { getFileFromSubject,getFileFromId, getFileFromdepartment, getFiles, getMyFiles, updateFile, uploadFile } from "../controller/fileController.js";


const Filerouter = Router();  
const upload = multer({ storage: multer.memoryStorage() });

Filerouter.get('/',getFiles);
Filerouter.get('/:id',getFileFromId)
Filerouter.post('/upload', upload.single('file'),uploadFile)


Filerouter.post('/update/:id',updateFile)

Filerouter.get('/myfiles/:id',getMyFiles)

Filerouter.get('/department/:id',getFileFromdepartment)

Filerouter.get('/subject/:id',getFileFromSubject);
  
//  function addSubject(){
//     const array = ["Automobile Engineering","Biotechnology Engineering","Chemical Engineering","Civil Engineering","Computer Engineering","Electrical Engineering","Electronics Engineering","Electronics Engineering","Instrumentation & Control Engineering","Mechanical Engineering","Robotics and Automation"];
//     array.map( async (i) => {
//         await addDoc(collection(db,'department','subjects'),{
//             name : i,
//             total_sem : 8
//         })
//     })
// }

// addSubject()

// function addSubject(){
//     const items = [
//         "1EngEnLVNLKZWEnEUejA",
//         "FyEpDqIAXHr3XsTJeZB0",
//         "IUBnns0eQpECWRkPZRhT",
//         "Qju20VLQqKm6tz1Bs1OG",
//         "d8Hn2N4Gc39iGJmuUHOT",
//         "eNSPOntJnfmD5LDLlZuZ",
//         "hZh949MlBMF7uUKHihCs",
//         "km4Micyb5BSDsfutlt8t",
//         "nvpBW2MMPeKJsrUH57r4",
//         "sneW9kVCdUN7UDXqtNPA",
//         "usSLvM6OLZNScXMBRKYc",
//         "yUcKxl0yPz5jgkpDrAbD"
//     ];

//     items.map( (i) => {

//         const subjects = [
//             { name: "Engineering Mathematics-I", sem: 1 },
//             { name: "Engineering Physics / Engineering Chemistry", sem: 1 },
//             { name: "Engineering Physics / Engineering Chemistry", sem: 1 },
//             { name: "Basic Electrical Engineering / Basic Electronics Engineering", sem: 1 },
//             { name: "Programming and Problem Solving / Engineering Mechanics", sem: 1 },
//             { name: "Engineering Mathematics-II", sem: 2 },
//             { name: "Engineering Physics / Engineering Chemistry", sem: 2 },
//             { name: "Basic Electrical Engineering / Basic Electronics Engineering", sem: 2 },
//             { name: "Engineering Graphics", sem: 2 }
//         ];
//         subjects.map(async (sub) => {

//             await addDoc(collection(db,'department',i ,'subjects'),{
//                 ...sub
//             })

//         })
//     })
    
// }

// addSubject();
export default Filerouter;