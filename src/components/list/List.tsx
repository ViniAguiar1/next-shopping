import styles from './styles.module.css'
// import shopping-bag from '../../../public/shopping-bag.svg'
import Image from 'next/image'
import axios, { AxiosResponse } from "axios"
import { useQuery } from '@tanstack/react-query';
import { useGetProductsQuery } from '@/services/queryClient';
  

export function List(){
    const { data, isLoading } = useGetProductsQuery();

    if (isLoading) {
      return (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
        <div className={styles.gridContainer}>
          {data?.map((product) => (
            <div className={styles.container}>
              <div>
                <img className={styles.photo} src={product.photo} width={80} height={80} />
                <div className={styles.middle}>
                <p>{product.name}</p>
                        <button>{product.price}</button>
                </div>
                <p className={styles.about}>Redesigned from scratch and completely revised.</p>
              </div>
              <button className={styles.shopping}>
                    <Image src="/shopping-bag.svg"
                            alt='Shopping Bag'
                            width={18}
                            height={16.5}
                            
                    />
                    <p>Comprar</p>
                </button>
            </div>
          ))}
        </div>
      );

    return(
        <>
            <div className={styles.container}>
                <img className={styles.photo} src="" alt="Product Image" /> <br />
                    <div className={styles.middle}>
                        <p>Apple Watch Series 4 GPS</p>
                        <button>R$399</button>
                    </div>
                <p className={styles.about}>Redesigned from scratch and completely revised.</p>
                <button className={styles.shopping}>
                    <Image src="/shopping-bag.svg"
                            alt='Shopping Bag'
                            width={18}
                            height={16.5}
                            
                    />
                    <p>Comprar</p>
                </button>
            </div>
        </>
    )
}