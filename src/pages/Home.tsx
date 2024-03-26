import { Form } from 'react-router-dom'
import { useState } from 'react'

function App(){
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const regexTest = /^https:\/\/api\.github\.com\/repos\/[^\/]+\/contents\/[^\/]+(\/[^\/]+)*$/

    return (
        <Form action={title}>
            <input type="text" onChange={(e)=>{
                if(e.target.value.startsWith('https://api.github.com/repos/')){
                    let newUrl = e.target.value.slice(28).replace('/contents', '').split('/')
                    setTitle(`${newUrl[1]}:${newUrl.slice(2).join('>')}`)
                }else setUrl(e.target.value)
            }} />
            <button type="submit"
                    disabled={
                        regexTest.test(url)
                    }
            >CONFIRM</button>
            <h3>O título será: {title}</h3>
        </Form>
    );
}

export default App