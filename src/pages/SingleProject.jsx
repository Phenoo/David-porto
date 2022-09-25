import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
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
    <div className="featured">

      {
        single && single.map(item => {
          return (
            <section className="single-project">
                <h2>{item.name}</h2>
                <div className="image">
                  <img src={urlFor(item.image)} alt="project" />
                </div>
                <p>
                  {item.details} .
                </p>
            </section>
          )
        })
      }
    </div>
  )
}

export default SingleProject