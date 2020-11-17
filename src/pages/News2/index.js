import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { MDBContainer, MDBAnimation } from 'mdbreact';
import Posts from './Posts';
import Pagination from './Pagination';

const News2 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Pagination ==> halaman 1
  const [currentPage, setcurrentPage] = useState(1);
  // Menampilkan 1 halaman 10 pos
  const [postsPerPage] = useState(8);

  useEffect(() => {
    // karena gk bisa narok async di useEffect jadi buat function baru
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get Current Posts / Pengaturan halaman
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <MDBContainer fluid>
      <MDBAnimation reveal type='fadeInUp'>
        <hr className='my-4' />
      </MDBAnimation>
      <MDBAnimation reveal type='fadeInUp'>
        <Posts posts={currentPosts} loading={loading} />
        <br />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </MDBAnimation>
    </MDBContainer>
  );
};

export default News2;
