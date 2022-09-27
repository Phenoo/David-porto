import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import {client, urlFor} from '../lib/client'
import '../styles/single.scss'


const SingleProject = () => {
  const [single, setSingle] = useState(null)
  const {slug} = useParams();

  
  const fetchSingleData = async () => {
    const query = `*[slug.current == "${slug}"]`;

    const post = await client.fetch(query);
    setSingle(post);
    console.log(post);
  }

  useEffect(() => {
    fetchSingleData();
  })

  return (
    <section className="project-page">
      {
        single && single.map(item => {
          return (
            <div className="single-project">
                <h2>{item.name}</h2>
                <h6 className="project-category">
                  #{item.category}
                </h6>
                <div className="image">
                  <img src={urlFor(item.image)} alt="project" />
                </div>
                <p>
                  {item.details} .
                </p>
            </div>
          )
        })
      }
      <Link to='/'>
        <ButtonComponent text='back' />
      </Link>
    </section>
  )
}

export default SingleProject