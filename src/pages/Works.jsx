import React, { useEffect, useState } from 'react'
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
    <div>
      <div className="featured-projects">
      { posts &&
            posts?.map(
              (item) => <Project key={item._id} item={item} />
            )
          }
      </div>
    </div>
  )
}

export default Works