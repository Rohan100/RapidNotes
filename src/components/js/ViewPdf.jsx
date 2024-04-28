import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '../css/viewpdf.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { UserFileContext } from '../../store/FileContext';
import Loader from '../js/Loader.jsx';
import { useParams } from 'react-router-dom';
import { getFilesFromId } from './api.jsx';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function ViewPdf() {
  const [numPages, setNumPages] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams()
  const fetchFile = async () => {
    try {
      const file = await getFilesFromId(id);
      console.log(file)
      setFile(file)
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetchFile()
  }, [])
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='pdf-container'>
      {!loading && file ?
        <Document className='pdf-veiwer' file={file.filepath} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map(page => {
            return <Page pageNumber={page} />
          })
        }


      </Document>
        :
        <Loader />
        
      }

    </div>
  );
}