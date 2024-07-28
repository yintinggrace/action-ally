import { useNavigate } from 'react-router-dom';
import Main from '../../components/templates/Main/Main';
import string from '../../string';

const AddCategory = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  }

  return (
    <Main
      title={string.addCategory.title}
      closePage
      onClose={handleClose}
    />
  )
}

export default AddCategory;
