import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Skeleton1 = () => {
  return (
    <div>
        <section>
  <article className='item'>
    <div className='item-img'>
      {/* <Skeleton width={140} height={140} /> */}
    </div>
      <h3 className='item-title'><Skeleton count={4} /></h3>
    <div className='item-info'>
      <Skeleton width={160} height={20} />
      {/* <Skeleton width={30} height={20} />
      <Skeleton width={22} height={22} circle={true} /> */}
    </div>
    <Skeleton height={48} count={2} className='skeleton' />
  </article>
</section>
    </div>
  )
}

