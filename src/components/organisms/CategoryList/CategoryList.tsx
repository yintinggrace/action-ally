import string from '../../../string';
import Heading from '../../atoms/Heading/Heading';

const CategoryList = () => {
  return (
    <div>
      <Heading type="h3">
        {string.home.categories}
      </Heading>
    </div>
  );
}

export default CategoryList;
