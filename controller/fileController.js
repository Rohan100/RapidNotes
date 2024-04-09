import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { getFirestore, addDoc, collection, updateDoc, arrayUnion, doc, arrayRemove, getDoc, query, where,getDocs } from 'firebase/firestore';
import { v4 as uuid4 } from "uuid";
import app from "../firebase.config.js";
import { pdf } from 'pdf-to-img'





const storage = getStorage(app)
const db = getFirestore(app) 

export const getFiles = async(req,res) => {
     const filesnap = await getDocs(collection(db,'files'));
     const data = [];
     filesnap.forEach((d) => data.push({...d.data(),id : d.id}))
     res.json(data);
}

export const getFileFromdepartment = async( req,res) => {
    const dep = req.params['id'];
    try {
        const q = query(collection(db,'files'),where("department",'==',dep))
        const qsnap = await getDocs(q)
        const data = []
        qsnap.forEach(doc =>{
            data.push(doc.data())
        })
        res.json(data);
    } catch (error) {
        console.log(error)
    }
}

export const getFileFromSubject = async(req,res) => {
    const sub = req.params['id'];
    console.log(sub)
    try {
        const q = query(collection(db,'files'),where("subject",'==',sub))
        const qsnap = await getDocs(q)
        const data = []
        qsnap.forEach(doc =>{
            data.push(doc.data())
        })
        res.json(data);
    } catch (error) {
        console.log(error)
    }
}
export const getMyFiles =async (req,res) =>{
    const userid = req.params['id'];
    try {
        const q = query(collection(db,'files'),where("user_id",'==',userid))
        const qsnap = await getDocs(q)
        const data = []
        qsnap.forEach(doc =>{
            data.push(doc.data())
        })
        res.json(data);
    } catch (error) {
        console.log(error)
    }
}

export const uploadFile = async (req, res) => {
    const userid = req.body.userid;
    const dep_loc = req.body.department; 
    const isPrivate = JSON.parse(req.body.isPrivate);
    const description  = req.body.description;
    const subject = req.body.subject;
    const storageRef = ref(storage, `${uuid4()}.pdf`);
    const thumbref = ref(storage, `${uuid4()}.png`)
    const metadata = {
        contendType: req.file.mimetype
    }

    const data = {
        file_name: req.file.originalname,
        user_id: userid,
        filepath: '',
        thumbnail: ' ',
        like_count: 0,
        download_count: 0,
        department:  dep_loc,
        subject: subject,
        isPrivate: isPrivate.private,
        visibleTo: [],
        description,
    }

    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)

    const durl = await getDownloadURL(snapshot.ref);
    data.filepath = durl;
    const document = await pdf(req.file.buffer);

    for await (const image of document) {
        const snapshot = await uploadBytesResumable(thumbref, image)
        const durl = await getDownloadURL(snapshot.ref);
        data.thumbnail = durl;
        console.log(durl);
        break
    }

    const docRef = await addDoc(collection(db, "files"), data);

    res.json(docRef.id);
}

export const updateFile = async (req, res) => {
    const userEmail = req.body.useremail;
    const isPrivate = JSON.parse(req.body.isPrivate);
    const userid = req.body.userid;
    const fileid = req.body.fileid;
    const fileref = doc(db, 'files/' + fileid);
    const file = await getDoc(fileref);
    if (file.exists()) {
        try{
            if (file.data().user_id.id == userid) {
                if(req.params['id'] == '1'){
                    await updateDoc(fileref,{
                        visibleTo : arrayUnion(userEmail)
                    })
                }
                if(req.params['id'] == '0'){
                    await updateDoc(fileref,{
                        visibleTo : arrayRemove(userEmail)
                    })
                }
                if(req.params['id'] == '2'){
                    await updateDoc(fileref,{
                        isPrivate : isPrivate.private
                    })
                }
            }
        }catch(e){

        }
       
    }


    res.json({
        file: "updated"
    })
}



