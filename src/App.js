import { useState } from 'react'
// Components
import Note from './components/Note'
import AddNote from './components/AddNote'
import Filter from './components/Filter'
import Grid from '@mui/material/Grid'

// Styles
import { Wrapper, Header } from './App.styles.js'


function App() {
  const [notes, setNotes] = useState([])

  const [display, setDisplay] = useState({
    work: true,
    home: true,
    personal: true
  })
  const [allCategories,setAllCategories] = useState([])

  // Add a Note
  const addNote = (note) => {
    // console.log(note)
    const id = Math.floor(Math.random()*1000) + 1
    const newNote = { id, ...note }
    setNotes((p)=>{
      return [...p, newNote]
    })
    // console.log(notes)
  }

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }
  
  // Filter Notes
  const handleFilter = (category) => {
    const value = display[category]
    setDisplay({...display, [category] : !value})
  }
  const categoryListAddHandler = (cat) => {
    setAllCategories((p)=>{
      return [...p, cat]
    })

  }


  return (
    <Wrapper>
      <Header direction="row" spacing={10}>
        <h1>My Notes</h1>
        {allCategories.map((category) => (
          <Filter key={allCategories.indexOf(category)} 
                  category={category}
                  status = {display[category]} 
                  onFilter={handleFilter}/>
        ))}
      </Header>
    
      <Grid container rowSpacing={12} columnSpacing={{xs:6, md:10}}>
        <Grid item xs={6} md={4}> 
          <AddNote onAdd={addNote} categoryListAdd={categoryListAddHandler}/>
        </Grid>
        {notes.filter(note => display[note.category]).map(filteredNote => (
          <Grid key={filteredNote.id} item xs={6} md={4}> 
            <Note note={filteredNote} onDelete={deleteNote} />
          </Grid> 
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
