import { MDBContainer } from "mdbreact";
import React from "react";
import { useParams } from "react-router";
import { data_news } from "./data";

const DetailNews = () => {
  let { id } = useParams();
  console.log(id);
  const isi = data_news.findIndex((x) => x.id == id).isi;

  //  const isi = data_news.filter((x) => x.id == id).isi;

  console.log("isi", isi);
  return (
    <MDBContainer fluid className='a'>
      {data_news.map((post, i) => (
        <>
          {post.id == id && (
            <>
              <div
                className='h1-responsive'
                style={{ fontWeight: "500", textTransform: "capitalize" }}
              >
                {post.judul}
              </div>

              <small className='grey-text t-muted'>
                {post.penulis}, {post.tanggal}
              </small>
              <img
                src={post.gambar}
                alt={post.judul}
                style={{ maxHeight: "100vh", maxWidth: "100vw" }}
                className='img-fluid mx-auto d-block img-thumbnail'
              />
              <p className='grey-text t-muted text-center'>Foto: {post.judul}</p>
              <p>
                {post.isi}
                {post.isi}
                {post.isi}
                {post.isi}
              </p>
              <p>
                {post.isi}
                {post.isi}
                {post.isi}
                {post.isi}
              </p>
            </>
          )}
        </>
      ))}
    </MDBContainer>
  );
};

export default DetailNews;
