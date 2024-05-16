import React from 'react';
import { districtOptions, attractionTypeOptions } from '../Components/options';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import homeImage from '../assets/Back01.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedAttractionType, setSelectedAttractionType] = useState('');

  useEffect(() => {
    handleSearch();
  }, [selectedDistrict, selectedAttractionType]);

  const handleSearch = async (e) => {
    // e.preventDefault();
  };

  return (
    <Section id="hero">
      <div className="background ">
        <img src={homeImage} alt="" />
      </div>
      <div className="content pb-48">
        <div className="title ">
          <h1 className=" font-extrabold">TRAVEL TO EXPLORE</h1>
          <p>
            Welcome to Sri Lanka, where adventure and serenity intertwine to
            create an unforgettable journey. From pristine beaches to ancient
            ruins, lush tea plantations to vibrant festivals, Sri Lanka beckons
            you to explore its rich tapestry of experiences. your adventure
            starts here. Join us as we uncover the beauty and magic of Sri Lanka
            together.
          </p>
        </div>
        <div className="search">
          {/* Wrap the divs in a flex container */}
          <div className="pl-0 flex flex-col sm:flex-row gap-1 ">
            {/* District selection */}
            <div className=" mb-4 flex-1 lg:w-4/9 ">
              <label className="  font-bold text-2xl text-white block mb-1 ">
                District
              </label>
              <select
                className=" block w-full h-1/2 shadow-inner bg-yellow-100 border-t-2 border-l-2 border-b-8 border-r-4 hover:border-2   border-black duration-200  rounded-sm  focus:border-orange-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                <option value="">Select District</option>
                {districtOptions.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {/* Listing type selection */}
            <div className="mb-4 flex-1 lg:w-4/9 ">
              <label className="font-bold text-2xl  text-white block mb-1">
                Attraction Type
              </label>
              <select
                className="block  w-full h-1/2  bg-yellow-100 border-t-2 border-l-2 border-b-8 border-r-4 hover:border-2   border-black duration-200  rounded-sm shadow-inner focus:border-orange-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={selectedAttractionType}
                onChange={(e) => setSelectedAttractionType(e.target.value)}
              >
                <option value="">Select Attraction Type</option>
                {attractionTypeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Search button */}
            <div className="items-center mb-4  mt-12 pt-4 lg:w-1/9 ">
              <Link
                to="/place-selection"
                className=" btn border-t-2 border-l-2 border-b-8 border-r-4 hover:border-2   border-black duration-200   shadow-lg w-60 h-14 text-center  px-24  rounded-sm bg-yellow-500  text-white  font-semibold    items-center  flex flex-raw"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
  
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }

      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }

    // .search {
    //   display: flex;
    //   background-color: #ffffffce;
    //   padding: 0.5rem;
    //   border-radius: 40px;

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }

        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;

        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
