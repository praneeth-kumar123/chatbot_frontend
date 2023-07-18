import React from 'react'
import "./StageMaster.css"
const StageMaster = () => {
    return (
        <section className='stageMaster'>
            <article>
                    <div>
                        <button>ADD STAGE</button>
                    </div>
                    <div>
                        <input type="text" placeholder='Search'/>
                    </div>
            </article>
        </section>
    )
}

export default StageMaster
