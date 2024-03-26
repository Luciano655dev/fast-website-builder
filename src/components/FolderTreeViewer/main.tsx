import { useState } from "react"
import { StyledTree, StyledFile, StyledFolder, Collapsible, StyledLink, FolderTitle } from './css'

const File = ({ name, path }: any) => {
  return (
    <StyledFile>
      <StyledLink to={path}>{name}</StyledLink>
    </StyledFile>
  )
}

const Folder = ({ name, children }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (e: any) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        { isOpen ? <p> ↓ </p> : <p> {'>'} </p>}
        <FolderTitle>{name}</FolderTitle>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  )
}

const TreeRecursive = ({ data }: any) => {
  return data.map((item: any) => {
    // if its a file render <File />
    if (item.type === "file")
      return <File name={item.name} path={item.path} key={Math.random()} />
    
    // if its a folder render <Folder />
    if (item.type === "folder") {
      return (
        <Folder name={item.name} key={Math.random()}>
          <TreeRecursive data={item.childrens} />
        </Folder>
      )
    }
  })
}
const Tree = ({ data, children }: any) => {
  const isImparative = data && !children

  return (
    <StyledTree>
      {isImparative ? <TreeRecursive data={data} /> : children}
    </StyledTree>
  )
}

Tree.File = File
Tree.Folder = Folder
export default function FolderTreeViewer({ data }: any) {
  return <Tree data={data} />
}
