import {createContext, useContext, useEffect, useState} from 'react'
import { UserAuth } from './AuthContext';
import { getFiles } from '../components/js/api';
const FileContext = createContext({
    files : [],
    selectedFile : {},
    selectFileToView : () => {},
    fetchFiles : () => {}
});

export const FileContextProvider = ({children}) => {
    const [files,setFiles] = useState([]);
    const {user} = UserAuth();


    const fetchFiles = async () => {
        const data = await getFiles();
        setFiles(data);
    }

    useEffect(() =>{
        if(user)
            fetchFiles();
    },[user])

    
     
    return(
        <FileContext.Provider value={{files}}>
            {children}
        </FileContext.Provider>
    )
}

export const UserFileContext = () => useContext(FileContext)