import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import './style/page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const [studentid, setStudentid] = useState('')
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className='page-background vh-100'>
                <div className='dark-overlay'></div>
                <Header />
                <div className='main-content w-100 '>
                    <div className='d-flex justify-content-center'>
                        <img className='img-fluid' alt="logo" src="https://tupine.engr.tu.ac.th/assets/front/img/banner/Slogan_TUPINE.svg" style={{maxHeight: '10rem'}} />
                    </div>
                    <form className='d-flex justify-content-center text-light mt-4'>
                        <div className={`input-group ${screenWidth >= 1024 ? 'd-flex w-50' : 'w-75'}`}>
                        <input type="search" className="form-control" placeholder="รหัสนักศึกษา" onChange={event => setStudentid(event.target.value)} aria-label="Search" aria-describedby="search-addon" />
                        <Link to={`/hint/${studentid}`} className="btn input-group-text border-0" style={{ backgroundColor: '#fd7d14cf' }} id="search-addon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
                        </div>
                    </form>
                </div>

                {/* <form className='d-md-flex justify-content-center text-light mt-4'>
                        <div className='input-group'>
                        <input type="search" className="form-control" placeholder="รหัสนักศึกษา" aria-label="Search" aria-describedby="search-addon" />
                        <button type="submit" className="btn input-group-text border-0" style={{ backgroundColor: '#fd7d14cf' }} id="search-addon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        </div>
                    </form> */}
                {/* <Link className='btn btn-primary' to='/hint'>hint</Link>
                <Link className='btn btn-primary' to='/matchmethod'>method</Link> */}
            </div>
            <Footer />
        </>
    )
}


export default Homepage