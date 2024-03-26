import documentationsApi from '../../API/documentationsAPI'
import FolderTreeVewer from '../../components/FolderTreeViewer/main'
import { BodyStyled, TreeContainer, FileContainer } from './css';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

function App(){
    const navigate = useNavigate()
    const { id }: any = useParams()

    // temporarily
    if(id == '404') return <div>404</div>
    
    const owner: any = id.split(':')[0]
    const repo: any = id.split(':').slice(1)[0].split('>')[0]
    const path: any = id.split(':').slice(1)[0].split('>').slice(1).join('/')

    try{
        documentationsApi(owner, repo, path)
    }catch(err){
        navigate('/404')
    }
    const reducer = useSelector((rootReducer: any) => rootReducer.mainReducer)

    return (
        <div>
        {
            !reducer.loading ?
                <LoadedPage data={ reducer.data }></LoadedPage> :
                <LoadingPage></LoadingPage>
        }
        </div>
    );
}

function LoadedPage({ data }: any){
    const navigate = useNavigate();
    if (typeof data == 'undefined') return navigate('/404')

    return (
        <BodyStyled>
            <TreeContainer>
                <FolderTreeVewer data={data.files}></FolderTreeVewer>
            </TreeContainer>

            <FileContainer>
                <Outlet></Outlet>
            </FileContainer>
        </BodyStyled>
    )
}

function LoadingPage(){
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
}

export default App