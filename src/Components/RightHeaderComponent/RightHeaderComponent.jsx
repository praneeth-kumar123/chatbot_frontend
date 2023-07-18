import React from 'react'
import StageMaster from './StageMaster'
import PaginationStageMaster from './PaginationStageMaster'
// import "./RightComponent.css"
const RightHeaderComponent = () => {
    return (
        // <div className='userRightBlock'>
        //     <h1>right</h1>
        // </div>
        <section className='userRightBlock'>
            <article>
                <header>
                    <StageMaster/>
                    <PaginationStageMaster/>
                </header>
            </article>
        </section>
        
    )
}

export default RightHeaderComponent
