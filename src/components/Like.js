import React, { useState ,useEffect} from 'react';


const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (values) => {
   
    if (isClicked) {
      setLikes(likes + 1);}
    // } else {
    //   setLikes(likes + 1);
    // }
    setIsClicked(!isClicked);
    console.log(values);
    localStorage.setItem("likes",JSON.stringify(likes));
   
  };

  useEffect(()=>{
    const likes = JSON.parse(localStorage.getItem('likes'));
    if (likes) {
     setLikes(likes);
    }
    //  JSON.parse(localStorage.getItem("likes"));
  },[])

  return (
    <div className='l flex flex-wrap'>
      <svg  onClick={ handleClick } xmlns="http://www.w3.org/2000/svg" fill="fill-blue-500" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 fill-red-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<div className='mt-1 ml-3'>
<span className="likes-counter">{`${likes}`}</span>
    </div>
    </div>
    // // <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
    //    <span className="likes-counter">{ `Like | ${likes}` }</span>
    // // </button>
  );
};

export default LikeButton;