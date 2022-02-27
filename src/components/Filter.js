import { Wrapper } from "../styles/Filter.styles";

const Filter = ({ category, onFilter, status }) => {
  return (
    <Wrapper>
      <div className={ (status) ? 'active' : ''}
           onClick={() => onFilter(category)}>
        {category}
      </div>
      
    </Wrapper>
  );
};

export default Filter;
