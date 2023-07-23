import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/header';
import Footer from '../components/footer';
import './style/page.css'

const Hintpage = () => {
  const { studentid } = useParams();
  const [data, setData] = useState(true)
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(studentid)
    if (data === false) {
      navigate('/'); 
      alert('น้องเป็นใครอ่ะ ไม่อยู่ในสารบบ') // Green Tea & Honey เพราะมาก
    }
  }, [studentid])


  return (
    <>
        <div className='vh-100'>
          <Header />
          <div className='hint-backgroud h-50 d-flex justify-content-center align-items-center'>
            <div className='dark-overlay'></div>
            <div className='main-content text-light' style={{fontSize: '250%'}}><u>Hint</u></div>
          </div>
          <div className='h-50 container p-4' style={{position:'relative'}}>
            {/* ตอนเชื่อม ให้ใช้ hintrow.js loop จำนวนคำใบ้เอานะ */}
            <div className='h1 text-center text-dark'>คำใบ้ของน้องคือออออออ...</div>
              <table className="main-content table table-bordered text-center"> 
                <thead>
                  <tr>
                    <th scope="col">ครั้งที่</th>
                    <th scope="col">คำใบ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>หล่อจังเลย</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>ว้าวเธอ</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>ไม่เที่ยวไม่กินมุ่งเรียนอย่างเดียว</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Hintpage