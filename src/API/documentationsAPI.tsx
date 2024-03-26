import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function DataFetchingComponent(owner: any, repo: any, path: any) {
  const dispatch = useDispatch();
  const initialPath = path

  // interface
  interface FileObject {
    type: 'folder' | 'file';
    name: string;
    path?: string;
    childrens?: FileObject[];
    data?: string; // URL de download para arquivos
  }

  useEffect(() => {
    async function fetchData(owner: string, repo: string, path: string = ''): Promise<FileObject[]> {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

      try {
        const response = await axios.get(apiUrl);

        const files: FileObject[] = [];

        for (const item of response.data) {
          if (item.type === 'file' && item.name.endsWith('.md')) {
            const data = await axios.get(item.download_url);
            let filePath = path ? `${path}/${item.name}` : item.name;
            filePath = filePath
                        .toLowerCase() // Coloca tudo em minusculo
                        .replace(initialPath, '') // retira o diretorio inicial
                        .split('/') // transforma em uma array com base no '/
                        .slice(1) // retira o primeiro elemento (vazio) da array
                        .join('>') // junta tudo por ':'
                        .replace('.md', '') // retira o .md
                        .replace(/\s/g, "") // retira os espaços

            files.push({
              type: 'file',
              name: item.name.replace('.md', ''),
              data: data.data,
              path: filePath,
            });
          } else if (item.type === 'dir') {
            const nestedFiles = await fetchData(owner, repo, item.path);
            let folderPath = path ? `${path}/${item.name}` : item.name;
            folderPath = folderPath
                          .toLowerCase() // Coloca tudo em minusculo
                          .replace(initialPath, '') // retira o diretorio inicial
                          .split('/') // transforma em uma array com base no '/
                          .slice(1) // retira o primeiro elemento (vazio) da array
                          .join('>') // junta tudo por ':'
                          .replace('.md', '') // retira o .md
                          .replace(/\s/g, "") // retira os espaços

            files.push({
              type: 'folder',
              name: item.name.replace('.md', ''),
              path: folderPath,
              childrens: nestedFiles,
            });
          }
        }

        return files;
      } catch (error: any) {
        throw new Error(`Erro ao obter a estrutura de arquivos: ${error.message}`);
      }
    }

    fetchData(owner, repo, path).then((data: any) => {
      const finalObj: any = {
        fileName: 'CodeWithMe',
        files: data,
      };

      dispatch({ type: 'main', payload: { data: finalObj, loading: false } });
    });
  }, [dispatch]);
}

export default DataFetchingComponent;
