import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import Project from '../components/Project';
import {client} from '../lib/client'

const Works = () => {
  const [posts, setPosts] = useState(null);

  const fetchData = async () => {
    const query = '*[_type == "posts"]';
    const post = await client.fetch(query);
    setPosts(post);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <section className='work-page'>
      <div className="featured-projects">
      { posts &&
            posts?.map(
              (item) => <Project key={item._id} item={item} />
            )
          }
      </div>
      <Link to='/'>
        <ButtonComponent text='back' />
      </Link>
    </section>
  )
}

export default Works