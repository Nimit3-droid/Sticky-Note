import CloseIcon from '@mui/icons-material/Close';
import { Wrapper, FlexBox, gradients } from '../styles/Note.styles';

const Note = ({ note, onDelete }) => {
    return (
        <Wrapper style={{ backgroundImage: gradients["home"] }}>
          <FlexBox>
            <span className='date'>{note.date}</span>
            <CloseIcon color='error' 
                       onClick={() => onDelete(note.id)}
                       className="custom-btn"/>
          </FlexBox>
          <h1>{note.title}</h1>
          <p>{note.desc}</p>
          <span className='category'>{note.category}</span>
        </Wrapper>
    );
};

export default Note;
