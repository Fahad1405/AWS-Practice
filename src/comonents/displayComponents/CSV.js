import { useState, useEffect } from 'react';
import Papa from "papaparse";

const CSV = ({ source_file }) => {
  const [fileData, setFileData] = useState()

  useEffect(() => {
    let reader=new FileReader();
    reader.onload = ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      setFileData(csv?.data)
    };
    reader.readAsText(source_file);
  }, [])

  return (
    fileData && 
    <table>
      {
        fileData.map((arr, i) => (
          <tr key={i}>
            {Object.values(arr).map((attr, i) => (
              <td>
                <span>{attr}</span>
              </td>
            ))}
          </tr>
        ))
      }
    </table>
  )
}

export default CSV;
