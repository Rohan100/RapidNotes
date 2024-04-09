import { collection, getDocs,getFirestore } from "firebase/firestore"
import app from "../firebase.config.js";

const db = getFirestore(app) 
export const getBranches =async (req,res) => {
    const subSnap =await getDocs(collection(db,'department'));
    const deps = []
    subSnap.forEach((d) => deps.push({id : d.id,...d.data()}))
    res.json(deps)
}

export const getSubjects  = async (req,res) => {
    const depid = req.params['dep']
    const subSnap = await getDocs(collection(db,'department',depid,'subjects'))
    const subs = []
    subSnap.forEach((d) => subs.push({id : d.id,...d.data()}))
    res.json(subs)
}

