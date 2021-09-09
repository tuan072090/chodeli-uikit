import React from 'react'
import { CategoryType } from '../../../share/data-types/category'
import styles from './listCategories.module.scss'
interface ListCateProps extends React.PropsWithChildren<any>{
    categories:CategoryType[],
    onClick:(item:any)=>void,
}

const ListCategory:React.FC<ListCateProps>=({categories,onClick,...props})=> {
    return (
        <div className={`${styles.categories} d-flex align-items-center w-100 bg-white`}>
            {
                categories.map((item,index)=>{
                    return (
                        <div key={index} className={styles.categoryCardImg} onClick={()=>onClick(item)}>
                            <img src={item.image.thumbnail} alt={item.image.name} className={styles.avatar} />
                            <p className={`${styles.title} mt-3 mb-0`}>{item.name}</p>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default ListCategory;