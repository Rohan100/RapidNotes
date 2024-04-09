import { getFirestore,setDoc, doc} from 'firebase/firestore';
import app from "../firebase.config.js";





const db = getFirestore(app)

export const createUser = async (req,res) => {
    const userid = req.body.userid;
    const email = req.body.email;
    const username = req.body.username;
    const branch = req.body.branch;
    const college = req.body.college;

    await setDoc(doc(db,'users',userid),{email,username,branch,college})

    res.json({userid}).status(200);
}