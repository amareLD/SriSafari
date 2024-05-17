import React from 'react';
//import ImageComponent from '../Components/ImageComponent';
import GoogleMapView from '../Components/GoogleMapView';
import { useParams, useLocation } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import '../Styles/globals.css';

import { useState } from 'react';

const HotelDescription = () => {
  // Check if photos array is have? and has elements before getting photo_reference

  const location = useLocation();
  const { id } = useParams(); // Extract id from URL path
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const address = queryParams.get('address');
  const rating = queryParams.get('rating');
  const lat = parseFloat(queryParams.get('lat')); // Parse latitude as float
  const lng = parseFloat(queryParams.get('lng')); // Parse longitude as float
  const image = queryParams.get('image');
  const isOpen = queryParams.get('opening_hour');

  const [review, setReview] = useState('');
  //const cordinate = { lat, lng };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the submission of the review
    console.log('Review submitted:', review);
    // Optionally, you can clear the input field after submission
    setReview('');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white flex flex-col">
      {/* Main Image */}
      <div className="mt-14 mx-40  h-96 mb-4   flex flex-raw">
        <div className="  h-96 mb-4  w-7/12 flex flex-col">
          <img
            src={decodeURIComponent(image)}
            alt={name}
            className="p-1 rounded-sm object-cover shadow-md hover:shadow-lg transition duration-300 w-full h-96"
          />
          <button className=" absolute p-1 bg-transparent  text-gray-100 font-semibold hover:text-cyan-400 text-6xl py-0.5 px-5  border-blue-500 hover:border-transparent rounded-full w-auto h-auto shadow-3xl  hover:scale-110 transition-all">
            <span className=" shadow-3xl">+</span>
          </button>
        </div>
        <div className="  h-96 mb-4  w-5/12 flex flex-col">
          <img
            src={decodeURIComponent(image)}
            alt={name}
            className="p-1 rounded-2xl object-cover shadow-md hover:shadow-lg transition duration-300 w-full h-1/2"
          />
          <img
            src={decodeURIComponent(image)}
            alt={name}
            className="p-1 rounded-2xl object-cover shadow-md hover:shadow-lg transition duration-300 w-full h-1/2"
          />
        </div>
        {/* <img
          src="../Images/pexels-thorsten-technoman-109353-338504.jpg"
          alt="sdsdsd"
          className="rounded-lg object-cover shadow-md hover:shadow-lg transition duration-300 w-full h-64"
        /> */}
      </div>
      <div className="mx-40 flex flex-row flex-grow">
        <div className="w-full sm:w-3/5 flex flex-row flex-grow bg-white">
          {/* Main Content */}
          <div className="flex flex-col flex-grow">
            {/* Name, Address, and Contact Details */}
            <div className="mb-4 text-left">
              <h2 className="text-4xl font-extrabold mb-4 text-left">{name}</h2>
              <p className="mb-4 text-xl text-gray-500">{address} </p>
              <p className="mb-2">
                <FaPhone className="inline-block mr-2 ml-2" />
                +123 - 456 7890
              </p>
            </div>
            {/* Description */}
            <div className="mb-4">
              {/* <h3 className="text-xl font-bold mb-4">Description</h3> */}
              <p className="mb-2 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sagittis, tellus in scelerisque malesuada, eros sem porttitor
                magna, sed sodales turpis nisl quis justo. Pellentesque vitae
                magna ac nulla hendrerit finibus. Duis rutrum, neque nec
                malesuada aliquam, leo risus fringilla sapien, accumsan semper
                orci nulla elementum libero. Etiam et fringilla dui, vel
                pulvinar nunc. Nulla euismod nunc eget libero tempus, quis
                tempor nulla feugiat. Vestibulum imperdiet urna eget lorem
                vehicula gravida. Duis ante tellus, sagittis vitae suscipit non,
                cursus vel turpis. Ut vitae sagittis felis. Maecenas ac augue
                nec turpis pellentesque lobortis. Praesent non lectus
                condimentum, vestibulum lorem eu, vehicula mi. Ut viverra est et
                est semper, vel rhoncus metus congue. Etiam sagittis in erat at
                venenatis. Aenean aliquet nisl vel nulla commodo consectetur.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Praesent scelerisque, nunc quis
                aliquam tincidunt, dui justo auctor lorem, sed pellentesque
                neque velit varius dui.
              </p>
            </div>
            {/* Facilities */}
            {/* <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Facilities</h3>
              <ul>
                <li>Facility 1</li>
                <li>Facility 2</li>
                <li>Facility 3</li>
           
              </ul>
            </div> */}
            {/* Location - Google Map View */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <GoogleMapView lat={lat} lng={lng} />
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className="w-full sm:w-2/5 flex flex-col md:flex-col  justify-between mb-8 bg-white  items-center">
          {/* Reviews */}
          <div className="mb-4 md:mb-0 md:w-full md:h-auto   items-center">
            <div
              className={`btn border-t-2 border-l-1 border-b-4 border-r-2    border-black duration-200 pt-2 h-1/6 w-3/12 mx-10 my-7  border rounded-lg shadow-md ${
                isOpen === 'true' ? 'bg-green-200' : 'bg-red-200'
              }`}
            >
              <p
                className={`text-md text-center mt-0 font-bold ${
                  isOpen === 'true' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {isOpen === 'true' ? 'Open Now' : 'Closed Now'}
              </p>
            </div>
            <div className="m-10 w-auto bg-white rounded-lg shadow-lg border border-gray-400  ">
              <div className="p-6">
                <h5 className="text-blue-gray text-2xl font-bold mb-0">
                  This Choice You can
                </h5>
              </div>
              <div className="p-4 bg-gray-200 border-t border-gray-200 rounded-lg  ">
                <button className="w-full hover:bg-cyan-700 bg-cyan-500 text-white font-bold py-2 px-4 rounded shadow-lg ">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="px-5 md:h-full md:w-full ">
            <div className="bg-gray-100 w-full  p-2 rounded-lg">
              <div className="mx-0 flex items-center gap-4 pt-0 pb-8">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className=" flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-medium text-blue-gray-700">
                      saman kumara
                    </h5>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2.466l1.632 3.29 3.654.532a.75.75 0 0 1 .416 1.279l-2.652 2.579.627 3.641a.75.75 0 0 1-1.088.791L10 12.925l-3.276 1.624a.75.75 0 0 1-1.088-.79l.627-3.641-2.652-2.579a.75.75 0 0 1 .416-1.28l3.654-.531L10 2.466zm0 2.253L8.514 6.09a.75.75 0 0 1-.564.41l-3.088.448 2.24 2.18a.75.75 0 0 1 .215.664l-.529 3.077 2.769-1.374a.75.75 0 0 1 .698 0l2.77 1.374-.53-3.077a.75.75 0 0 1 .215-.664l2.24-2.18-3.088-.448a.75.75 0 0 1-.564-.41L10 4.72z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2.466l1.632 3.29 3.654.532a.75.75 0 0 1 .416 1.279l-2.652 2.579.627 3.641a.75.75 0 0 1-1.088.791L10 12.925l-3.276 1.624a.75.75 0 0 1-1.088-.79l.627-3.641-2.652-2.579a.75.75 0 0 1 .416-1.28l3.654-.531L10 2.466zm0 2.253L8.514 6.09a.75.75 0 0 1-.564.41l-3.088.448 2.24 2.18a.75.75 0 0 1 .215.664l-.529 3.077 2.769-1.374a.75.75 0 0 1 .698 0l2.77 1.374-.53-3.077a.75.75 0 0 1 .215-.664l2.24-2.18-3.088-.448a.75.75 0 0 1-.564-.41L10 4.72z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2.466l1.632 3.29 3.654.532a.75.75 0 0 1 .416 1.279l-2.652 2.579.627 3.641a.75.75 0 0 1-1.088.791L10 12.925l-3.276 1.624a.75.75 0 0 1-1.088-.79l.627-3.641-2.652-2.579a.75.75 0 0 1 .416-1.28l3.654-.531L10 2.466zm0 2.253L8.514 6.09a.75.75 0 0 1-.564.41l-3.088.448 2.24 2.18a.75.75 0 0 1 .215.664l-.529 3.077 2.769-1.374a.75.75 0 0 1 .698 0l2.77 1.374-.53-3.077a.75.75 0 0 1 .215-.664l2.24-2.18-3.088-.448a.75.75 0 0 1-.564-.41L10 4.72z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2.466l1.632 3.29 3.654.532a.75.75 0 0 1 .416 1.279l-2.652 2.579.627 3.641a.75.75 0 0 1-1.088.791L10 12.925l-3.276 1.624a.75.75 0 0 1-1.088-.79l.627-3.641-2.652-2.579a.75.75 0 0 1 .416-1.28l3.654-.531L10 2.466zm0 2.253L8.514 6.09a.75.75 0 0 1-.564.41l-3.088.448 2.24 2.18a.75.75 0 0 1 .215.664l-.529 3.077 2.769-1.374a.75.75 0 0 1 .698 0l2.77 1.374-.53-3.077a.75.75 0 0 1 .215-.664l2.24-2.18-3.088-.448a.75.75 0 0 1-.564-.41L10 4.72z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2.466l1.632 3.29 3.654.532a.75.75 0 0 1 .416 1.279l-2.652 2.579.627 3.641a.75.75 0 0 1-1.088.791L10 12.925l-3.276 1.624a.75.75 0 0 1-1.088-.79l.627-3.641-2.652-2.579a.75.75 0 0 1 .416-1.28l3.654-.531L10 2.466zm0 2.253L8.514 6.09a.75.75 0 0 1-.564.41l-3.088.448 2.24 2.18a.75.75 0 0 1 .215.664l-.529 3.077 2.769-1.374a.75.75 0 0 1 .698 0l2.77 1.374-.53-3.077a.75.75 0 0 1 .215-.664l2.24-2.18-3.088-.448a.75.75 0 0 1-.564-.41L10 4.72z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 p-0">
                <p className="text-blue-gray-700">
                  "The staff was incredibly friendly and accommodating, making
                  me feel welcomed from the moment I arrived. The room was
                  spacious, clean, and beautifully decorated. !!!"
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Submit a Review
                </h2>
                <form onSubmit={handleSubmit}>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Write your review here..."
                    rows="4"
                  ></textarea>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDescription;
