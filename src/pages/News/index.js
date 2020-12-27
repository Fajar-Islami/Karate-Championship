import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MDBContainer, MDBAnimation } from "mdbreact";
import Posts from "./Posts";
import Pagination from "./Pagination";
import { data_news } from "./data";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Pagination ==> halaman 1
  const [currentPage, setcurrentPage] = useState(1);
  // Menampilkan 1 halaman 10 pos
  const [postsPerPage] = useState(6);

  useEffect(() => {
    // karena gk bisa narok async di useEffect jadi buat function baru
    // const fetchPosts = async () => {
    //   //   setLoading(true);
    //   //   const res = await Axios.get('https://jsonplaceholder.typicode.com/posts');
    //   //   setPosts(res.data);
    //   //   setLoading(false);
    // };
    // fetchPosts();
  }, []);

  // Get Current Posts / Pengaturan halaman
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data_news.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  console.log("data_news:", data_news);
  return (
    <MDBContainer fluid>
      <MDBAnimation reveal type='fadeInUp'>
        <hr className='my-4' />
      </MDBAnimation>
      <MDBAnimation reveal type='fadeInUp'>
        <Posts posts={currentPosts} />
        <br />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data_news.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </MDBAnimation>
    </MDBContainer>
  );
};

export default News;
