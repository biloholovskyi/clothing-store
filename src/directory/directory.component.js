import CategoryItem from '../categoryItem/categoryItem.component'

import './directory.styles.scss'

const DirectoryComponent = ({categories}) => {
	return (
		<div className='directory-container'>
      {categories.map(category => (
        <CategoryItem key={category.id} category={category}/>
      ))}
		</div>
	)
}

export default DirectoryComponent
