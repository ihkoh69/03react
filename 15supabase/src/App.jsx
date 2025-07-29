
import { useState, useEffect } from 'react'
import supabase from './utils/supabase'
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos.length > 0) {
        setTodos(todos)
      }
      console.log(todos)
    }

    getTodos()
  }, [])

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
   setFile(e.target.files[0]);
   console.log(e.target.files[0]);
  }

  // 수파베이스는 한글 사용이 안됨
  const sanitizeFileName = (filename) => {
  return filename
    .replace(/\s+/g, '_')          // 공백 → _
    .replace(/[^\w.-]/g, '')       // 한글, 특수문자 제거
}

  const handleFileUpload = async() => {
    if(!file) {
      return alert('파일을 입력해 주세요');
    }

    const timestamp = Date.now();
    const sanitizedName = sanitizeFileName(file.name);
    const filePath = `${timestamp}_${sanitizedName}`;

    // const filePath = `${Date.now()}_${file.name}`;

    const {data,error} = await supabase.storage.from('mybucket').upload(filePath, file);
    if (error) {
      console.error('파일 업로드 실패:', error);
      return;
    }
    console.log('파일 업로드 성공:', data);
    alert('파일 업로드 성공');
  }

  return (
    <>
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload </button>

    </div>
  </>
  )
}
export default App
