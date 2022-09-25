import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {client} from '../lib/client'

import ButtonComponent from './ButtonComponent'
import Project from './Project';


const Featured = () => {
  const [posts, setPosts] = useState(null);

  const fetchData = async () => {
    const query = '*[_type == "posts"]';
    const post = await client.fetch(query);
    setPosts(post);
  }
  useEffect(() => {
    fetchData();
  }, [])
  const filterItems = posts?.filter((item, index) => index < 4);

  return (
    <div className="featured">
      <div className="featured-container">
        <div className="header">
          <div className="text">
            <h3>featured projects</h3>
            <p>Lorem ipsum, dolor sit amet consectetur  adipisicing elit omnis ut.</p>
          </div>
          <Link to='/works'>
            <ButtonComponent text="view all" />
          </Link>
        </div>
        <div className="featured-projects">
        { filterItems &&
            filterItems?.map(
              (item) => <Project key={item._id} item={item} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Featured