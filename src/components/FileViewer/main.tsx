import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import rehypeRaw from "rehype-raw"
import { ReactMarkdownStyled } from './css'

function App(){
    const navigate = useNavigate()
    let { path = '' }: any = useParams()

    let data = useSelector((rootReducer: any) => rootReducer.mainReducer).data.files

    const readme = findDataForFile(data, path)
    if (readme == undefined) navigate('/404')

    return (
        <ReactMarkdownStyled rehypePlugins={[rehypeRaw]}>{readme}</ReactMarkdownStyled>
    )

    // <ReactMarkdownStyled rehypePlugins={[rehypeRaw]}>{data.readme}</ReactMarkdownStyled>
}

function findDataForFile(arr: any, path: string): string | undefined {
    for (const obj of arr){
        if (obj.type == 'file' && (obj.path == path || path == ''))
            return obj.data

        if (obj.childrens){
            const result = findDataForFile(obj.childrens, path)
            if (result !== undefined) return result
        }
    }
    
    return undefined;
}

export default App